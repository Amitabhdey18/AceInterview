from flask import Flask, request, jsonify, redirect, url_for
from flask_cors import CORS
import openai
import random

app = Flask(__name__)
CORS(app)

# Set up OpenAI API Key
openai.api_key = "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"  # Replace with your OpenAI API key

# Define the root route
@app.route('/')
def home():
    return redirect(url_for('ask'))  # Redirect to the /ask route

# Define ask route for interview questions
@app.route('/ask', methods=['POST'])
def ask():
    try:
        data = request.get_json()
        message = data.get('message')
        role = data.get('role')
        domain = data.get('domain')
        interview_type = data.get('interviewType')

        # Ensure data is valid
        if not message or not role or not domain or not interview_type:
            return jsonify({"bot_message": "Please provide all necessary details."}), 400

        # Check if the interview type is valid
        if interview_type not in ["Technical Round", "Communication Round"]:
            return jsonify({"bot_message": "Sorry, I don't have questions for that interview type."}), 400

        # Generate dynamic interview questions using OpenAI API
        prompt = f"Generate an interview question for a {role} in the domain of {domain} during a {interview_type}."
        response = openai.Completion.create(
            engine="text-davinci-003",  # Or another engine
            prompt=prompt,
            max_tokens=100,
            temperature=0.7
        )

        # Extract the question from the OpenAI response
        question = response.choices[0].text.strip()
        return jsonify({'bot_message': question})

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"bot_message": "Something went wrong. Please try again."}), 500

if __name__ == '__main__':
    app.run(debug=True)
