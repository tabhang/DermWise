
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from './components/LoginScreen';
import HomePage from './components/HomeScreen';
import SignupPage from "./components/Signup";
import HistoryScreen from "./components/HistoryScreen";
import AddSymptomsPage from "./components/IdentifyScreen";
import ImageInputPage from "./components/ImageInputPage";
import Results from "./components/Results";
const Stack = createStackNavigator();

const App = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="DermWise">
                <Stack.Screen name="Diesease Detection" component={LoginPage} />
                <Stack.Screen name="Home Screen" component={HomePage} />
                <Stack.Screen name="Signup" component={SignupPage} />
                <Stack.Screen name="History" component={HistoryScreen} />
                <Stack.Screen name="Symptoms" component={AddSymptomsPage} />
                <Stack.Screen name="DermWise" component={ImageInputPage} />
                <Stack.Screen name="Results" component={Results} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App