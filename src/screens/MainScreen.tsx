import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text, TouchableHighlight, FlatList } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../../navigator';

type MainScreenRouteProp = RouteProp<StackParamList, 'Main'>;

type MainScreenNavigationProp = StackNavigationProp<StackParamList, 'Main'>;

type Props = {
    route: MainScreenRouteProp;
    navigation: MainScreenNavigationProp;
};

export const MainScreen: React.FC<Props> = ({ navigation }) => {
    const [appdeas, setAppdeas] = useState([]);
    useEffect(() => {
        const getAppdeas = async (): Promise<any> => {
            const res = await axios.get('http://127.0.0.1:5000/appdeas');
            console.log(res.data);
            setAppdeas(res.data.appdeas);
            return res.data;
        };
        getAppdeas();
    }, []);

    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Hello Page 1</Text>
            <TouchableHighlight onPress={() => navigation.navigate('New')}>
                <Text>Add New</Text>
            </TouchableHighlight>
            <FlatList
                data={appdeas}
                renderItem={({ item }) => <Text> {item.name}</Text>}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};
