import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Expenses from '../pages/Expenses';
import Refund from '../pages/Refund';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#DCE4F0' },
        }}
        initialRouteName="Expenses"
      >
        <Stack.Screen name="Expenses" component={Expenses} />
        <Stack.Screen name="Refund" component={Refund} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
