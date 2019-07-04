import os
from flask import Flask

from backend.config import (
    DevelopmentConfig,
    ProductionConfig,
    TestingConfig
)


def create_app():
    app = Flask(__name__)
    app.config.from_object(DevelopmentConfig if os.environ.get(
        'FLASK_DEBUG') else ProductionConfig)

    from backend.main.routes import main
    app.register_blueprint(main)

    return app
