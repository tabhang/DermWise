import React, {useState} from 'react';
import {Image, PermissionsAndroid, Pressable, Text, View} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios'; // Import Axios library
import {API_ENDPOINTS} from '../appConfig';

import {styles} from '../assets/styles';

import RNFetchBlob from 'rn-fetch-blob';

export default function ImageInputPage() {
    const [selectedImage, setSelectedImage] = useState(null);
    const route = useRoute();
    // const { selectedSymptoms } = route.params;
    const navigation = useNavigation();

    const requestCameraPermissionAndOpenCamera = async () => {
        try {

            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'Camera Permission',
                    message: 'App needs access to your camera.',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );

            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('Camera permission granted');
                openCamera();
            } else {
                console.log('Camera permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };
    const openCamera = () => {
        const options = {
            title: 'Take a Picture',
            mediaType: 'photo',
            storageOptions: {
                skipBackup: true,
                path: 'images',
                cameraRoll: true,
                waitUntilSaved: true,
            },
            // maxWidth: 224, // Adjust the image quality (0 to 1)
            // maxHeight: 224, // Adjust the maximum height of the image
        };

        ImagePicker.launchCamera(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled the camera');
            } else if (response.error) {
                console.log('Error while taking a picture:', response.error);
            } else {
                console.log('Successful taking a picture:', response.assets[0]);
                setSelectedImage(response.assets[0].uri);
                console.log('S:', selectedImage );
            }
        });
    };

    const openImagePicker = () => {
        const options = {
            title: 'Select Image',
            mediaType: 'photo',
            storageOptions: {
                skipBackup: true,
            },
        };

        ImagePicker.launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                console.log('Successful image picker response:', response.assets[0]);
                setSelectedImage(response.assets[0].uri);
                console.log(selectedImage);

            }
        });
    };

    const removeSelectedImage = () => {
        setSelectedImage(null);
    };

    const handleSubmit = async () => {
        console.log("Im in bitcehs");
        try {

            const te = await RNFetchBlob.fs.readFile(selectedImage, 'base64');
            const requestBody = {
                image: te,
            };
           // console.log("Body",requestBody);

            // Send the POST request using Axios
            const response = await axios.post(API_ENDPOINTS.uploadImage, requestBody, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = response.data;
            console.log("INput" , response.status);
            if(response.status == 200) {
                console.log(data);
                navigation.navigate('Results',{ data: data });
            }
            else if (response.status == 202){
                console.log(data);
                navigation.navigate('Image');
                alert(data.warn);
            } else {
                console.log(response.status);
                navigation.navigate('Image');
                alert(data.error);

            }

        } catch (error) {
            console.error('Error sending request:', error);
            Alert.alert('Error', 'An error occurred while sending the request');
        }



    };

    return (
        <View style={styles.container}>
            {selectedImage && (
                <View style={styles.cardStyle2}>
                    <Image source={{ uri: selectedImage }} style={styles.img} />
                    <Pressable  onPress={removeSelectedImage} style={styles.button} >
                        <Text style={styles.text}>Remove</Text>
                    </Pressable>
                </View>
            )}

            <Pressable  onPress={requestCameraPermissionAndOpenCamera} style={styles.button} >
                <Text style={styles.text}> Open Camera</Text>
            </Pressable>

            <Pressable  onPress={openImagePicker} style={styles.button} >
                <Text style={styles.text}> Open Library</Text>
            </Pressable>
            {selectedImage && <Pressable  onPress={handleSubmit} style={styles.button} >
                <Text style={styles.text}>Submit</Text>
            </Pressable>}
        </View>
    );
}
