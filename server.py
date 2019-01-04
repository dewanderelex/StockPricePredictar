# webapp
from flask import Flask, jsonify, render_template, request

#app = Flask(__name__, static_folder="../client/build", static_url_path='')
app = Flask(__name__)

@app.route('/')
def index():
    #return app.send_static_file('index.html')
    return "<h1> Deployed </h1>"

if __name__ == '__main__':
#     #app.run(debug=True, host='0.0.0.0', port = 8080)
    app.run(debug = True)