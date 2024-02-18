import React from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import { useRoute } from '@react-navigation/native';
import {styles} from  '../assets/styles';
const Results = ( ) => {
        const route = useRoute();
        const {data} = route.params;
        console.log(data);
    return (
        <View style={styles.container}>
            {/* Render JSON data with styling */}
            {Object.entries(data).map(([key, value]) => (
                <View key={key} style={styles.cardStyle}>
                    <Text style={styles.text}>{key}:</Text>
                    <Text style={styles.text2}>{value}</Text>
                </View>
            ))}
        </View>
    );

};
const stylesInfile = StyleSheet.create({
    container: {
        padding: 16,
    },
    item: {
        marginBottom: 8,
    },
    label: {
        fontWeight: 'bold',
    },
    value: {
        marginLeft: 8,
    },
});


export default Results;
