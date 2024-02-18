import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text } from 'react-native';
import { styles } from '../assets/styles';
const SignupPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);

    const handleSignup = () => {
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match');
            return;
        }

        //TODO API call

        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    const handlePasswordChange = (value) => {
        setPassword(value);
        setPasswordMatch(value === confirmPassword);
    };

    const handleConfirmPasswordChange = (value) => {
        setConfirmPassword(value);
        setPasswordMatch(password === value);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="First Name"
                value={firstName}
                onChangeText={setFirstName}
                required
            />
            <TextInput
                style={styles.input}
                placeholder="Last Name"
                value={lastName}
                onChangeText={setLastName}
                required
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                required
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={handlePasswordChange}
                secureTextEntry
                required
            />
            <TextInput
                style={[styles.input, !passwordMatch && styles.errorInput]}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={handleConfirmPasswordChange}
                secureTextEntry
                required
            />
            {!passwordMatch && <Text style={styles.errorText}>Passwords do not match</Text>}
            <Button title="Sign Up" onPress={handleSignup} disabled={!firstName || !lastName || !email || !password || !confirmPassword || !passwordMatch} />
        </View>
    );
};

export default SignupPage;
