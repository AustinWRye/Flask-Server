from flask import url_for, render_template
from website import app

@app.route('/')
def home():
    return render_template('home.html', title='Home')