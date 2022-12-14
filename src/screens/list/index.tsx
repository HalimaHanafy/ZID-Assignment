import React, { FC } from 'react';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import ListData from '../../utils/fake-data';
import {ListItem} from './components/item';

export interface IListItem {
  id: string;
  name: string;
  description: string;
  price: string;
  salePrice: string;
  brand: string;
  model:string;
  battery:string;
}

const ListScreen: FC = () => {
  return (
    <SafeAreaView edges={['top', 'bottom']}>
      <ScrollView contentContainerStyle={{paddingHorizontal: 16}}>
        {ListData.map(item => (
          <ListItem key={item.id} item={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListScreen;
