from flask import Flask, request, jsonify
from agent import get_reponse
from flask_cors import CORS
app = Flask(__name__)

CORS(app, resources={r"/api": {"origins": ["http://localhost:5173", "https://ai-relay.vercel.app"]}})


@app.route('/api', methods=['POST', 'OPTIONS'])
def greet():
    if request.method == 'OPTIONS':
        # Preflight request
        response = jsonify({"message": "OK"})
        response.headers.add('Access-Control-Allow-Origin', 'http://localhost:5173')  # Or use '*' for all origins
        response.headers.add('Access-Control-Allow-Methods', 'POST, OPTIONS')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        return response
    data = request.json
    chat = data.get('ChatHistory')
    result=get_reponse(chat)
    return jsonify(
        {"message": f"{result}",}),200

if __name__ == '__main__':
    app.run(debug=True, port=5000)
