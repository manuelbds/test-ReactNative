import React from 'react';
import { Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container } from './styles';

const Expenses: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Text>Gastos</Text>
      <Button title="Reembolso" onPress={() => navigation.navigate('Refund')} />
    </Container>
  );
};

export default Expenses;
