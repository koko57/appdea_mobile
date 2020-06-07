import { createStackNavigator } from '@react-navigation/stack';

export type StackParamList = {
    Main: undefined;
    New: undefined;
  };
  
export const Stack = createStackNavigator<StackParamList>();