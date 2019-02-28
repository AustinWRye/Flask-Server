# **Flask Server**

# **Table of Contents**

1. [Introduction](#introduction)
    1. [Starting the Server](#starting-the-server)
2. [Tutorials](#tutorials)
    1. [Front-End](#front-end)
        1. [HTML5 Doctype](#html5-doctype)
        2. [Responsive Meta Tag](#responsive-meta-tag)
    2. [Back-End](#back-end)
        1. [Routing](#routing)
        2. [URL Building](#url-building)
        3. [Static Files](#static-files)
        4. [Rendering Templates](#rendering-templates)
        5. [Template Inheritance](#template-inheritance)
    3. [Plugins](#plugins)
        1. [jQuery](#jquery)
        2. [Bootstrap](#bootstrap)
        3. [Popper.js](#popper.js)
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
---

# **Front-End**

# HTML5 Doctype
The `<!DOCTYPE>` declaration is an instruction to the web browser about what
version of HTML the page is written in and must be the first thing in an HTML
document:
```html
<!doctype html>
<html lang="en">
    ...
</html>
```

# Responsive Meta Tag
The `<meta>` tag provides metadata about the HTML document, which can be used to
specify page description or used by browsers (how to display content or reload
page), search engines (keywords), or other web services:
```html
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Free Web tutorials">
    <meta name="keywords" content="HTML,CSS,XML,JavaScript">
    <meta name="author" content="John Doe">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
```

# **Back-End**

# Routing
Use the `route()` decorator to bind a function to a URL:
```python
# routes.py
@app.route('/')
def hello():
    return 'Hello World!'
```

# URL Building
To build a URL to a specific function, use the url_for() function. It generates
a URL to the given endpoint with the method provided:
```python
# routes.py
from flask import url_for

@app.route('/')
def hello():
    return 'Hello World!'
```
```python
url_for('hello')
```

# Static Files
Flask automatically adds a `static` view that takes a path relative to the
`flaskr/static` directory and serves it. This `static` view includes `CSS` and
`JavaScript` files that can be referenced in a `template` with:
```html
<!-- CSS Static File-->
<link rel="stylesheet" href="{{ url_for('static', 'static.css') }}">

<!-- JavaScript Static File -->
<script src="{{ url_for('static', filename='static.js') }}"></script>
```

# Rendering Templates
To render a template, use the `render_template()` method, which takes a template
name as the first argument and any additional arguments to load in the template:
from flask import render_template
```python
# routes.py
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

# Template Inheritance
Template inheritance allows you to build a base “skeleton” template that
contains all the common elements of your site and defines blocks that child
templates can override.
```html
<!-- layout.html -->
...
<div id="content">{% block content %}{% endblock %}</div>
...
```
```html
<!-- hello.html -->
{% extends "layout.html" %}

{% block content %}
  <h1>Hello World!</h1>
{% endblock %}
```

# **Plugins**

# jQuery
jQuery is a library that makes it easier to use JavaScript by wrapping many
lines of code into methods that are called with a single line of code. The
jQuery library contains HTML/DOM manipulation, CSS manipulation, HTML event
methods, effects and animations, ajax, and utilities.

# Bootstrap
Bootstrap is a front-end framework for faster and easier web development. It
includes HTML and CSS based design templates for typography, forms, buttons,
tables, navigation, modals, image carousels and many other, as well as optional
JavaScript plugins. Its also very useful for easily creating responsive designs.

# Popper.js
Popper.js is a positioning engine with the purpose of calculating the position
of an element to make it possible to position it near a given reference element.

# **Extras**

# Dependencies

## pip3
* `flask`: micro web framework

# Imports
* `Flask`: micro web framework
* `url_for`: generates a URL to a given endpoint
* `render_template`: renders a template