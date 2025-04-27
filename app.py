from flask import Flask, request, jsonify
from openai_service import generate_question, evaluate_answer

app = Flask(__name__)

@app.route('/get_question', methods=['POST'])
def get_question():
    data = request.get_json()
    role = data['role']
    domain = data['domain']
    question = generate_question(role, domain)
    return jsonify({"question": question})

@app.route('/evaluate_answer', methods=['POST'])
def evaluate():
    data = request.get_json()
    question = data['question']
    answer = data['answer']
    evaluation = evaluate_answer(question, answer)
    return jsonify({"evaluation": evaluation})

if __name__ == '__main__':
    app.run(debug=True)
