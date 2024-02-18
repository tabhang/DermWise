import React, { useState, useEffect } from "react";
import {FlatList, View,Text} from "react-native";
import styles from "../assets/styles";
const HistoryScreen = () => {
    const [searchHistory, setSearchHistory] = useState([]);

    useEffect(() => {
        // Simulate fetching search history from an API
        //TODO: Change API logic
        // fetch('https://api.example.com/history')
        //     .then(response => response.json())
        //     .then(data => setSearchHistory(data))
        //     .catch(error => console.error(error));
const  data = [
    {
        "id": 1,
        "query": "React Native"
    },
    {
        "id": 2,
        "query": "JavaScript"
    },
    {
        "id": 3,
        "query": "GraphQL"
    },
    {
        "id": 4,
        "query": "Redux"
    }
];
setSearchHistory(data);

    }, []);

    return (
        <View style={styles.container}>
            {/*<Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10 ,color: 'black'}}>Search History</Text>*/}
            <FlatList style={styles.cardStyle}
                data={searchHistory}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={{ borderBottomWidth: 2, borderBottomColor: '#ccc', paddingVertical: 10 }}>
                        <Text style={styles.item}>{item.query}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default HistoryScreen;