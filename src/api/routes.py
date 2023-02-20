"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint,current_app,json
from api.models import db, Costumer, Product, Favorites, Cart
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
from flask_mail import Message
import random
import string
import os

# SDK de Mercado Pago
import mercadopago
# Agrega credenciales
sdk = mercadopago.SDK("APP_USR-2815099995655791-092911-c238fdac299eadc66456257445c5457d-1160950667")


api = Blueprint('api', __name__)
# Handle/serialize errors like a JSON object

@api.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_cod

# any other endpoint will try to serve it like a static file
@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }
    return jsonify(response_body), 200


# -----------------------------------------------------------endpoints --------------------------------- #
    # generate sitemap with all your endpoints
@api.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file
@api.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0 # avoid cache memory
    return response


# ----------------------------------------------------------- MERCADO PAGO --------------------------------- #
@api.route("/preference", methods=["POST"])
def preference():
    body = json.loads(request.data)
    total = body["total"]  
    # Crea un ítem en la preferencia
    preference_data = {
        "items": [
            {
                "title": "Rent2Go",
                "quantity": 1,
                "unit_price":total,
            }
        ],
        "payer":{
            "email":"test_user_17805074@testuser.com"
        },
        "back_urls": {
            "success": "https://3000-nataliagonzalez-rent2go-56m5il55oso.ws-us87.gitpod.io",
            "failure": "https://3000-nataliagonzalez-rent2go-56m5il55oso.ws-us87.gitpod.io",
            "pending": "https://3000-nataliagonzalez-rent2go-56m5il55oso.ws-us87.gitpod.io"
	},
        "auto_return": "approved"
    }

    preference_response = sdk.preference().create(preference_data)
    preference = preference_response["response"]
    return preference, 200

# ----------------------------------------------------------- Login  --------------------------------- #

#---  Ingresando a la pagina (login) ---
@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    costumer = Costumer.query.filter_by(email=email, password=password).first()
    if email != costumer.email or password != costumer.password:
        return jsonify({"msg": "Bad email or password"}), 401
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token, costumer_id=costumer.id) 

# ---  Elimina un producto  ---
@api.route('/product/<int:costumer_id>/<int:id>', methods=['DELETE'])
def delete_product(costumer_id,id):
    request_body=request.json
    print(request_body)
    print(costumer_id)
    query= Product.query.filter_by(costumer_id=costumer_id,id=id).first()
    print(query)
    if query is None:
        return jsonify({"msg":"No hubo coincidencias, no hay nada para eliminar"}),404
    db.session.delete(query)
    db.session.commit()
    return jsonify({"msg":"El producto seleccionado ha sido eliminado correctamente"}),


# ----------------------------------------------------------- Productos--------------------------------- #



#--- OBTENIENDO un producto por id --- 
@api.route('/costumer/<int:costumer_id>/product/detail/<int:id>', methods=['GET'])
def handle_product_detail(costumer_id,id):
    productsDetail = Product.query.filter_by(costumer_id=costumer_id,id=id).all()
    results = list(map(lambda item: item.serialize(),productsDetail))
    return jsonify(results), 200   

#--- agregando post de product ---
@api.route('/product', methods=['POST'])
def add_new_product():
    request_body = request.json
    print(
        request_body
    )
    new_product = Product(name=request_body["name"], description=request_body["description"], image=request_body["image"],price=request_body["price"],costumer_id=request_body["costumer_id"],category_id=request_body["category_id"])
    db.session.add(new_product)
    db.session.commit()
    return jsonify({"msg":"Producto creado correctamente"}),200

#---  obteniendo info de todos los productos ---
@api.route('/products', methods=['GET'])
def handle_products():
    allproducts = Product.query.all()
    print(allproducts)
    results = list(map(lambda item: item.serialize(),allproducts))
    print(results)
    return jsonify(results), 200

#---  obteniendo info de todos los productos ---
@api.route('/editprofile', methods=['GET'])
def handle_profile():
    profile = Costumer.query.all()
    print(profile)
    results = list(map(lambda item: item.serialize(),profile))
    print(results)
    return jsonify(results), 200


# ----------------------------------------------------------- RECUPERACION CONTRASEÑA OLVIDADA --------------------------------- #

#---  POST  Recuperar contraseña --
@api.route("/forgotpassword", methods=["POST"])
def forgotpassword():
    recover_email = request.json['email']
    recover_password = ''.join(random.choice(string.ascii_uppercase + string.digits) for x in range(8))
    # 1) clave aleatoria nueva 
    if not recover_email:
        return jsonify({"msg": "Debe ingresar el correo"}), 401
    #2) busco si el correo existe en mi base de datos
    costumer = Costumer.query.filter_by(email=recover_email).first()
    if recover_email != costumer.email:
        return jsonify({"msg": "El correo ingresado no existe en nuestros registros"}), 400
    #3) si existe guardo la nueva contraseña aleatoria
    costumer.password = recover_password
    db.session.commit()
    #4) luego se la envio al usuario por correo para que pueda ingresar
    msg = Message("Hi", recipients=[recover_email])
    msg.html = f"""<h1>Su nueva contraseña es: {recover_password}</h1>"""
    current_app.mail.send(msg)
    return jsonify({"msg": "Su nueva clave ha sido enviada al correo electrónico ingresado"}), 200


# ----------------------------------------------------------- Favoritos --------------------------------- #

#---  Obteniendo info de todos los favoritos ---
@api.route('/favorites/<int:costumer_id>', methods=['GET'])
def handle_favorites(costumer_id):
    allfavorites = Favorites.query.filter_by(costumer_id=costumer_id).all()
    results = list(map(lambda item:{**item.serialize(),**item.serialize3()},allfavorites))
    return jsonify(results), 200


# #---  AGREGANDO un producto al carrito ---
# @api.route("/costumer/<int:costumer_id>/cart/<int:id>", methods=["POST"])
# def add_cart(costumer_id,id):
#     addcart = Cart.query.filter_by(costumer_id=costumer_id, product_id=id).first()
#     if addcart is None:
#         newAddCart= Cart(costumer_id=costumer_id,product_id=id,status=True)
#         db.session.add(newAddCart)
#         db.session.commit()
#         activeCart = Cart.query.filter_by(costumer_id=costumer_id, status=True).all()
#         results = list(map(lambda item:{**item.serialize(),**item.serialize2()},activeCart))
#         return jsonify(results), 200
#     else:
#         return jsonify("Este producto ya existe"), 400

#---  agregando productos a favoritos ---
@api.route("/costumer/<int:costumer_id>/favorites/<int:id>", methods=["POST"])
def add_favorites(costumer_id, id):
    addfavorites = Favorites.query.filter_by(costumer_id=costumer_id, product_id=id).first()
    if addfavorites is None:
        newFav = Favorites(costumer_id=costumer_id,product_id=id,status=True)
        db.session.add(newFav)
        db.session.commit()
        activeFav = Favorites.query.filter_by(costumer_id=costumer_id, status=True).all()
        results = list(map(lambda item:{**item.serialize(),**item.serialize3()},activeFav))
        return jsonify(results), 200
    else:
        return jsonify("Este producto ya existe"), 400

#---  eliminando productos de favoritos ---
@api.route("/costumer/<int:costumer_id>/favorites", methods=["DELETE"])
def del_favorites(costumer_id):
    request_body = request.get_json()
    favorites = Favorites.query.filter_by(costumer_id=costumer_id, product_id=request_body["product_id"]).first()
    if favorites is None:
        raise APIException("No hemos podido encontrar este producto", status_code=404)
    db.session.delete(favorites)
    db.session.commit()
    return jsonify("El producto ha sido eliminado"), 200


# ----------------------------------------------------------- Costumer --------------------------------- #

#---  Creando un nuevo usuario  ---
@api.route('/register', methods=['POST'])
def crear_Usuario():
    request_body = request.json #Guardo la respuesta que trae la solicitud en una variable que se llama "request_body" que es un objeto
    print(request_body)
    get_costumer = Costumer.query.filter_by(email = request_body["email"]).first() #Filtro User para que me diga si este email ya esta registrado
    if get_costumer is None: #si no esta registrado que cree uno
        crear_nuevo_usuario = Costumer(email= request_body["email"] , username = request_body["username"], password= request_body["password"])
        db.session.add(crear_nuevo_usuario)
        db.session.commit()
        return jsonify({"msg":"Nuevo usuario ha sido creado"}), 200
    else:
        return jsonify({"msg":"El email ya esta registrado."}), 400

#---  Obtener info de customer ---
@api.route('/register', methods=['GET'])
def handle_costomer():
    allcostumer = Costumer.query.all()
    print(allcostumer)
    results = list(map(lambda item: item.serialize(),allcostumer))
    print(results)
    return jsonify(results), 200

#---  obtener info category todos ---
@api.route('/category', methods=['GET'])
def handle_category():
    allcategory = Category.query.all()
    print(allcategory)
    results = list(map(lambda item: item.serialize(),allcategory))
    print(results)
    return jsonify(results), 200

#---  Obteniendo el producto dentro de una categoria---
@api.route('/category/<int:category_id>/products/', methods=['GET'])
def get_products_category(category_id):
    
    category_products = Product.query.filter_by(category_id=category_id).all()
    results = list(map(lambda item: item.serialize(),category_products))
    return jsonify(results), 200

#---  obtener info category solo 1 ---
@api.route('/category/<int:category_id>', methods=['GET'])
def handle_category_varios(category_id):
    category_one = Category.query.filter_by(id=category_id).first()
    return jsonify(category_one.serialize()), 200

#---  Obteniendo info de un solo product---
@api.route('/product/<int:product_id>', methods=['GET'])
def get_info_product(product_id): 
    product = Product.query.filter_by(id=product_id).first()
    return jsonify(product.serialize()), 200

#---  Completando el perfil ---
@api.route('/editprofile', methods=['POST'])
def edit_profile():
    request_body = request.json
    edit_profile = Costumer(name=request_body["name"],email=request_body["email"],password=request_body["password"],username=request_body["username"], lastName=request_body["lastName"],address=request_body["address"], role=request_body["role"],phone=request_body["phone"],image=request_body["image"])
    db.session.add(edit_profile)
    db.session.commit()
    return jsonify({"msg":"Datos de profile obtenidos de forma satisfactoria"}),200

# -----------------------------------------------------------CART--------------------------------- # 

#---  AGREGANDO un producto al carrito ---
@api.route("/costumer/<int:costumer_id>/cart/<int:id>", methods=["POST"])
def add_cart(costumer_id,id):
    addcart = Cart.query.filter_by(costumer_id=costumer_id, product_id=id).first()
    if addcart is None:
        newAddCart= Cart(costumer_id=costumer_id,product_id=id,status=True)
        db.session.add(newAddCart)
        db.session.commit()
        activeCart = Cart.query.filter_by(costumer_id=costumer_id, status=True).all()
        results = list(map(lambda item:{**item.serialize(),**item.serialize2()},activeCart))
        return jsonify(results), 200
    else:
        return jsonify("Este producto ya existe"), 400

# #---  Traer un producto del carrito ---

@api.route('/cart/<int:costumer_id>', methods=['GET'])
def cart(costumer_id):
    allcart = Cart.query.filter_by(costumer_id=costumer_id).all()
    print(allcart)
    results = list(map(lambda item:{**item.serialize(),**item.serialize2()},allcart))
    print(results)
    return jsonify(results), 200

#---  Eliminando un producto del carrito ---
@api.route("/cart", methods=["DELETE"])
def del_cart():
    request_body = request.get_json()
    delcart = Cart.query.filter_by(costumer_id=request_body["costumer_id"], product_id=request_body["product_id"]).first()
    if delcart is None:
        raise APIException("No esxiste este producto", status_code=404)
    db.session.delete(delcart)
    db.session.commit()
    return jsonify("El producto fue eliminado de tu carrito"), 200

# #--- 3.1) Eliminando un producto del carrito ---
# @api.route("/costumer/<int:costumer_id>/cart", methods=["DELETE"])
# def del_cart(costumer_id):
#     request_body = request.get_json()
#     cartt = Cart.query.filter_by(costumer_id=costumer_id, product_id=request_body["product_id"]).first()
#     if cartt is None:
#         raise APIException("No esxiste este producto", status_code=404)
#     db.session.delete(cartt)
#     db.session.commit()
#     return jsonify("El producto fue eliminado de tu carrito"), 200





# #--- añadiendo productos del carrito --- 
# @api.route("/costumer/<int:costumer_id>/cart", methods=["POST"])
# def add_cart(costumer_id):
#     request_body = request.get_json()
#     addcart = Cart.query.filter_by(costumer_id=costumer_id, product_id=request_body["product_id"]).first()
#     if addcart is None:
#         newAddCart= Cart(
#             costumer_id=costumer_id, product_id=request_body["product_id"])
#         db.session.add(newAddCart)
#         db.session.commit()
#         return jsonify("Producto añadido"), 200
#     else:
#         return jsonify("Este producto ya existe"), 400

# #--- Eliminando un producto del carrito ---
# @api.route("/costumer/<int:costumer_id>/cart", methods=["DELETE"])
# def del_cart(costumer_id):
#     request_body = request.get_json()
#     prod = Cart.query.filter_by(costumer_id=costumer_id, product_id=request_body["product_id"]).first()
#     if prod is None:
#         raise APIException("No esxiste este producto", status_code=404)
#     db.session.delete(prod)
#     db.session.commit()
#     return jsonify("El producto fue eliminado de tu carrito"), 200   




