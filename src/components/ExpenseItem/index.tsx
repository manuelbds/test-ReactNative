import React from 'react';
import { Text, View } from 'react-native';
import {
  ListItemContainer,
  ItemTitle,
  ItemType,
  FlexRow,
  Value,
  AlimentationIcon,
  TypeContainer,
  RefundIcon,
  NonRefundIcon,
} from './styles';

export type ExpenseItemComponentProps = {
  name: string;
  type: 'Alimentação' | 'Transporte';
  value: number;
  refundable: boolean;
};

const ExpenseItemComponent: React.FC<ExpenseItemComponentProps> = ({
  name,
  type,
  value,
  refundable,
}: ExpenseItemComponentProps) => {
  return (
    <ListItemContainer>
      <FlexRow>
        <View>
          <ItemTitle refundable={refundable}>{name}</ItemTitle>
          <TypeContainer>
            <AlimentationIcon
              source={require('../../../assets/imgs/alimentation.png')}
              refundable={refundable}
            />
            <ItemType refundable={refundable}>{type}</ItemType>
          </TypeContainer>
        </View>
        <FlexRow>
          {refundable ? (
            <RefundIcon source={require('../../../assets/imgs/refund.png')} />
          ) : (
              <NonRefundIcon
                source={require('../../../assets/imgs/nonrefund.png')}
              />
            )}

          <Value refundable={refundable}>
            {String(value.toFixed(2)).replace('.', ',')}
          </Value>
        </FlexRow>
      </FlexRow>
    </ListItemContainer>
  );
};

export default ExpenseItemComponent;
