import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { THEME } from '../styles/theme';

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
        alignItems: 'center',
        paddingHorizontal: 20,
        height: 50,
        flexDirection: 'row',
    },
    bullet: {
        fontSize: 26,
        lineHeight: 28,
        marginRight: 10,
        color: THEME.COLORS.RICH_BLACK,
    },
    text: {
        fontSize: 20,
        alignItems: 'center',
        lineHeight: 26,
        color: THEME.COLORS.RICH_BLACK,
    },
});
