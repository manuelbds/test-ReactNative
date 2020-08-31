import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Moment from 'react-moment';

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
  MainDate,
  Image,
  ExpenseTitle,
  ExpenseType,
  Refundable,
  BackIcon,
  Controllers,
  PenIcon,
  CalendarIcon,
  CalendarCheck,
  MainDateContainer,
  AlimentationIcon,
  RefundIcon,
  NonRefundIcon,
} from './styles';
import { FlexRow } from '../../styles';

const Refund: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { value, date, refundable, location, img, name, type } = route.params;

  return (
    <Container>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Expenses')}>
        <Controllers>
          <BackIcon name="arrowleft" size={30} color="#566475" />
          <PenIcon name="pen" size={20} color="#566475" />
        </Controllers>
      </TouchableWithoutFeedback>
      <ValueContainer>
        <Currency>R$</Currency>
        <Value>{value}</Value>
      </ValueContainer>
      <ExpenseDetailContainer>
        <MainDateContainer>
          <CalendarIcon name="calendar" size={26}></CalendarIcon>
          <MainDate format="DD/MM/YY" element={Text}>
            {date}
          </MainDate>
        </MainDateContainer>
        <ExpenseTitle>{name}</ExpenseTitle>
        <FlexRow>
          <AlimentationIcon
            source={require('../../../assets/imgs/alimentation.png')}
          />
          <ExpenseType>{type}</ExpenseType>
        </FlexRow>
        <FlexRow>
          {refundable ? (
            <RefundIcon source={require('../../../assets/imgs/refund.png')} />
          ) : (
              <NonRefundIcon
                source={require('../../../assets/imgs/nonrefund.png')}
              />
            )}
          <Refundable refundable={refundable}>
            {refundable ? '' : 'Não '}Reembolsável
          </Refundable>
        </FlexRow>
        <LocationContainer>
          <FlexBox>
            <CalendarCheck name="calendar-check" size={26}></CalendarCheck>
            <View>
              <Location>{location}</Location>
              <DateText format="DD/MM/YY - HH[h]mm" element={Text}>
                {date}
              </DateText>
            </View>
          </FlexBox>
        </LocationContainer>
        <Image source={{ uri: img }}></Image>
      </ExpenseDetailContainer>
    </Container>
  );
};

export default Refund;
