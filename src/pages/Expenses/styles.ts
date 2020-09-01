import styled from 'styled-components/native';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Moment from 'react-moment';
import { TextRegular, TextBold, FlexRow as FlexRowInport } from '../../styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: stretch;
`;
export const FakeBg = styled.View`
  height: 300px;
  width: 100%;
  position: absolute;
  background: #f6f8fb;
`;
export const ListContainer = styled.View`
  background: #f6f8fb;
  padding-top: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  padding-bottom: 30px;
  /* margin: 16px; */
`;
export const SearchIconButton = styled.View`
  position: absolute;
  right: 16px;
  margin-top: 20px;
`;
export const SearchIcon = styled(Ionicons)``;
export const Month = styled(TextBold)`
  font-size: 32px;
  color: #566475;
  margin-left: 16px;
  margin-bottom: 14px;
`;
export const DateSection = styled.View`
  margin-left: 16px;
  margin-bottom: 10px;
  margin-top: 10px;
  flex-direction: row;
  align-items: flex-end;
`;
export const DayTitle = styled(Moment)`
  font-size: 24px;
  font-family: 'OpenSans-Bold';
  color: #9dadb8;
  margin-right: 4px;
`;
export const WeekDayTitle = styled(Moment)`
  font-size: 14px;
  font-family: 'OpenSans-Regular';
  margin-bottom: 3px;
  text-transform: uppercase;
  color: #9dadb8;
`;

export const TotalContainer = styled.View`
  padding: 18px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const FlexRow = styled(FlexRowInport)`
  align-items: flex-end;
`;
export const TotalTitle = styled(TextBold)`
  color: #9dadb8;
  font-size: 16px;
  text-transform: uppercase;
`;
export const Currency = styled(TextBold)`
  color: #0f3a57;
  font-size: 16px;
  margin-right: 4px;
  margin-bottom: 2px;
`;
export const Total = styled(TextBold)`
  color: #0f3a57;
  font-size: 26px;
`;

export const SearchInput = styled.TextInput`
  color: #0f3a57;
  font-size: 16px;
  font-family: 'OpenSans-Regular';
  border-width: 1px;
  border-color: #0f3a57;
  padding: 10px;
  margin: 4px 10px;
  border-radius: 4px;
  margin-bottom: 10px;
`;
