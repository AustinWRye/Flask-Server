from website import app
from config import *

if __name__ == '__main__':
    app.run(debug=debug, host=host, port=port)