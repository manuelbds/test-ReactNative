import React from 'react';
import { Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container } from './styles';

const Refund: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Text>Refund</Text>
      <Button title="Gastos" onPress={() => navigation.navigate('Expenses')} />
    </Container>
  );
};

export default Refund;
