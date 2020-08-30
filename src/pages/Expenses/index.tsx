import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native-gesture-handler';
import {
  Container,
  Month,
  ListContainer,
  DateSection,
  DayTitle,
  WeekDayTitle,
  ListItemContainer,
  TotalContainer,
  TotalTitle,
  Currency,
  Total,
} from './styles';
import { FlexRow } from '../../styles';

type ExpenseItem = {
  name: string;
  type: 'alimentation' | 'transportation';
  value: number;
  refundable: boolean;
};

const Expenses: React.FC = () => {
  const navigation = useNavigation();
  const items: Array<ExpenseItem> = [
    {
      name: 'Almoço restaurante',
      refundable: true,
      type: 'alimentation',
      value: 24.7,
    },
    {
      name: 'Almoço restaurante',
      refundable: true,
      type: 'alimentation',
      value: 24.7,
    },
    {
      name: 'Almoço restaurante',
      refundable: true,
      type: 'alimentation',
      value: 24.7,
    },
    {
      name: 'Almoço restaurante',
      refundable: true,
      type: 'alimentation',
      value: 24.7,
    },
  ];
  return (
    <Container>
      <ScrollView>
        <ListContainer>
          <Month> Setembro</Month>
          <DateSection>
            <DayTitle>24</DayTitle>
            <WeekDayTitle>Sexta</WeekDayTitle>
          </DateSection>
          {items.map((item: ExpenseItem, index) => (
            <ListItemContainer key={index}>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('Refund')}
              >
                <View>
                  <Text>Almoço restaurante</Text>
                  <Text>Alimentação</Text>
                </View>
                <FlexRow>
                  <Text>26,00</Text>
                </FlexRow>
              </TouchableWithoutFeedback>
            </ListItemContainer>
          ))}
        </ListContainer>
        <TotalContainer>
          <TotalTitle>Total</TotalTitle>
          <FlexRow>
            <Currency>R$</Currency>
            <Total>490,00</Total>
          </FlexRow>
        </TotalContainer>
      </ScrollView>
    </Container>
  );
};

export default Expenses;
