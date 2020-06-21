import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Stack } from './navigator';
import { MainScreen } from './src/screens/MainScreen';
import { AddNewScreen } from './src/screens/AddNewScreen';
import { AppdeaScreen } from './src/screens/AppdeaScreen';
import { THEME } from './src/styles/theme';


const { Navigator, Screen } = Stack;

const HeaderStyle = {
    headerStyle: {
        backgroundColor: THEME.COLORS.PERSIAN_GREEN,
    },
    headerTintColor: THEME.COLORS.SNOW_WHITE,
    headerTitleStyle: {
        fontWeight: 'bold',
    },
};

const App = () => {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ ...HeaderStyle }}>
                <Screen
                    name="Main"
                    component={MainScreen}
                    options={{ title: 'Appdea' }}
                />
                <Screen name="New" component={AddNewScreen} />
                <Screen name="Appdea" component={AppdeaScreen} />
            </Navigator>
        </NavigationContainer>
    );
};

export default App;
