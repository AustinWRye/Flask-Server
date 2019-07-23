from flask import Flask
from flask_restful import Api

from config import (
    DevConfig,
    ProdConfig
)

from api.endpoints.hello import Hello


def create_app(debug=True):
    config = DevConfig if debug else ProdConfig

    # Create app
    app = Flask(__name__)

    # Set configuration variables
    app.config.from_object(config)
    # app.secret_key = app.config['APP_SECRET_KEY']

    # Create api
    api = Api(app)

    register_extensions(app)
    register_endpoints(api)

    return app


def register_extensions(app):
    pass


def register_endpoints(api):
    api.add_resource(Hello, '/api/')
