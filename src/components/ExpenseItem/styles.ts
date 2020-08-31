import styled from 'styled-components/native';
import { FlexRow as FlexRowImport, TextRegular, TextBold } from '../../styles';

type ItemProps = {
  refundable?: boolean;
};

export const ListItemContainer = styled.View`
  background: white;
  padding: 10px 16px;
  margin-bottom: 8px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.08);
`;
// eslint-disable-next-line prettier/prettier
export const ItemTitle = styled(TextRegular) <ItemProps>`
  font-size: 16px;
  color: ${props => (!props.refundable ? '#9DADB8' : '#222222')};
  text-decoration: ${props =>
    props.refundable ? 'none' : 'line-through #9DADB8'};
`;
// eslint-disable-next-line prettier/prettier
export const ItemType = styled(TextRegular) <ItemProps>`
  font-size: 14px;
  color: ${props => (!props.refundable ? '#9DADB8' : '#566475')};
`;
// eslint-disable-next-line prettier/prettier
export const Value = styled(TextBold) <ItemProps>`
  font-size: 16px;
  color: ${props => (!props.refundable ? '#9DADB8' : '#222222')};
  text-decoration: ${props =>
    props.refundable ? 'none' : 'line-through #9DADB8'};
`;
export const FlexRow = styled(FlexRowImport)`
  align-items: center;
  justify-content: space-between;
`;
export const TypeContainer = styled(FlexRowImport)``;
// eslint-disable-next-line prettier/prettier
export const AlimentationIcon = styled.Image<ItemProps>`
  opacity: ${props => (!props.refundable ? 0.5 : 1)};
  width: 16px;
  height: 16px;
  margin-top: 2px;
  margin-right: 5px;
  margin-top: 3px;
`;

export const RefundIcon = styled.Image`
  width: 18px;
  height: 24px;
  margin-right: 6px;
  resize-mode: contain;
  position: relative;
  top: -1px;
`;
export const NonRefundIcon = styled(RefundIcon)`
  opacity: 0.5;
`;
