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
import { Appdea } from '../components/Appdea';

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
            <FlatList
                data={appdeas}
                renderItem={({ item }) => <Appdea appdea={item.name} />}
                keyExtractor={item => item.id.toString()}
            />
            <TouchableOpacity
                onPress={(): void => navigation.navigate('New')}
                style={styles.button}>
                <Text>Add New</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {},
    button: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: 80,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#bada55',
    },
});
