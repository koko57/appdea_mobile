import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet,
} from 'react-native';
import axios from 'axios';
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
        <View style={styles.container}>
            <Text>Hello Page 1</Text>
            <TouchableOpacity onPress={() => navigation.navigate('New')}>
                <Text>Add New</Text>
            </TouchableOpacity>
            <FlatList
                data={appdeas}
                renderItem={({ item }) => <Text> {item.name}</Text>}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {

    },
});
