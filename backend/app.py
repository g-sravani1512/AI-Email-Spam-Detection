from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    email_text = data.get("text", "").lower()

    spam_keywords = ["win", "free", "offer", "click", "urgent"]
    is_spam = any(word in email_text for word in spam_keywords)

    if is_spam:
        prediction = "Spam"
    else:
        prediction = "Not Spam"

    return jsonify({"prediction": prediction})


if __name__ == "__main__":
    app.run(debug=True)
