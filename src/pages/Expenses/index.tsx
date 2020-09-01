import React, { useCallback, useState, useEffect, useRef } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import 'moment/locale/pt-br';
import moment from 'moment';

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
  TextRegular,
} from './styles';
import { useExpenses, ExpenseItem } from '../../hooks/expenses';

type DateGroupType = {
  date: string;
  item: ExpenseItem;
};

const Expenses: React.FC = () => {
  const navigation = useNavigation();
  const { expenses: items } = useExpenses();
  const [orderedItems, setOrderedItems] = useState(items);

  const orderItems = useCallback(() => {
    const sortedItems = [...items].sort(
      (a, b) => new Date(b.date) - new Date(a.date),
    );
    setOrderedItems(sortedItems);
  }, [items]);

  const lastDate = useRef(0);

  useEffect(() => {
    orderItems();
    moment.locale('pt-br');
  }, []);

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
            {orderedItems.map((props: ExpenseItem, index) => {
              const currentDate = new Date(props.date).getDate();
              const different = lastDate.current !== currentDate;
              lastDate.current = currentDate;
              return (
                <View key={index}>
                  {different && (
                    <DateSection>
                      <DayTitle format="DD" element={Text}>
                        {props.date}
                      </DayTitle>

                      <WeekDayTitle format="dddd" element={Text}>
                        {props.date}
                      </WeekDayTitle>
                    </DateSection>
                  )}
                  <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('Refund', { ...props })}
                  >
                    <ExpenseItemComponent {...props}></ExpenseItemComponent>
                  </TouchableWithoutFeedback>
                </View>
              );
            })}
          </ListContainer>
          <TotalContainer>
            <TotalTitle>Total</TotalTitle>
            <FlexRow>
              <Currency>R$</Currency>
              <Total>
                {items.reduce((sum, currentItem) => sum + currentItem.value, 0)}
              </Total>
            </FlexRow>
          </TotalContainer>
        </ScrollView>
      </Container>
    </>
  );
};

export default Expenses;
