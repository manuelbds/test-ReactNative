import React from 'react';
import { Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {
  Container,
  ValueContainer,
  Value,
  Currency,
  ExpenseDetailContainer,
  Location,
  LocationContainer,
  FlexBox,
  DateText,
  Image,
} from './styles';

const DateString: React.Fc = () => {
  return <DateText>12/12/2012 14h50</DateText>;
};

const Refund: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Expenses')}>
        <Text>Voltar</Text>
      </TouchableWithoutFeedback>
      <ValueContainer>
        <Currency>R$</Currency>
        <Value>49,90</Value>
      </ValueContainer>
      <ExpenseDetailContainer>
        <Text>14/09/19</Text>
        <Text>Almoço Restaurante</Text>
        <Text>Alimentacao</Text>
        <Text>Reembolsável</Text>
        <LocationContainer>
          <FlexBox>
            <Location>Rua alguma coisa de algum lugar</Location>
          </FlexBox>
          <DateString></DateString>
        </LocationContainer>
        <Image source={{ uri: 'https://i.imgur.com/ppTo7xm.png' }}></Image>
      </ExpenseDetailContainer>
    </Container>
  );
};

export default Refund;
