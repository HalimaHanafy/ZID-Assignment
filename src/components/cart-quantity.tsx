import React, {Dispatch, SetStateAction} from 'react';
import styled from '@emotion/native';
import {Typography} from './typography';
import { useTheme } from '@react-navigation/native';


export const CartQuantity: React.FC<{
  quantity: any;
  update: Dispatch<SetStateAction<number>>;
}> = ({quantity, update}) => {
  const {colors}=useTheme();
  return (
    <QuantityContainer>
      <React.Fragment>
        <QuantityButton
          onPress={() => update(quantity + 1)}
          underlayColor={colors.midWhite}>
          <Typography color={colors.purbleColor}>+</Typography>
        </QuantityButton>

        <Typography color={colors.text} style={{textAlign: 'center', flex: 1}}>
          {quantity}
        </Typography>

        <QuantityButton
          onPress={() => update(quantity>0?quantity - 1:0)}
          underlayColor="#EDEBF2">
          <Typography color="#522973">-</Typography>
        </QuantityButton>
      </React.Fragment>
    </QuantityContainer>
  );
};

//
//

const QuantityButton = styled.TouchableHighlight({
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 100,
  width: 40,
  height: 40,
});

const QuantityContainer = styled.TouchableHighlight({
  borderWidth: 1,
  borderColor: '#EDEBF2',
  marginRight: 10,
  flex: 4,
  paddingVertical: 0,
  paddingHorizontal: 5,
  borderRadius: 1000,
  maxHeight: 51,
  alignItems: 'center',
  flexDirection: 'row',
});
