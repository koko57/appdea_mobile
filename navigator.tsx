import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export type StackParamList = {
    Main: undefined;
    Appdea: { appdeaId: string | number };
  };

export const Stack = createStackNavigator<StackParamList>();

export const Tab = createBottomTabNavigator();

