import React from 'react';
import axios from 'axios';
import { View, Text, Alert, Button, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { TextField } from '../components/TextField';
import { useForm } from "react-hook-form";

type Style = {
    formView: ViewStyle,
    title: TextStyle
}


export const AddNewScreen: React.FC = () => {
    const { control, handleSubmit, errors } = useForm();
    const onSubmit = async (data) => {
        try {
            const res = axios.post('http://127.0.0.1:5000/appdeas', data)
            Alert.alert(`A new apddea ${data.name} successfully created`)   
        } catch (err) {
            Alert.alert(err)
        }
    }
    return (
        <View style={styles.formView}>
            <Text style={styles.title}>Hello Page 2</Text>
            <TextField name="name" control={control} placeholder="App name" rules={{ required: true }} />
            <TextField name="description" control={control} placeholder="Description" multiline />
            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
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