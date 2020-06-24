import React from 'react';
import axios from 'axios';
import {
    View,
    Text,
    Alert,
    Button,
    StyleSheet,
    ViewStyle,
    TextStyle,
} from 'react-native';
import { TextField } from '../components/TextField';
import { useForm } from 'react-hook-form';
import { BASE_URL } from '../../apiConfig';
import { SafeAreaView } from 'react-native-safe-area-context';

type Style = {
    container: ViewStyle;
    formView: ViewStyle;
    title: TextStyle;
};

export const AddNewScreen: React.FC = () => {
    const { control, handleSubmit, errors } = useForm();
    const onSubmit = async data => {
        try {
            const res = axios.post(`${BASE_URL}/appdeas`, data);
            Alert.alert(`A new apddea ${data.name} successfully created`);
        } catch (err) {
            Alert.alert(err);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.formView}>
                <Text style={styles.title}>Add new Appdea</Text>
                <TextField
                    name="name"
                    control={control}
                    placeholder="App name"
                    rules={{ required: true }}
                />
                <TextField
                    name="description"
                    control={control}
                    placeholder="Description"
                    multiline
                />
                <Button title="Submit" onPress={handleSubmit(onSubmit)} />
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
        fontSize: 20,
        marginBottom: 10,
    },
});
