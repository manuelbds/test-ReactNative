import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: stretch;
`;
export const ListContainer = styled.SafeAreaView`
  background: #f6f8fb;
  padding-top: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  /* margin: 16px; */
`;
export const Month = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #566475;
  margin-left: 10px;
  margin-bottom: 14px;
`;
export const DateSection = styled.View`
  margin-left: 16px;
  margin-bottom: 10px;
  margin-top: 10px;
  flex-direction: row;
  align-items: flex-end;
`;
export const DayTitle = styled.Text`
  font-size: 24px;
  color: #9dadb8;
  font-weight: bold;
  margin-right: 4px;
`;
export const WeekDayTitle = styled.Text`
  font-size: 14px;
  margin-bottom: 3px;
  font-weight: normal;
  text-transform: uppercase;
  color: #9dadb8;
`;
export const ListItemContainer = styled.View`
  background: white;
  padding: 10px 16px;
  margin-bottom: 8px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.08);
`;

export const TotalContainer = styled.View`
  padding: 18px;
  flex-direction: row;
  justify-content: space-between;
`;
export const TotalTitle = styled.Text`
  color: #9dadb8;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
`;
export const Currency = styled.Text`
  color: #0f3a57;
  font-size: 16px;
  font-weight: bold;
`;
export const Total = styled.Text`
  color: #0f3a57;
  font-size: 26px;
  font-weight: bold;
`;
