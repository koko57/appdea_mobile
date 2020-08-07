import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainScreen } from '../screens/MainScreen';
import { AppdeaScreen } from '../screens/AppdeaScreen';
import { THEME } from '../styles/theme';

export type StackParamList = {
    Main: undefined;
    Appdea: { appdeaId: string | number };
};

export const Stack = createStackNavigator<StackParamList>();

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

export const HomeStackScreen: React.FC = () => {
    return (
        <Navigator screenOptions={{ ...HeaderStyle }}>
            <Screen name="Main" component={MainScreen} />
            <Screen name="Appdea" component={AppdeaScreen} />
        </Navigator>
    );
};
