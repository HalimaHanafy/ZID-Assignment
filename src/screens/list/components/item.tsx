import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation, useTheme} from '@react-navigation/native';
import styled from '@emotion/native';
import {getImage} from '../../../utils/image';
import {Typography} from '../../../components/typography';
import {RootStackParamList} from '../../../stack';
import {IListItem} from '../index';
import {Avatar} from '../../../components/avatar';

const thumbnailSize = 600;
const ListItemContainer = styled.TouchableOpacity({
  paddingTop: 10,
  paddingBottom: 10,
  paddingHorizontal: 25,
  borderBottomColor: 'rgba(0,0, 0, 0.05)',
  borderBottomWidth: 1,
  flexDirection: 'row',
});

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  image: {
    marginTop: 8,
    marginRight: 16,
  },
  discounted: {
    textDecorationLine: 'line-through',
  },
  sale: {
    color: '#DA2121',
  },
});

export const ListItem: React.FC<{item: IListItem}> = ({item}) => {
  const nav =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'ListScreen'>
    >();
  const {colors}= useTheme();
  return (
    <ListItemContainer onPress={() => {nav.navigate('ItemScreen', item);}}>
      <Avatar
        style={styles.image}
        source={{uri: getImage(thumbnailSize, item.id)}}
      />
      <View style={styles.flex}>
        <Typography weight="medium" color={colors.text}>{item.name}</Typography>
        {!item.salePrice ? (
          <Typography color={colors.text} style={item.salePrice ? styles.discounted : undefined}>
            SAR {item.price}
          </Typography>
        ) : null}
        {item.salePrice ? (
          <Typography color={colors.redColor}>
            <Typography color={colors.text} style={item.salePrice ? styles.discounted : undefined}>
              SAR {item.price}
            </Typography>
            {'  '}SAR {item.salePrice}
          </Typography>
        ) : null}
        <Typography fontSize={14} color={colors.textGray}>
          Brand: {item.name}
        </Typography>
      </View>
    </ListItemContainer>
);
};


