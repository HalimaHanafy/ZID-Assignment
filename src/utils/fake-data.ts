import {faker} from '@faker-js/faker';

import {IListItem} from '../screens/list';

const listData: IListItem[] = [];

for (let index = 0; index < 1500; index+= 1) {
  const price = faker.commerce.price();
  const priceInt = parseFloat(faker.commerce.price());

  listData.push({
    id: index.toString(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: price,
    salePrice: faker.helpers.maybe(
      () => faker.commerce.price(priceInt * 0.5, priceInt * 0.9),
      {probability: 0.1},
    ),
    brand: faker.company.name(),
    model: faker.vehicle.model(),
    battery:'Included'
  });
}

export default listData;
