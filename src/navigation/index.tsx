import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, Text, View } from 'react-native';
import bell from '../assets/bell.png';
import newspaper from '../assets/newspaper.png';
import { HomeScreen } from './screens/HomeScreen';
import { CartScreen } from './screens/CartScreen';
import { CheckoutScreen } from './screens/CheckoutScreen';
import { LightDarkToggle } from '../components/LightDarkToggle';
import { CartBadge } from '../components/CartBadge';

function ShopTabLabel() {
  return <Text>Shop</Text>;
}

const ShoppingTabs = createBottomTabNavigator({
  screens: {
    HomeTab: {
      screen: HomeScreen,
      options: {
        title: 'Shop',
        headerRight: () => <LightDarkToggle />,
        tabBarLabel: ShopTabLabel,
        tabBarIcon: ({ color, size }) => (
          <Image
            source={newspaper}
            tintColor={color}
            style={{
              width: size,
              height: size,
            }}
          />
        ),
      },
    },

    CartTab: {
      screen: CartScreen,
      options: {
        title: 'Cart',
        headerRight: () => <LightDarkToggle />,
        tabBarLabel: 'Cart',
        tabBarIcon: ({ color, size }) => (
          <View style={{ position: 'relative' }}>
            <Image
              source={bell}
              tintColor={color}
              style={{
                width: size,
                height: size,
              }}
            />
            <CartBadge />
          </View>
        ),
      },
    },
  },
});

const RootStack = createNativeStackNavigator({
  screens: {
    ShoppingTabs: {
      screen: ShoppingTabs,
      options: {
        headerShown: false,
      },
    },
    Checkout: {
      screen: CheckoutScreen,
      options: {
        title: 'Checkout',
      },
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
