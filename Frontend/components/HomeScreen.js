import React from 'react';
import {View, Button, Pressable, Text} from 'react-native';

import { styles } from '../assets/styles';
const HomeScreen = ({ navigation }) => {
  const handleHistory = () => {
    // Navigate to History Screen
    navigation.navigate('History');
  };

  const handleIdentify = () => {
    // Navigate to Identify Screen
    navigation.navigate('Image');
  };

  return (
    <View style={styles.container}>
      <Pressable  onPress={handleHistory} style={styles.button} >
        <Text style={styles.text}> History</Text>
      </Pressable>
      <Pressable  onPress={handleIdentify} style={styles.button} >
        <Text style={styles.text}> Identify</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
