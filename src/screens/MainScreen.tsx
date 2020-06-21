import React, { useEffect, useState } from 'react';
import {
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Alert,
} from 'react-native';
import axios from 'axios';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../../navigator';
import { Appdea } from '../components/Appdea';
import { SafeAreaView } from 'react-native-safe-area-context';
import { THEME } from '../styles/theme';
import { BASE_URL } from '../../apiConfig';

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
            try {
                const res = await axios.get(`${BASE_URL}/appdeas`);
                setAppdeas(res.data.appdeas);
                return res.data;
            } catch (err) {
                console.log(err);
                Alert.alert('Something went wrong! 😔')
            }
        };
        getAppdeas();
    }, []);

    return (
        <>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={appdeas}
                    renderItem={({ item }) => (
                        <Appdea appdea={item.name} appdeaId={item.id} />
                    )}
                    keyExtractor={item => item.id.toString()}
                />
            </SafeAreaView>
            <TouchableOpacity
                onPress={(): void => navigation.navigate('New')}
                style={styles.button}>
                <Text style={styles.buttonText}>Add New</Text>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: THEME.COLORS.SNOW_WHITE,
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
        backgroundColor: THEME.COLORS.PERSIAN_GREEN,
    },
    buttonText: {
        color: THEME.COLORS.SNOW_WHITE
    }
});
