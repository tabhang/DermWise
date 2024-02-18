import React, { useState } from 'react';
import {View, TextInput, Button, Pressable, Text} from 'react-native';

import { styles } from '../assets/styles';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginPage = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            // const response = await axios.post('TEJAS give api', { email, password });
            // await AsyncStorage.setItem('jwtToken', response.data.token);
            navigation.navigate('Home Screen');
        } catch (error) {
            alert('Arr matey! No treasure found. (Invalid credentials)');
        }
    };

    const  handleSignup = async () =>{
        try{
            navigation.navigate('Signup');
        }catch (error) {
            alert('Some Error');
        }

    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
            />
            <TextInput style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry = {true}
            />

            <Pressable  onPress={handleLogin} style={styles.button} >
                <Text style={styles.text}> Login</Text>
            </Pressable>

            <Pressable  title="Signup" onPress={handleSignup} style={styles.button} >
                <Text style={styles.text}> SignUp</Text>
            </Pressable>
        </View>
    );
};

export default LoginPage;