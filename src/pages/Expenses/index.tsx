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
  SearchIcon,
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
      value: 30.2,
      img: 'https://i.imgur.com/ppTo7xm.png',
      date: '2020-09-19T12:59',
      location: 'Rua salvatore leão 1234',
    },
    {
      name: 'Almoço restaurante 2',
      refundable: false,
      type: 'alimentation',
      value: 110,
      date: '2020-09-19T12:59',
      location: 'Av. Passo largo 5432',
    },
    {
      name: 'Almoço restaurante 3',
      refundable: true,
      type: 'alimentation',
      value: 15.12,
      img: 'https://i.imgur.com/ppTo7xm.png',
      date: '1920-09-01T20:59',
      location: 'Rua Gonçalves Dias 68',
    },
    {
      name: 'Deslocamento para Reunião',
      refundable: true,
      type: 'transportation',
      value: 20,
      date: '2020-09-20T11:20',
      location: 'Rua Costa 250',
    },
  ];
  return (
    <>
      <FakeBg></FakeBg>
      <Container>
        <ScrollView>
          <ListContainer>
            <Month> Setembro</Month>
            <SearchIcon
              name="md-search"
              size={28}
              color="#566475"
              style={{
                transform: [{ scaleX: -1 }],
              }}
            />
            <DateSection>
              <DayTitle>24</DayTitle>
              <WeekDayTitle>Sexta</WeekDayTitle>
            </DateSection>
            {items.map((props: ExpenseItemComponentProps, index) => (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => navigation.navigate('Refund', { ...props })}
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
