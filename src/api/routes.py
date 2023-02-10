"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Costumer, Product
from api.utils import generate_sitemap, APIException

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
    results = list(map(lambda item: item.serialize(),allproducts))
    
    return jsonify(results), 200
