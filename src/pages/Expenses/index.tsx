import React, { useCallback, useState, useEffect, useRef } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import 'moment/locale/pt-br';
import moment from 'moment';
import { Ionicons } from '@expo/vector-icons';

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
  SearchInput,
  SearchIconButton,
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
  const [searching, setSearching] = useState(false);
  const refInput = useRef(null);
  const lastDate = useRef(0);
  const refDebounce = useRef(0);

  const orderItems = useCallback(
    (filter = '') => {
      const sortedItems = [...items].sort(
        (a, b) => new Date(b.date) - new Date(a.date),
      );
      if (!filter || filter === '') setOrderedItems(sortedItems);
      else
        setOrderedItems(
          sortedItems.filter(
            item => item.name.toLowerCase().indexOf(filter.toLowerCase()) > -1,
          ),
        );
    },
    [items],
  );
  const FormatedTotal = useCallback(() => {
    const s = items.reduce(
      (sum, currentItem) => sum + Number(currentItem.value),
      0,
    );
    console.log('teste de soma, ', s);
    if (s) return <Total>{String(s.toFixed(2)).replace('.', ',')}</Total>;
    return <Total>0,00</Total>;
  }, [orderItems]);

  const onChangeText = useCallback(text => {
    clearTimeout(refDebounce.current);
    refDebounce.current = setTimeout(() => orderItems(text), 1000);
  }, []);

  useEffect(() => {
    console.log('RENDERER');
    orderItems();
    moment.locale('pt-br');
    // I need to reset this on the re-render, so the first date won't fail falsly comparing with itself
    lastDate.current = 0;
  }, [items]);

  return (
    <>
      <FakeBg></FakeBg>
      <Container>
        <ScrollView>
          <ListContainer>
            {!searching ? (
              <Month>Setembro</Month>
            ) : (
                <SearchInput
                  ref={refInput}
                  placeholder="Pesquisar"
                  onChangeText={text => onChangeText(text)}
                ></SearchInput>
              )}

            <SearchIconButton>
              <TouchableWithoutFeedback
                onPress={() => {
                  setSearching(!searching);
                  setTimeout((): void => {
                    if (refInput.current) refInput.current.focus();
                  }, 1000);
                }}
              >
                <SearchIcon
                  name="md-search"
                  size={28}
                  color="#566475"
                  style={{
                    transform: [{ scaleX: -1 }],
                  }}
                />
              </TouchableWithoutFeedback>
            </SearchIconButton>
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
              <FormatedTotal></FormatedTotal>
            </FlexRow>
          </TotalContainer>
        </ScrollView>
      </Container>
    </>
  );
};

export default Expenses;
