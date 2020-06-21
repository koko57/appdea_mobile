import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../../navigator';
import { BASE_URL } from '../../apiConfig';

type AppdeaScreenRouteProp = RouteProp<StackParamList, 'Appdea'>;

type AppdeaScreenNavigationProp = StackNavigationProp<StackParamList, 'Appdea'>;

type Props = {
    route: AppdeaScreenRouteProp;
    navigation: AppdeaScreenNavigationProp;
};
type Style = {
    formView: ViewStyle,
    title: TextStyle
}

export const AppdeaScreen: React.FC<Props> = ({ route, navigation }) => {
    const [appdea, setAppdea] = useState(null)
    const { appdeaId } = route.params;

    useEffect(() => {
        const getAppdea = async (): Promise<any> => {
            const res = await axios.get(`${BASE_URL}/appdeas/${appdeaId}`);
            console.log(res.data);
            console.log(appdeaId);
            setAppdea(res.data.appdea);
            return res.data;
        };
        getAppdea();
    }, [])
    return (
        <View style={styles.formView}>
            <Text style={styles.title}>{appdea?.name}</Text>
            <Text style={styles.title}>{appdea?.description}</Text>
        </View>
    );
};

const styles = StyleSheet.create<Style>({
    formView: {
        flex: 1,
        alignItems: 'stretch',
        padding: 20,
    },
    title: {
        fontSize: 20
    }
})