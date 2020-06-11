import { createStackNavigator } from '@react-navigation/stack';

export type StackParamList = {
    Main: undefined;
    New: undefined;
    Appdea: { appdeaId: string | number };
  };
  
export const Stack = createStackNavigator<StackParamList>();