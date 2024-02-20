# DermWise (HackBU_24)
## Devpost : https://devpost.com/software/dermwise

## Dataset: [https://www.kaggle.com/datasets/itachi9604/disease-symptom-description-dataset](https://www.kaggle.com/datasets/subirbiswas19/skin-disease-dataset?resource=download)

## How was it built 
The system comprises a React Native UI for seamless mobile app interaction, a Python backend handling data processing and server-side logic, and a trained model specialized in detecting skin conditions. Users interact with the React Native UI on their mobile devices, which communicates with the Python backend. The backend orchestrates requests, processes data, and interfaces with the trained model for skin condition detection. We used a type of model called a Sequential model. This means we can stack layers one after the other, creating a linear flow of data. Our model consists of two main parts: a feature extractor layer and a dense layer. Before we can train our model, we need to configure some settings. We chose the 'adam' optimizer, which is like a guide that helps the model adjust and improve its predictions over time. We defined the 'sparse_categorical_crossentropy' as our loss function. Together, these components form an integrated system providing users with a convenient, efficient, and reliable tool for skin condition detection via their mobile devices.

## Screenshots
![image](https://github.com/tabhang/DermWise/assets/54100570/e3d22554-5478-4580-a29e-cfc47da971c3)
![image](https://github.com/tabhang/DermWise/assets/54100570/031ed82d-7dd1-4095-932b-b2c497ac904c)
![image](https://github.com/tabhang/DermWise/assets/54100570/e2732c02-a3a6-4727-b1a8-09d3582ca845)

## Resources 
* https://tfhub.dev/google/tf2-preview/mobilenet_v2/feature_vector/4
* https://reactnative.dev/docs/getting-started

### Contributors 
** Tejas Abhang 
** Kaushal Vinay Nerkar
** Vrushket More
** Gurusaran 

