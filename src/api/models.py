from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Costumer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    name = db.Column(db.String(120), unique=False, nullable=True)
    lastName = db.Column(db.String(120), unique=False, nullable=True)
    password = db.Column(db.String(80), unique=False, nullable=False)
    username = db.Column(db.String(80), unique=False, nullable=False)
    address = db.Column(db.String(200), unique=False, nullable=True)
    role = db.Column(db.String(80), unique=False, nullable=True)
    phone = db.Column(db.String(80), unique=False, nullable=True)
    image = db.Column(db.String(120), unique=False, nullable=True)
    favorites = db.relationship('Favorites', backref='costumer', lazy=True)
    product = db.relationship('Product', backref='costumer', lazy=True)
    order = db.relationship('Order', backref='costumer', lazy=True)
    cart = db.relationship('Cart', backref='costumer', lazy=True)


    def __repr__(self):
        return f'<Costumer {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "lastName": self.lastName,
            "image": self.image,
            "username": self.username,
            "address": self.address,
            "role": self.role,
            "phone": self.phone,
            # do not serialize the password, its a security breach
        }

class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    code = db.Column(db.String(80), unique=False, nullable=False)
    product = db.relationship('Product', backref='category', lazy=True)
    related = db.relationship('Related_product', backref='category', lazy=True)
    

    def __repr__(self):
        return f'<Category {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "code": self.code,
        }

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    description = db.Column(db.String(120), unique=False, nullable=False)
    image = db.Column(db.String(120), unique=False, nullable=False)
    price = db.Column(db.Integer, unique=False, nullable=False)
    costumer_id = db.Column(db.Integer, db.ForeignKey('costumer.id'), nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'), nullable=False)
    favorites = db.relationship('Favorites', backref='product', lazy=True)
    related_product = db.relationship('Related_product', backref='product', lazy=True)
    order_item = db.relationship('Order_item', backref='product', lazy=True)
    cart = db.relationship('Cart', backref='product', lazy=True)
    

    
    def __repr__(self):
        return f'<Products {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "image": self.image,
            "price": self.price,
            "costumer_id": self.costumer_id,
            "category_id": self.category_id
        }

class Favorites(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=True)
    costumer_id = db.Column(db.Integer, db.ForeignKey('costumer.id'), nullable=True)
    status= db.Column(db.Boolean, unique=False, nullable=False)



    def __repr__(self):
        return f'<Favorites {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "product_id": self.product_id,
            "costumer_id": self.costumer_id
        }

    def serialize3(self):
        product = Product.query.filter_by(id=self.product_id).first()
        print(product.serialize())
        return {    
            "productinfo":product.serialize()
        }

class Related_product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=True)
    related_product = db.Column(db.String(120), unique=False, nullable=False) 
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'), nullable=True)



    def __repr__(self):
        return f'<Related_product {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "product_id": self.product_id,
            "related_product": self.related_product,
            "category_id": self.category_id
        }

class Order_status_code(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    status_code = db.Column(db.Integer, unique=False, nullable=False)
    description = db.Column(db.String(120), unique=False, nullable=False)
    order = db.relationship('Order', backref='order_status_code', lazy=True)
    
    def __repr__(self):
        return f'<Order_status_code {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "status_code": self.status_code,
            "description": self.description,
        }


class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    order_status_code_id = db.Column(db.Integer, db.ForeignKey('order_status_code.id'), nullable=True) 
    costumer_id = db.Column(db.Integer, db.ForeignKey('costumer.id'), nullable=True)
    order_item = db.relationship('Order_item', backref='order', lazy=True)


    def __repr__(self):
        return f'<Order {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "order_status_code_id": self.order_status_code_id,
            "costumer_id": self.costumer_id,
        }


class Order_item(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey('order.id'), nullable=True)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=True)
    quantity = db.Column(db.Integer, unique=False, nullable=False)
    price = db.Column(db.Integer, unique=False, nullable=False)
    


    def __repr__(self):
        return f'<Order_item {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "order_id": self.order_id,
            "product_id": self.product_id,
            "quantity": self.quantity,
            "price": self.price
            
        }


class Cart(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    costumer_id = db.Column(db.Integer, db.ForeignKey('costumer.id'), nullable=True)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=True)
    quantity = db.Column(db.Integer, unique=False, nullable=True)
    price = db.Column(db.Integer, unique=False, nullable=True)
    status= db.Column(db.Boolean, unique=False, nullable=False)
    
    def __repr__(self):
        return f'<Cart {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "costumer_id": self.costumer_id,
            "product_id": self.product_id,
            "quantity": self.quantity,
            "price": self.price           
        }

    def serialize2(self):
        product = Product.query.filter_by(id=self.product_id).first()
        print(product.serialize())
        return {    
            "productinfo":product.serialize()
        }