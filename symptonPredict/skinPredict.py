import base64

from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
import tensorflow_hub as hub
import cv2
import numpy as np

app = Flask(__name__)


diseases_data = {
  0: {
    "Disease": "Cellulitis",
    "Description": "Cellulitis is a bacterial skin infection that can occur when bacteria enter a break in the skin. It often causes redness, swelling, and pain.",
    "Precaution1": "Keep the affected area clean and dry",
    "Precaution2": "Avoid scratching the infected area",
    "Remedy1": "Use antibiotics as prescribed by a doctor",
    "Remedy2": "Apply warm compresses to the affected area",
    "Severity": "Mild to severe"
  },
  1: {
    "Disease": "Impetigo",
    "Description": "Impetigo is a highly contagious bacterial skin infection characterized by red sores that can rupture and form honey-colored crusts.",
    "Precaution1": "Avoid close contact with infected individuals",
    "Precaution2": "Practice good hand hygiene",
    "Remedy1": "Use antibiotic ointments as prescribed",
    "Remedy2": "Keep the sores clean and covered",
    "Severity": "Mild to severe"
  },
  2: {
    "Disease": "Athlete's Foot",
    "Description": "Athlete's foot is a fungal infection that affects the skin on the feet, causing itching, redness, and peeling.",
    "Precaution1": "Keep feet clean and dry",
    "Precaution2": "Change socks regularly",
    "Remedy1": "Use antifungal creams or powders",
    "Remedy2": "Practice good foot hygiene",
    "Severity": "Mild"
  },
  3: {
    "Disease": "Nail Fungus",
    "Description": "Nail fungus (onychomycosis) is a fungal infection that affects the nails, causing discoloration, thickening, and brittleness.",
    "Precaution1": "Keep nails clean and dry",
    "Precaution2": "Trim nails regularly",
    "Remedy1": "Use antifungal medications",
    "Remedy2": "Apply tea tree oil or other natural remedies",
    "Severity": "Mild to severe"
  },
  4: {
    "Disease": "Ringworm",
    "Description": "Ringworm is a fungal infection that can affect the skin, scalp, or nails, causing red, itchy, and ring-shaped rashes.",
    "Precaution1": "Avoid sharing personal items",
    "Precaution2": "Keep the affected area clean and dry",
    "Remedy1": "Use antifungal creams or ointments",
    "Remedy2": "Take oral antifungal medications as prescribed",
    "Severity": "Mild to severe"
  },
  5: {
    "Disease": "Cutaneous Larva Migrans",
    "Description": "Cutaneous larva migrans is a skin condition caused by parasitic larvae in the skin, leading to itchy, winding tracks on the skin.",
    "Precaution1": "Avoid walking barefoot in sandy or contaminated areas",
    "Precaution2": "Use protective footwear",
    "Remedy1": "Apply prescribed antiparasitic medications",
    "Remedy2": "Keep the skin clean and dry",
    "Severity": "Mild to severe"
  },
  6: {
    "Disease": "Chickenpox",
    "Description": "Chickenpox is a viral infection that causes an itchy rash with red spots and fluid-filled blisters.",
    "Precaution1": "Practice good hygiene, especially handwashing",
    "Precaution2": "Avoid close contact with infected individuals",
    "Remedy1": "Use antiviral medications as prescribed",
    "Remedy2": "Apply calamine lotion or take oatmeal baths to relieve itching",
    "Severity": "Mild to severe"
  },
  7: {
    "Disease": "Shingles",
    "Description": "Shingles is a viral infection that causes a painful rash with blisters, typically occurring in a band on one side of the body.",
    "Precaution1": "Get vaccinated against shingles",
    "Precaution2": "Avoid contact with individuals who have not had chickenpox or the chickenpox vaccine",
    "Remedy1": "Take antiviral medications as prescribed",
    "Remedy2": "Apply cool compresses and take pain relievers as recommended",
    "Severity": "Mild to severe"
  }
}
# Define prediction endpoint
@app.route('/api/predict', methods=['POST'])
def predict():
    # print(request.files)
    # if 'file' not in request.files:
    #     response = jsonify({'Error': "File not available"})
    #     response.status_code = 400
    #     return response
    #
    #
    # file = request.files['file']
    #
    # # If the user does not select a file, the browser might submit an empty part without a filename
    # if file.filename == '':
    #     response = jsonify({'Error': "File name not available"})
    #     response.status_code = 400
    #     return response
    #
    # # Read the uploaded image using OpenCV
    # img = cv2.imdecode(np.frombuffer(file.read(), np.uint8), cv2.IMREAD_COLOR)

    if 'image' not in request.json:
        response = jsonify({'Error': "Image not available"})
        response.status_code = 400
        return response

    base64_image = request.json['image']

    # Decode base64-encoded image
    image_data = base64.b64decode(base64_image)
    nparr = np.frombuffer(image_data, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

    custom_objects = {'KerasLayer': hub.KerasLayer}

    model = load_model('my_model.h5', custom_objects=custom_objects)
    threshold = 0.5
    if img is not None:
        img = cv2.resize(img, (224, 224))
        img = img / 255.0
        img = np.expand_dims(img, axis=0)
        predictions = model.predict(img)
        print(np.argmax(predictions))
        if np.max(predictions) < threshold:
            response = jsonify({'warn': "No Diseases detected"})
            response.status_code = 202
            return response
    else:
        response = jsonify({'error': "Image not available"})
        response.status_code = 400
        return response

    max_index = np.argmax(predictions)
    return diseases_data.get(max_index)

if __name__ == '__main__':
    app.run(port=5000)