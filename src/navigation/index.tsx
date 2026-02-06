import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HomeScreen } from './screens/HomeScreen';
import { CartScreen } from './screens/CartScreen';
import { CheckoutScreen } from './screens/CheckoutScreen';
import { LightDarkToggle } from '../components/LightDarkToggle';
import { CartBadge } from '../components/CartBadge';
import { navigationStyles } from './styles/navigationStyles';

const brandOrange = '#ff69b4';

const ShoppingTabs = createBottomTabNavigator({
  screenOptions: {
    tabBarActiveTintColor: brandOrange,
  },
  screens: {
    HomeTab: {
      screen: HomeScreen,
      options: {
        title: 'Shop',
        headerRight: () => <LightDarkToggle />,
        tabBarLabel: 'Shop',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="storefront-outline" size={size} color={color} />
        ),
      },
    },

    CartTab: {
      screen: CartScreen,
      options: {
        title: 'Cart',
        headerRight: () => <LightDarkToggle />,
        tabBarLabel: 'Cart',
        tabBarIcon: ({ color, size, focused }) => (
          <View style={navigationStyles.badgeContainer}>
            <Ionicons name={focused ? 'cart' : 'cart-outline'} size={size} color={color} />
            <CartBadge />
          </View>
        ),
      },
    },
  },
});

const RootStack = createNativeStackNavigator({
  screenOptions: {
    headerTintColor: brandOrange,
  },
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
