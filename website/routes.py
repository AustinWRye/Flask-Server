from flask import url_for, render_template
from website import app

@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html', title='Home')

@app.route('/projects')
def projects():
    return render_template('projects.html', title='Projects')

@app.route('/about')
def about():
    return render_template('about.html', title='About')