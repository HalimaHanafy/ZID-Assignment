import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen, { IListItem } from './screens/list';
import { Item } from './item';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeFont } from './components/typography';
import { TouchableOpacity } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

export type RootStackParamList = {
  ListScreen: undefined;
  ItemScreen?: IListItem;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Stack = () => {
  const nav = useNavigation();
  const { colors } = useTheme();
  
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
        },
      }}>
      <RootStack.Screen
        name="ListScreen"
        component={ListScreen}
        options={{ title: 'Items', headerTitleAlign: 'center' }}
      />
      <RootStack.Screen
        name="ItemScreen"
        component={Item}
        options={{
          headerBackButtonMenuEnabled: true,
          title: 'Item',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => nav.goBack()
              }>
              <Icon name="chevron-back" size={30} color={colors.blueColor} />
            </TouchableOpacity>
          )
        }}
      />
    </RootStack.Navigator>
  );
};

export default Stack;
