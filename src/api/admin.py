import os
from flask_admin import Admin
from .models import db, Costumer, Category, Product, Favorites, Related_product, Order_status_code, Order, Order_item, Cart
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the Costumer model to the admin
    admin.add_view(ModelView(Costumer, db.session))
    admin.add_view(ModelView(Category, db.session))
    admin.add_view(ModelView(Product, db.session))
    admin.add_view(ModelView(Favorites, db.session))
    admin.add_view(ModelView(Related_product, db.session))
    admin.add_view(ModelView(Order_status_code, db.session))
    admin.add_view(ModelView(Order, db.session))
    admin.add_view(ModelView(Order_item, db.session))
    admin.add_view(ModelView(Cart, db.session))


    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))