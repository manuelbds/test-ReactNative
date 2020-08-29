import React from 'react';
import { Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Container } from './styles';

const Expenses: React.FC = () => {
  return (
    <Container>
      <Text>Expenses</Text>
      <Button title="Refund" onPress={() => navigation.navigate('Details')} />
    </Container>
  );
};

export default Expenses;
