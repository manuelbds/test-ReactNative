import React, { useState, useRef, useCallback } from 'react';
import { Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import * as Cs from './styles';
import { useExpenses } from '../../hooks/expenses';
import { FlexRow } from '../../styles';

const Refund: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [editing, setEditing] = useState(false);
  const refInput = useRef(null);
  const refDebounce = useRef(0);

  const {
    value,
    date,
    refundable,
    location,
    img,
    name,
    type,
    id,
  } = route.params;

  console.log('PARAMETROS', route.params);
  const [editValue, setEditValue] = useState(value);

  const { updateExpenses } = useExpenses();

  const onChangeText = useCallback(text => {
    clearTimeout(refDebounce.current);
    refDebounce.current = setTimeout(
      () =>
        updateExpenses({
          id,
          name,
          refundable,
          type,
          value: Number(text),
          location,
        }),
      1000,
    );
  }, []);

  return (
    <Cs.Container>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Expenses')}>
        <Cs.Controllers>
          <Cs.BackIcon name="arrowleft" size={30} color="#566475" />
          <View>
            <TouchableWithoutFeedback
              onPress={() => {
                setEditing(!editing);
                setTimeout((): void => {
                  if (refInput.current) refInput.current.focus();
                }, 1000);
              }}
            >
              <Cs.PenIcon name="pen" size={20} color="#566475" />
            </TouchableWithoutFeedback>
          </View>
        </Cs.Controllers>
      </TouchableWithoutFeedback>
      <Cs.ValueContainer>
        <Cs.Currency>R$</Cs.Currency>
        <Cs.Value></Cs.Value>

        {!editing ? (
          <Cs.Value>{String(value.toFixed(2)).replace('.', ',')}</Cs.Value>
        ) : (
            <Cs.TextInput
              ref={refInput}
              keyboardType="numeric"
              placeholder={`${editValue.toFixed(2)}`}
              onChangeText={text => onChangeText(text)}
            ></Cs.TextInput>
          )}
      </Cs.ValueContainer>
      <Cs.ExpenseDetailContainer>
        <Cs.MainDateContainer>
          <Cs.CalendarIcon name="calendar" size={26}></Cs.CalendarIcon>
          <Cs.MainDate format="DD/MM/YY" element={Text}>
            {date}
          </Cs.MainDate>
        </Cs.MainDateContainer>
        <Cs.ExpenseTitle>{name}</Cs.ExpenseTitle>
        <FlexRow>
          <Cs.AlimentationIcon
            source={require('../../../assets/imgs/alimentation.png')}
          />
          <Cs.ExpenseType>{type}</Cs.ExpenseType>
        </FlexRow>
        <FlexRow>
          {refundable ? (
            <Cs.RefundIcon
              source={require('../../../assets/imgs/refund.png')}
            />
          ) : (
              <Cs.NonRefundIcon
                source={require('../../../assets/imgs/nonrefund.png')}
              />
            )}
          <Cs.Refundable refundable={refundable}>
            {refundable ? '' : 'Não '}Reembolsável
          </Cs.Refundable>
        </FlexRow>
        <Cs.LocationContainer>
          <Cs.FlexBox>
            <Cs.CalendarCheck
              name="calendar-check"
              size={26}
            ></Cs.CalendarCheck>
            <View>
              <Cs.Location>{location}</Cs.Location>
              <Cs.DateText format="DD/MM/YY - HH[h]mm" element={Text}>
                {date}
              </Cs.DateText>
            </View>
          </Cs.FlexBox>
        </Cs.LocationContainer>
        <Cs.Image source={{ uri: img }}></Cs.Image>
      </Cs.ExpenseDetailContainer>
    </Cs.Container>
  );
};

export default Refund;
