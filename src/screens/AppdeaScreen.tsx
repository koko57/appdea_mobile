import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from 'navigation/StackNavigation';
import { BASE_URL } from '../../apiConfig';
import { SafeAreaView } from 'react-native-safe-area-context';

type AppdeaScreenRouteProp = RouteProp<StackParamList, 'Appdea'>;

type AppdeaScreenNavigationProp = StackNavigationProp<StackParamList, 'Appdea'>;

type Props = {
    route: AppdeaScreenRouteProp;
    navigation: AppdeaScreenNavigationProp;
};
type Style = {
    container: ViewStyle,
    formView: ViewStyle,
    title: TextStyle
}

export const AppdeaScreen: React.FC<Props> = ({ route, navigation }) => {
    const [appdea, setAppdea] = useState(null)
    const { appdeaId } = route.params;

    useEffect(() => {
        const getAppdea = async (): Promise<any> => {
            const res = await axios.get(`${BASE_URL}/appdeas/${appdeaId}`);
            setAppdea(res.data.appdea);
            return res.data;
        };
        getAppdea();
    }, [])
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.formView}>
                <Text style={styles.title}>{appdea?.name}</Text>
                <Text style={styles.title}>{appdea?.description}</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create<Style>({
    container: {
        flex: 1
    },
    formView: {
        flex: 1,
        alignItems: 'stretch',
        padding: 20,
    },
    title: {
        fontSize: 20
    }
})