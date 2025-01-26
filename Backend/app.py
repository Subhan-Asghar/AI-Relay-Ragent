from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api', methods=['GET'])
def greet():
    # Get data from the request (sent by the JavaScript frontend)
    data = request.json
    name = data.get('name', 'Guest')
    # Process and return a response
    return jsonify({"message": f"Hello, {name}!"})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
