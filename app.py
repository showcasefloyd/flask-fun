from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route("/")
def home():
    return "<h1> Hello, World! Welcome to Flask </h1>"


@app.route("/api/hello")
def hello():
    return jsonify({"message": "Hello from Flask API!"})

if __name__ == "__-main-__":
    app.run(debug=True)