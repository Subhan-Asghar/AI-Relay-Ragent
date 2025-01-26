from flask import Flask, request, jsonify
from agent import get_reponse
from flask_cors import CORS
app = Flask(__name__)

CORS(app, resources={r"/api": {"origins": "https://ai-relay.vercel.app"}})

@app.route('/api', methods=['POST'])
def greet():
    data = request.json
    chat = data.get('ChatHistory')
    result=get_reponse(chat)
    return jsonify(
        {"message": f"{result}",}),200

if __name__ == '__main__':
    app.run(debug=True, port=5000)
