import styled from 'styled-components/native';
import { FlexRow as FlexRowImport, TextRegular, TextBold } from '../../styles';

export const ListItemContainer = styled.View`
  background: white;
  padding: 10px 16px;
  margin-bottom: 8px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.08);
`;
export const ItemTitle = styled(TextRegular)`
  font-size: 16px;
  color: #222222;
`;
export const ItemType = styled(TextRegular)`
  font-size: 14px;
  color: #566475;
`;
export const Value = styled(TextBold)`
  font-size: 16px;
  color: #222222;
`;
export const FlexRow = styled(FlexRowImport)`
  align-items: center;
  justify-content: space-between;
`;
