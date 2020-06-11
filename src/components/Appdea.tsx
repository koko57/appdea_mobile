import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

type Props = {
    appdea: string;
    appdeaId: string | number;
};

export const Appdea: React.FC<Props> = ({ appdea, appdeaId }: Props) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Appdea', { appdeaId })}>
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
