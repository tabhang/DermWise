from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)


# Define prediction endpoint
@app.route('/predict', methods=['POST'])
def predict():
    model = joblib.load("Symptoms_new.joblib", mmap_mode=None)
    data = request.get_json(force=True)
    input_array = data['input_array']

    # Make predictions using the loaded model
    prediction = model.predict(input_array)
    return jsonify({'prediction': prediction[0]})


if __name__ == '__main__':
    app.run(port=5000)
