import * as React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Controller, Control } from 'react-hook-form';
import { THEME } from '../styles/theme';

type Props = {
    name: string;
    placeholder: string;
    control: Control;
    rules?: object;
    multiline?: boolean;
};

export const TextField: React.FC<Props> = ({
    name,
    placeholder,
    control,
    rules,
    multiline,
}) => {
    return (
        <Controller
            as={TextInput}
            name={name}
            control={control}
            rules={rules}
            multiline={multiline}
            placeholder={placeholder}
            numberOfLines={4}
            style={multiline ? styles.textarea : styles.input}
            onChange={args => args[0].nativeEvent.text}
        />
    );
};

const commonStyles = {
    borderBottomColor: THEME.COLORS.MINT_GREEN,
    borderBottomWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        ...commonStyles,
    },
    textarea: {
        height: 100,
        ...commonStyles,
    },
});
