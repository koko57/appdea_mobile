import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Tab, Stack } from './navigator';
import { MainScreen } from './src/screens/MainScreen';
import { AddNewScreen } from './src/screens/AddNewScreen';
import { AppdeaScreen } from './src/screens/AppdeaScreen';
import { AboutScreen } from './src/screens/AboutScreen';
import { THEME } from './src/styles/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const { Navigator, Screen } = Tab;

const HeaderStyle = {
    headerStyle: {
        backgroundColor: THEME.COLORS.PERSIAN_GREEN,
    },
    headerTintColor: THEME.COLORS.SNOW_WHITE,
    headerTitleStyle: {
        fontWeight: 'bold',
    },
};

function HomeStackScreen() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Appdea" component={AppdeaScreen} />
      </Stack.Navigator>
    );
  }

const App = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Navigator>
                    <Screen
                        name="Main"
                        component={HomeStackScreen}
                    />
                    <Screen name="New" component={AddNewScreen} />
                    <Screen name="About" component={AboutScreen} />
                </Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default App;
