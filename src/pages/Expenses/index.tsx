import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import ExpenseItemComponent, {
  ExpenseItemComponentProps,
} from '../../components/ExpenseItem';
import {
  Container,
  Month,
  ListContainer,
  DateSection,
  DayTitle,
  WeekDayTitle,
  TotalContainer,
  TotalTitle,
  Currency,
  Total,
  FlexRow,
  FakeBg,
} from './styles';

type ExpenseItem = ExpenseItemComponentProps & {
  date?: string;
  img?: string;
  location?: string;
};

const Expenses: React.FC = () => {
  const navigation = useNavigation();
  const items: Array<ExpenseItem> = [
    {
      name: 'Almoço restaurante',
      refundable: true,
      type: 'alimentation',
      value: 24.7,
      img: 'https://imgur.com/ppTo7xm',
    },
    {
      name: 'Almoço restaurante 2',
      refundable: true,
      type: 'alimentation',
      value: 24.7,
    },
    {
      name: 'Almoço restaurante 3',
      refundable: true,
      type: 'alimentation',
      value: 24.7,
      img: 'https://imgur.com/ppTo7xm',
    },
    {
      name: 'Deslocamento para Reunião',
      refundable: true,
      type: 'transportation',
      value: 24.7,
    },
  ];
  return (
    <>
      <FakeBg></FakeBg>
      <Container>
        <ScrollView>
          <ListContainer>
            <Month> Setembro</Month>
            <DateSection>
              <DayTitle>24</DayTitle>
              <WeekDayTitle>Sexta</WeekDayTitle>
            </DateSection>
            {items.map((props: ExpenseItemComponentProps, index) => (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => navigation.navigate('Refund')}
              >
                <ExpenseItemComponent {...props}></ExpenseItemComponent>
              </TouchableWithoutFeedback>
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
    </>
  );
};

export default Expenses;
