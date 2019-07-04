CLASS_CONFIG = 'DevConfig'


class Config():
    ############################################################################
    # flask                                                                    #
    ############################################################################
    DEBUG = False
    TESTING = False


class ProductionConfig(Config):
    ############################################################################
    # flask                                                                    #
    ############################################################################
    ENV = 'production'


class DevelopmentConfig(Config):
    ############################################################################
    # flask                                                                    #
    ############################################################################
    ENV = 'development'
    DEBUG = True


class TestingConfig(Config):
    TESTING = True
