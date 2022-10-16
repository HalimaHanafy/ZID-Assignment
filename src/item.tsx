import React, { FC, useEffect, useState } from 'react';
import { Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import styled from '@emotion/native';

import { faker } from '@faker-js/faker';
import Icon from 'react-native-vector-icons/Ionicons';
import { getImage } from './utils/image';
import { Container } from './components/container';
import { Typography } from './components/typography';
import { DetailsLine } from './components/details-line';
import { DetailsTitle } from './components/details-title';
import { Cart } from './components/cart';

const SPEC_1 = faker.color.human();
const SPEC_2 = faker.vehicle.vin();
const SPEC_3 = faker.commerce.product();
const SPEC_4 = faker.datatype.float({ min: 0.1, max: 10, precision: 0.1 });


const ItemImage = styled.Image<{ size: number }>(props => ({
  width: props.size,
  height: props.size,
  marginVertical: 16,
  paddingHorizontal: '5%',
  borderRadius: 9,
}));

const ItemDiscountedPrice = styled(Typography)({
  textDecorationLine: 'line-through',
});

ItemDiscountedPrice.defaultProps = {
  fontSize: 18,
  color: 'black',
};
interface ItemProps {
  route: {
    params: {
      id: string;
      name: string;
      description: string;
      price: string;
      salePrice: string;
      brand: string;
      model: string;
      battery: string;
    }
  }
}

const headerLeft=(nav:any,colors:any)=>(
  <TouchableOpacity
    onPress={() => nav.goBack()
    }>
    <Icon name="chevron-back" size={30} color={colors.blueColor} />
  </TouchableOpacity>
);
export const ItemScreen: FC<ItemProps> = (props: ItemProps) => {
  const nav = useNavigation();
  const { route } = props;
  const {
    name,
    id, battery, brand, description, model, price, salePrice
  } = route.params;
  const [quantity, setQuantity] = useState<number>(5);
  const { colors } = useTheme();

  useEffect(() => {
    nav.setOptions({
      title: name,
      headerLeft: () => headerLeft(nav,colors)});
  }, [name]);
  return (
    <>
      <ScrollView>
        <Container>
          <ItemImage
            source={{ uri: getImage(900, id) }}
            size={Dimensions.get('screen').width * 0.9}
          />
        </Container>

        <Container>
          {!name && (<Typography>Loading ...</Typography>)}
          <Typography color={colors.text} fontSize={18} weight="semiBold">
            {name}
          </Typography>

          {salePrice ? (
            <Typography fontSize={18} color={colors.redColor}>
              <ItemDiscountedPrice>SAR {salePrice}</ItemDiscountedPrice>
              {'  '}
              SAR {price}
            </Typography>
          ) : (
            <Typography fontSize={18}>SAR {price}</Typography>
          )}
        </Container>
        <Container>
          <Typography fontSize={16} color={colors.text}>{description}</Typography>
        </Container>
        <Container>
          <DetailsTitle>Details</DetailsTitle>
          <DetailsLine label="Brand">{brand}</DetailsLine>
          <DetailsLine label="Color">{SPEC_1}</DetailsLine>
          <DetailsLine label="SKU">{SPEC_2}</DetailsLine>
          <Typography weight="medium" />
          <Typography weight="medium" color={colors.text}>Specifications</Typography>
          <DetailsLine label="Weight">{`${SPEC_4} KG`}</DetailsLine>
          <DetailsLine label="Model">{model}</DetailsLine>
          <DetailsLine label="Battery">{`${battery}`}</DetailsLine>
        </Container>
      </ScrollView>
      <Cart quantity={quantity} update={setQuantity} />
    </>
  );
};
