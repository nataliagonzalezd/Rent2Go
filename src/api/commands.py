
import click
from api.models import db, Costumer

"""
In this file, you can add as many commands as you want using the @app.cli.command decorator
Flask commands are usefull to run cronjobs or tasks outside of the API but sill in integration 
with youy database, for example: Import the price of bitcoin every night as 12am
"""
def setup_commands(app):
    
    """ 
    This is an example command "insert-test-costumers" that you can run from the command line
    by typing: $ flask insert-test-costumers 5
    Note: 5 is the number of costumers to add
    """
    @app.cli.command("insert-test-costumers") # name of our command
    @click.argument("count") # argument of out command
    def insert_test_data(count):
        print("Creating test costumers")
        for x in range(1, int(count) + 1):
            costumer = Costumer()
            costumer.email = "test_costumer" + str(x) + "@test.com"
            costumer.password = "123456"
            costumer.is_active = True
            db.session.add(costumer)
            db.session.commit()
            print("Costumer: ", costumer.email, " created.")

        print("All test costumers created")

        ### Insert the code to populate others tables if needed