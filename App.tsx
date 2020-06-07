import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Stack } from './navigator'
import { MainScreen } from './src/screens/MainScreen';
import { AddNewScreen } from './src/screens/AddNewScreen';

const { Navigator, Screen } = Stack;

const App = () => {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen name="Main" component={MainScreen} />
                <Screen name="New" component={AddNewScreen} />
            </Navigator>
        </NavigationContainer>
    );
};

export default App;
