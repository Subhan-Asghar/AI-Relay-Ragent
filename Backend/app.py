from flask import Flask, request, jsonify
from agent import get_reponse
from flask_cors import CORS

app = Flask(__name__)

# Allow CORS for specific origins
CORS(app, resources={r"/api": {"origins": ["http://localhost:5173", "https://ai-relay.vercel.app"]}})

@app.route('/api', methods=['POST'])
def greet():
    try:
        data = request.json
        if not data or 'ChatHistory' not in data:
            return jsonify({"error": "Invalid input. 'ChatHistory' is required."}), 400

        chat = data.get('ChatHistory')
        result = get_reponse(chat)

        return jsonify({"message": f"{result}"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api', methods=['OPTIONS'])
def handle_options():
    response = jsonify({"message": "Preflight OK"})
    response.headers.add('Access-Control-Allow-Origin', "http://localhost:5173, https://ai-relay.vercel.app")
    response.headers.add('Access-Control-Allow-Methods', 'POST, OPTIONS')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    return response, 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)
