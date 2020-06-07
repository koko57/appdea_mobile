import React from 'react';
import { View, Text } from 'react-native';
import { TextField } from '../components/TextField';


export const AddNewScreen: React.FC = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Hello Page 2</Text>
            <TextField placeholder="App name"/>
            <TextField placeholder="Description" multiline />
        </View>
    );
};
