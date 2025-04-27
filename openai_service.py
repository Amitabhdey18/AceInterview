import openai

# Set up API key
openai.api_key = "your-api-key-here"  # Replace with your actual OpenAI API key

def generate_question(role, domain):
    response = openai.Completion.create(
        model="gpt-3.5-turbo", 
        prompt=f"Generate an interview question for a {role} in {domain}",
        max_tokens=100
    )
    return response['choices'][0]['text'].strip()

def evaluate_answer(question, answer):
    prompt = f"Evaluate this interview answer:\nQuestion: {question}\nAnswer: {answer}\nProvide a score from 1 to 10 on how well the answer addresses the question and give brief feedback."
    
    response = openai.Completion.create(
        model="gpt-3.5-turbo",
        prompt=prompt,
        max_tokens=150
    )

    # Extract score and feedback
    evaluation = response['choices'][0]['text'].strip()
    return evaluation
