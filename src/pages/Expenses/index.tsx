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
import { useExpenses } from '../../hooks/expenses';

const Expenses: React.FC = () => {
  const navigation = useNavigation();
  const { expenses: items } = useExpenses();
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
