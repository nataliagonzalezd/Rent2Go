"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models import db, Costumer, Product
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

#from models import Person

ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

# database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type = True)
db.init_app(app)

# Allow CORS requests to this API
CORS(app)

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)


app.config['JWT_SECRET_KEY'] = 'jwt-secret-string'

jwt = JWTManager(app)
# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0 # avoid cache memory
    return response

#@app.route('/register', methods=['POST'])
#def add_costumer():
 #   allusers = User.query.all()
  #  results = list(map(lambda item: item.serialize(),allusers))
    #request_body = json.loads(request.data)
   # results.append(request_body)
    #return jsonify(results), 201

@app.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    costumer = Costumer.query.filter_by(email=email, password=password).first()

    if email != costumer.email or password != costumer.password:
        return jsonify({"msg": "Bad email or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

@app.route('/register', methods=['POST'])
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



@app.route('/product', methods=['POST'])
def add_new_product():
    request_body = request.json
    new_product = Product(id=request_body["id"], name=request_body["name"], sku=request_body["sku"],description=request_body["description"], image=request_body["image"],price=request_body["price"],costumer_id=request_body["costumer_id"],category_id=request_body["category_id"])
    db.session.add(new_product)
    db.session.commit()
    return jsonify({"msg":"Producto creado correctamente"}),200

@app.route('/product/<int:costumer_id>/<int:id>', methods=['DELETE'])
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
@app.route('/products', methods=['GET'])
def handle_products():
    allproducts = Product.query.all()
    results = list(map(lambda item: item.serialize(),allproducts))
    
    return jsonify(results), 200

#obtener info de customer
@app.route('/register', methods=['GET'])
def handle_costomer():
    allcostumer = Costumer.query.all()
    print(allcostumer)
    results = list(map(lambda item: item.serialize(),allcostumer))
    print(results)

    return jsonify(results), 200


# #obteniendo info de un solo product
@app.route('/product/<int:product_id>', methods=['GET'])
def get_info_product(product_id):
    
    product = Product.query.filter_by(id=product_id).first()
    return jsonify(product.serialize()), 200

# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)