import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b0e1e1', // Abstract background color
    },
    inputContainer: {
        width: '80%',
        marginBottom: 20,
    },
    input: {
        marginBottom: 10,
        marginTop: 10,
        width: '80%',
        height: 60,
        borderWidth: 1,
        borderColor: '#d31b1b',
        borderRadius: 20, // Rounded corners
        paddingHorizontal: 15,
        backgroundColor: '#000000', // Input box background color
        shadowColor: '#000000', // Shadow color
        shadowOpacity: 0.3, // Shadow opacity
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        elevation: 5, // Android shadow
    },
    button: {
        width : '50%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        marginTop: 15,
        marginBottom: 15
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    text2: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'white',
    },
    cardStyle: {
        width: "90%",
        color: 'black',
        backgroundColor: "black",
        borderRadius: 10,
        padding: 10,
        margin: 10,
        flexGrow:0,

    },
    cardStyle2: {
        width: "90%",
        color: 'black',
        backgroundColor: "black",
        borderRadius: 10,
        padding: 10,
        margin: 10,
        flexGrow:0,
        alignItems: "center"
    },
    item: {
        marginTop: 20,
        padding: 30,
        backgroundColor: '#000000',
        fontSize: 24
    },
    img:{
        borderColor: 'red',
        borderWidth: 2,
        height: 450,
        width: 350,
        marginBottom: "2%",
        marginTop: "2%",
        marginEnd: "2%",
        marginStart: "2%",
        alignItems: "center"
    }

});

export default styles;