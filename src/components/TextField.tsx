import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Controller, Control } from 'react-hook-form';

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
        <View>
            <Controller
                as={TextInput}
                name={name}
                control={control}
                rules={rules}
                multiline={multiline}
                placeholder={placeholder}
                numberOfLines={4}
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                }}
                onChange={args => args[0].nativeEvent.text}
            />
        </View>
    );
};
