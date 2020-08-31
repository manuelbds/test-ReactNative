import styled from 'styled-components/native';
import Moment from 'react-moment';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { FlexRow as FlexRowImport, TextBold, TextRegular } from '../../styles';

type RefundableProps = {
  refundable?: boolean;
};

export const Container = styled.SafeAreaView`
  flex: 1;
`;
export const BackIcon = styled(AntDesign)``;
export const PenIcon = styled(FontAwesome5)``;
export const CalendarIcon = styled(FontAwesome5)`
  color: #9dadb8;
  margin-right: 10px;
`;
export const CalendarCheck = styled(FontAwesome5)`
  color: #9dadb8;
  margin-right: 14px;
  position: relative;
  top: -2px;
`;
export const ValueContainer = styled(FlexRowImport)`
  align-items: flex-start;
  align-self: flex-end;
  margin: 24px;
  margin-bottom: 16px;
`;
export const FlexBox = styled(FlexRowImport)`
  align-items: center;
`;
export const Controllers = styled(FlexRowImport)`
  padding: 18px;
  align-items: center;
  justify-content: space-between;
`;
export const Value = styled(TextBold)`
  font-size: 48px;
  color: #566475;
`;
export const Currency = styled(TextBold)`
  font-size: 20px;
  color: #566475;
  margin-top: 12px;
  margin-right: 6px;
`;
export const ExpenseTitle = styled(TextRegular)`
  font-size: 18px;
  color: #222222;
  margin-bottom: 4px;
`;
export const ExpenseType = styled(TextRegular)`
  font-size: 14px;
  color: #566475;
  margin-bottom: 31px;
`;
// eslint-disable-next-line prettier/prettier
export const Refundable = styled(TextBold) <RefundableProps>`
  font-size: 16px;
  margin-bottom: 25px;
  color: ${props => (!props.refundable ? '#9DADB8' : '#09d261')};
`;
export const Location = styled(TextBold)`
  font-size: 16px;
  color: #0f3a57;
  margin-bottom: 4px;
`;
export const DateText = styled(Moment)`
  color: #9dadb8;
`;
export const MainDateContainer = styled(FlexRowImport)`
  align-content: center;
  margin-bottom: 19px;
`;

export const MainDate = styled(Moment)`
  color: #566475;
  font-family: 'OpenSans-Bold';
  font-size: 16px;
  margin-top: 3px;
`;

export const LocationContainer = styled.View`
  background: #ffffff;
  border: 1px solid #dce4f0;
  border-radius: 8px;
  padding: 12px 17px;
  margin-bottom: 24px;
`;
export const AlimentationIcon = styled.Image`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const RefundIcon = styled.Image`
  width: 24px;
  height: 30px;
  margin-right: 10px;
  resize-mode: contain;
  position: relative;
  top: -4px;
`;
export const NonRefundIcon = styled(RefundIcon)`
  opacity: 0.5;
`;

export const ExpenseDetailContainer = styled.ScrollView`
  background: #f6f8fb;
  margin-bottom: -60px;
  padding: 25px;
  padding-bottom: 60px;
`;
export const Image = styled.Image`
  border-radius: 8px;
  height: 210px;
  resize-mode: cover;
`;
