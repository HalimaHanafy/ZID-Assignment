import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Stack from './src/stack';
import { GeneralLightTheme } from './theme/LightTheme';

const App = () => {
  return (
    <NavigationContainer theme={GeneralLightTheme}>
      <Stack />
    </NavigationContainer>
  );
};

export default App;
