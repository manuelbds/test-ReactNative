import React from 'react';
import { Text, View } from 'react-native';
import {
  ListItemContainer,
  ItemTitle,
  ItemType,
  FlexRow,
  Value,
} from './styles';

export type ExpenseItemComponentProps = {
  name: string;
  type: 'alimentation' | 'transportation';
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
          <ItemTitle>{name}</ItemTitle>
          <ItemType>{type}</ItemType>
        </View>
        <FlexRow>
          <Value>{String(value.toFixed(2)).replace('.', ',')}</Value>
        </FlexRow>
      </FlexRow>
    </ListItemContainer>
  );
};

export default ExpenseItemComponent;
