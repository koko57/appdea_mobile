import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Stack } from './navigator'
import { MainScreen } from './src/screens/MainScreen';
import { AddNewScreen } from './src/screens/AddNewScreen';
import { AppdeaScreen } from './src/screens/AppdeaScreen';

const { Navigator, Screen } = Stack;

const App = () => {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen name="Main" component={MainScreen} />
                <Screen name="New" component={AddNewScreen} />
                <Screen name="Appdea" component={AppdeaScreen} />
            </Navigator>
        </NavigationContainer>
    );
};

export default App;
