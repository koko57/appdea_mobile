import * as React from 'react';
import { AddNewScreen } from '../screens/AddNewScreen';
import { AboutScreen } from '../screens/AboutScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStackScreen } from './StackNavigation';

export const Tab = createBottomTabNavigator();

const { Navigator, Screen } = Tab;

export const TabNavigation: React.FC = () => {
    return (
        <Navigator>
            <Screen name="Main" component={HomeStackScreen} />
            <Screen name="New" component={AddNewScreen} />
            <Screen name="About" component={AboutScreen} />
        </Navigator>
    );
};
