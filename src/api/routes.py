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
api = Blueprint('api', __name__)
# Handle/serialize errors like a JSON object
@api.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_cod
@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }
    return jsonify(response_body), 200
@api.route('/product', methods=['POST'])
def add_new_product():
    request_body = request.json
    print(
        request_body
    )
    new_product = Product(name=request_body["name"], sku=request_body["sku"],description=request_body["description"], image=request_body["image"],price=request_body["price"],costumer_id=request_body["costumer_id"],category_id=request_body["category_id"])
    db.session.add(new_product)
    db.session.commit()
    return jsonify({"msg":"Producto creado correctamente"}),200
@api.route('/editprofile', methods=['POST'])
def edit_profile():
    request_body = request.json
    edit_profile = Costumer(name=request_body["name"],email=request_body["email"],password=request_body["password"],username=request_body["username"], lastName=request_body["lastName"],address=request_body["address"], role=request_body["role"],phone=request_body["phone"],image=request_body["image"])
    db.session.add(edit_profile)
    db.session.commit()
    return jsonify({"msg":"Datos de profile obtenidos de forma satisfactoria"}),200
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
@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    costumer = Costumer.query.filter_by(email=email, password=password).first()
    if email != costumer.email or password != costumer.password:
        return jsonify({"msg": "Bad email or password"}), 401
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)
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
#obteniendo info de todos los productos
@api.route('/products', methods=['GET'])
def handle_products():
    allproducts = Product.query.all()
    print(allproducts)
    results = list(map(lambda item: item.serialize(),allproducts))
    print(results)
    return jsonify(results), 200
#obteniendo info de todos los productos
@api.route('/editprofile', methods=['GET'])
def handle_profile():
    profile = Costumer.query.all()
    print(profile)
    results = list(map(lambda item: item.serialize(),profile))
    print(results)
    return jsonify(results), 200
#RECUPERACION CONTRASEÑA OLVIDADA
@api.route("/forgotpassword", methods=["POST"])
def forgotpassword():
    recover_email = request.json['email']
    recover_password = ''.join(random.choice(string.ascii_uppercase + string.digits) for x in range(8))
    #clave aleatoria nueva
    if not recover_email:
        return jsonify({"msg": "Debe ingresar el correo"}), 401
    #busco si el correo existe en mi base de datos
    costumer = Costumer.query.filter_by(email=recover_email).first()
    if recover_email != costumer.email:
        return jsonify({"msg": "El correo ingresado no existe en nuestros registros"}), 400
    #si existe guardo la nueva contraseña aleatoria
    costumer.password = recover_password
    db.session.commit()
    #luego se la envio al usuario por correo para que pueda ingresar
    msg = Message("Hi", recipients=[recover_email])
    msg.html = f"""<h1>Su nueva contraseña es: {recover_password}</h1>"""
    current_app.mail.send(msg)
    return jsonify({"msg": "Su nueva clave ha sido enviada al correo electrónico ingresado"}), 200
#obteniendo info de todos los favoritos
@api.route('/costumer/<int:costumer_id>/favorites', methods=['GET'])
def handle_favorites(costumer_id):
    allfavorites = Favorites.query.filter_by(costumer_id=costumer_id).all()
    results = list(map(lambda item: item.serialize(),allfavorites))
    return jsonify(results), 200
#obteniendo un favorito
@api.route('/costumer/<int:costumer_id>/favorites/<int:favorites_id>', methods=['GET'])
def single_favorite(costumer_id, favorites_id):
    singlefavorite = Favorites.query.filter_by(costumer_id=costumer_id, id=favorites_id).first()
    if singlefavorite is None:
        raise APIException('El producto no existe', status_code=404)
    return jsonify(singlefavorite.serialize()), 200
# #agregando productos a favoritos
@api.route("/costumer/<int:costumer_id>/favorites/product", methods=["POST"])
def add_favorites(costumer_id):
    request_body = request.get_json()
    favorites = Favorites.query.filter_by(costumer_id=costumer_id,product_id=request_body["product_id"]).first()
    if favorites is None:
        newFav = Favorites(
            costumer_id=costumer_id, product_id=request_body["product_id"])
        db.session.add(newFav)
        db.session.commit()
        return jsonify("Producto añadido"), 200
    else:
        return jsonify("Este producto ya existe"), 400
# #eliminando productos de favoritos
@api.route("/costumer/<int:costumer_id>/favorites", methods=["DELETE"])
def del_favorites(costumer_id):
    request_body = request.get_json()
    favorites = Favorites.query.filter_by(costumer_id=costumer_id, product_id=request_body["product_id"]).first()
    if favorites is None:
        raise APIException("No hemos podido encontrar este producto", status_code=404)
    db.session.delete(favorites)
    db.session.commit()
    return jsonify("El producto ha sido eliminado"), 200
#obtener info de customer
@api.route('/register', methods=['GET'])
def handle_costomer():
    allcostumer = Costumer.query.all()
    print(allcostumer)
    results = list(map(lambda item: item.serialize(),allcostumer))
    print(results)
    return jsonify(results), 200

#obtener info category todos
@api.route('/category', methods=['GET'])
def handle_category():
    allcategory = Category.query.all()
    print(allcategory)
    results = list(map(lambda item: item.serialize(),allcategory))
    print(results)

    return jsonify(results), 200

#Obteniendo el producto dentro de una categoria
@api.route('/category/<int:category_id>/products/', methods=['GET'])
def get_products_category(category_id):
    
    category_products = Product.query.filter_by(category_id=category_id).all()
    results = list(map(lambda item: item.serialize(),category_products))

    return jsonify(results), 200

#obtener info category solo 1
@api.route('/category/<int:category_id>', methods=['GET'])
def handle_category_varios(category_id):
    category_one = Category.query.filter_by(id=category_id).first()

    return jsonify(category_one.serialize()), 200

#obteniendo info de un solo product
@api.route('/product/<int:product_id>', methods=['GET'])
def get_info_product(product_id):
    
    product = Product.query.filter_by(id=product_id).first()
    return jsonify(product.serialize()), 200




# -----------------------------------------------------------CART--------------------------------- #

#--- 1) OBTENIENDO todos los prodcutos del carrito --- 
@api.route('/costumer/<int:costumer_id>/cart', methods=['GET'])
def handle_cart(costumer_id):
    allproducts = Cart.query.filter_by(costumer_id=costumer_id).all()
    results = list(map(lambda item: item.serialize(),allproducts))
    return jsonify(results), 200

#--- 2) AGREGANDO un producto al carrito ---
@api.route("/cart", methods=["POST"])
def add_cart():
    request_body = request.get_json()
    addcart = Cart.query.filter_by(costumer_id=request_body["costumer_id"], product_id=request_body["product_id"]).first()
    if addcart is None:
        newAddCart= Cart(costumer_id=request_body["costumer_id"],product_id=request_body["product_id"],price=request_body["price"],quantity=request_body["quantity"])
        db.session.add(newAddCart)
        db.session.commit()
        return jsonify("Producto añadido"), 200
    else:
        return jsonify("Este producto ya existe"), 400


# #--- 3) Eliminando un producto del carrito ---
# @api.route("/costumer/<int:costumer_id>/cart", methods=["DELETE"])
# def del_cart(costumer_id):
#     request_body = request.get_json()
#     prod = Cart.query.filter_by(costumer_id=costumer_id, product_id=request_body["product_id"]).first()
#     if prod is None:
#         raise APIException("No esxiste este producto", status_code=404)
#     db.session.delete(prod)
#     db.session.commit()
#     return jsonify("El producto fue eliminado de tu carrito"), 200

# #--- 4) Traer un producto del carrito ---
# @api.route('/costumer/<int:costumer_id>/cart/<int:cart_id>', methods=['GET'])
# def single_product(costumer_id, cart_id):
#     singleProduct = Cart.query.filter_by(costumer_id=costumer_id, id=cart_id).first()
#     if singleProduct is None:
#         raise APIException('Este producto no existe', status_code=404)
#     return jsonify(singleProduct.serialize()), 200





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




