import { useNavigation, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeFont } from './components/typography';
import { ItemScreen } from './item';
import ListScreen, { IListItem } from './screens/list';

export type RootStackParamList = {
  ListScreen: undefined;
  ItemScreen?: IListItem;
};

const Stack = () => {
  const nav = useNavigation();
  const { colors } = useTheme();
  const RootStack = createNativeStackNavigator();

  return (

    <RootStack.Navigator
      initialRouteName="ListScreen"
      screenOptions={{
        headerShadowVisible: false,
        headerBackTitle: '',
        headerTitleStyle: {
          fontSize: 16,
          ...(ThemeFont.medium as any),
        },
        contentStyle: {
          backgroundColor: colors.background,
        }
      }}

    >
      <RootStack.Screen
        name="ListScreen"
        component={ListScreen}
        options={{ title: 'Items', headerTitleAlign: 'center' }}

      />
      <RootStack.Screen
        name="ItemScreen"
        component={ItemScreen}
        options={{
          headerBackButtonMenuEnabled: true,
          title: 'Item',
          headerTitleAlign: 'center'
        }}
      />
    </RootStack.Navigator>
  );
};
export default Stack;