import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Button } from 'react-native';
import {styles} from  '../assets/styles';
import {data} from '../assets/symptoms';
const AddSymptomsPage = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);


    const symptomList =data;

    const handleSearchChange = (text) => {
        setSearchQuery(text);
        const filteredSuggestions = symptomList.filter(symptom =>
            symptom.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredSuggestions(filteredSuggestions);
    };

    const handleSelectSymptom = (symptom) => {
        if (selectedSymptoms.includes(symptom)) {
            setSelectedSymptoms(selectedSymptoms.filter(item => item !== symptom));
        } else {
            setSelectedSymptoms([...selectedSymptoms, symptom]);
        }
        setSearchQuery('');
        setFilteredSuggestions([]);
    };

    const handleRemoveSymptom = (symptom) => {
        setSelectedSymptoms(selectedSymptoms.filter(item => item !== symptom));
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Search Symptoms"
                value={searchQuery}
                onChangeText={handleSearchChange}
            />
            <FlatList
                data={filteredSuggestions}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleSelectSymptom(item)}>
                        <Text style={styles.suggestionItem}>{item}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
            <Text style={styles.selectedSymptoms}>Selected Symptoms:</Text>
            <View style={styles.selectedSymptomsList}>
                {selectedSymptoms.map(symptom => (
                    <TouchableOpacity key={symptom} onPress={() => handleRemoveSymptom(symptom)}>
                        <Text style={styles.selectedSymptomButton}>{symptom}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <Button title="Next" onPress={() => navigation.navigate('ImageInput',{selectedSymptoms})} disabled={selectedSymptoms.length === 0} />
        </View>
    );
};

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         paddingHorizontal: 20,
//     },
//     title: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         marginBottom: 20,
//     },
//     input: {
//         width: '100%',
//         height: 40,
//         borderWidth: 1,
//         borderColor: '#ccc',
//         borderRadius: 5,
//         marginBottom: 20,
//         paddingHorizontal: 10,
//     },
//     suggestionItem: {
//         padding: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: '#ccc',
//     },
//     selectedSymptoms: {
//         fontSize: 18,
//         marginBottom: 10,
//     },
//     selectedSymptomsList: {
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         marginBottom: 20,
//     },
//     selectedSymptomButton: {
//         backgroundColor: 'blue',
//         color: 'white',
//         padding: 5,
//         borderRadius: 5,
//         marginRight: 10,
//         marginBottom: 10,
//     },
// });

export default AddSymptomsPage;
