from flask import Flask, request, jsonify
from agent import get_reponse
from flask_cors import CORS

app = Flask(__name__)

# Apply CORS globally for all routes
CORS(app, origins=["http://localhost:5173", "https://ai-relay.vercel.app"], supports_credentials=True)

@app.route('/api', methods=['POST', 'OPTIONS'])
def greet():
    if request.method == 'OPTIONS':
        
        response = jsonify({"message": "Preflight OK"})
        response.headers.add('Access-Control-Allow-Origin', request.headers.get('Origin'))
        response.headers.add('Access-Control-Allow-Methods', 'POST, OPTIONS')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        return response, 200

    # Handle POST request
    data = request.json
    if not data or 'ChatHistory' not in data:
        return jsonify({"error": "Invalid input. 'ChatHistory' is required."}), 400

    chat = data.get('ChatHistory')
    result = get_reponse(chat)
    return jsonify({"message": f"{result}"}), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)
