import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = {
    appdea: string;
};

export const Appdea: React.FC<Props> = ({ appdea }: Props) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>{appdea}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '100%',
        backgroundColor: '#deadaf',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
    },
    text: {
        color: '#fff',
        alignItems: 'center',
    },
});
