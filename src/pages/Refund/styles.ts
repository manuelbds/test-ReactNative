import styled from 'styled-components/native';
import { FlexRow as FlexRowImport, TextBold, TextRegular } from '../../styles';

export const Container = styled.SafeAreaView`
  flex: 1;
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
export const Value = styled(TextBold)`
  font-size: 48px;
  color: #566475;
`;
export const Currency = styled(TextBold)`
  font-size: 18px;
  color: #566475;
  margin-top: 9px;
  margin-right: 6px;
`;
export const Location = styled(TextBold)`
  font-size: 16px;
  color: #0f3a57;
`;
export const DateText = styled(TextRegular)`
  color: #9dadb8;
`;

export const LocationContainer = styled.View`
  background: #ffffff;
  border: 1px solid #dce4f0;
  border-radius: 8px;
  padding: 12px 17px;
  margin-bottom: 24px;
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
