# **Flask Server**

# **Table of Contents**

1. [Introduction](#introduction)
    1. [Starting the Server](#starting-the-server)
2. [Tutorials](#tutorials)
    1. [Routing](#routing)
    2. [URL Building](#url-building)
    3. [Rendering Templates](#rendering-templates)
3. [Extras](#extras)
    1. [Dependencies](#dependencies)
    2. [Imports](#imports)
    

# **Introduction**

# Starting the Server
In the server root directory, run the following command:
```bash
$ python3 run.py
```

# **Tutorials**

# Routing
Use the `route()` decorator to bind a function to a URL:
```python
@app.route('/')
def hello():
    return 'Hello World!'
```

# URL Building
To build a URL to a specific function, use the url_for() function. It generates
a URL to the given endpoint with the method provided:
```python
from flask import url_for

@app.route('/')
def hello():
    return 'Hello World!'
```
```python
url_for('hello')
```

# Rendering Templates
To render a template, use the `render_template()` method, which takes a template
name as the first argument and any additional arguments to load in the template:
from flask import render_template
```python
from flask import render_template

@app.route('/hello/')
@app.route('/hello/<name>')
def hello(name=None):
    return render_template('hello.html', name=name)
```
Flask will look for templates in the `templates` folder typically located in the
app's directory. Here's an example template:
```html
<!doctype html>
<title>Hello from Flask</title>
{% if name %}
  <h1>Hello {{ name }}!</h1>
{% else %}
  <h1>Hello, World!</h1>
{% endif %}
```

# **Extras**

# Dependencies

## pip3
* `flask`: micro web framework

# Imports
* `Flask`: micro web framework
* `url_for`: generates a URL to a given endpoint
* `render_template`: renders a template