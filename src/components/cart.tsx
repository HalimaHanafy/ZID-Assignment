import React from 'react';
import styled from '@emotion/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {CartQuantity} from './cart-quantity';
import {Typography} from './typography';
import {Alert} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {CartContainer} from './cart-container';
import {BuyButton} from './Button/buy-button';

export const Cart: React.FC<any> = ({quantity, update}) => {
  const insets = useSafeAreaInsets();
  const {colors} = useTheme();

  return (
    <CartContainer style={{paddingBottom: Math.max(insets.bottom, 20)}}>
      <BuyButton
        onPress={() => Alert.alert('', 'WiP button')}
        underlayColor="white">
        <Typography color={colors.textSecondary}>Buy Now</Typography>
      </BuyButton>
      <CartQuantity quantity={quantity} update={update} />
    </CartContainer>
  );
};
