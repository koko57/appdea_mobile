import * as React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Style = {
    container: ViewStyle;
    formView: ViewStyle;
    title: TextStyle;
};

export const AboutScreen: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.formView}>
                <Text style={styles.title}>Appdea</Text>
                <Text style={styles.title}>your app ideas</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create<Style>({
    container: {
        flex: 1,
    },
    formView: {
        flex: 1,
        alignItems: 'stretch',
        padding: 20,
    },
    title: {
        fontSize: 20,
    },
});
