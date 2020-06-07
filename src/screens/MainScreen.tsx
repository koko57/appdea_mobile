import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../../navigator'

type MainScreenRouteProp = RouteProp<StackParamList, 'Main'>;

type MainScreenNavigationProp = StackNavigationProp<
  StackParamList,
  'Main'
>;

type Props = {
  route: MainScreenRouteProp;
  navigation: MainScreenNavigationProp;
};
export const MainScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Hello Page 1</Text>
            <TouchableHighlight onPress={() => navigation.navigate('New')}>
              <Text>Add New</Text>
            </TouchableHighlight>
        </View>
    );
};
