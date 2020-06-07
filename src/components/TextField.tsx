import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

type Props = {
    multiline?: boolean,
    placeholder: string
}

export const TextField: React.FC<Props> = ({ multiline, placeholder }) => {
    const [value, setValue] = useState('');
    return (
        <View>
            <TextInput
                multiline={multiline}
                placeholder={placeholder}
                numberOfLines={4}
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    width: 100,
                }}
                onChangeText={text => setValue(text)}
                value={value}
            />
        </View>
    );
};
