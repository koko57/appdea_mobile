import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigation } from './TabNavigation';

export const Navigation: React.FC = () => {
    return (
        <NavigationContainer>
            <TabNavigation />
        </NavigationContainer>
    );
};
