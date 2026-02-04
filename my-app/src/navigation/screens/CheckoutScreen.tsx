import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
  Alert,
} from 'react-native';
import { useCart } from '../../context/CartContext';

export function CheckoutScreen() {
  const navigation = useNavigation();
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDark ? '#1a1a1a' : '#f5f5f5',
    },
    emptyContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    emptyText: {
      fontSize: 16,
      color: isDark ? '#aaa' : '#666',
      marginBottom: 16,
    },
    header: {
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: isDark ? '#333' : '#ddd',
      backgroundColor: isDark ? '#222' : '#fff',
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: isDark ? '#fff' : '#000',
    },
    checkoutItem: {
      margin: 12,
      padding: 12,
      backgroundColor: isDark ? '#222' : '#fff',
      borderRadius: 8,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 3,
    },
    itemInfo: {
      flex: 1,
    },
    itemName: {
      fontSize: 16,
      fontWeight: '600',
      color: isDark ? '#fff' : '#000',
      marginBottom: 4,
    },
    itemDetails: {
      fontSize: 14,
      color: isDark ? '#aaa' : '#666',
    },
    itemPrice: {
      fontSize: 16,
      fontWeight: '600',
      color: isDark ? '#fff' : '#000',
    },
    totalSection: {
      marginHorizontal: 12,
      marginBottom: 12,
      paddingVertical: 12,
      paddingHorizontal: 16,
      backgroundColor: isDark ? '#222' : '#fff',
      borderRadius: 8,
      borderTopWidth: 1,
      borderTopColor: isDark ? '#333' : '#ddd',
    },
    totalLabel: {
      fontSize: 14,
      color: isDark ? '#aaa' : '#666',
      marginBottom: 8,
    },
    totalPrice: {
      fontSize: 24,
      fontWeight: 'bold',
      color: isDark ? '#fff' : '#000',
    },
    checkoutButton: {
      marginHorizontal: 12,
      marginBottom: 12,
      paddingHorizontal: 16,
      paddingVertical: 12,
      backgroundColor: '#34C759',
      borderRadius: 8,
      alignItems: 'center',
    },
    checkoutButtonText: {
      color: '#fff',
      fontWeight: '600',
      fontSize: 16,
    },
  });

  const handleCheckout = () => {
    Alert.alert('Checkout Successful', 'Your order has been placed!', [
      {
        text: 'OK',
        onPress: () => {
          clearCart();
          navigation.navigate('ShoppingTabs');
        },
      },
    ]);
  };

  const renderCheckoutItem = ({ item }: any) => (
    <View style={styles.checkoutItem}>
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDetails}>
          Quantity: {item.quantity} × ${item.price.toFixed(2)}
        </Text>
      </View>
      <Text style={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Checkout</Text>
      </View>

      {cartItems.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No items to checkout</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={cartItems}
            renderItem={renderCheckoutItem}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
          />
          <View style={styles.totalSection}>
            <Text style={styles.totalLabel}>Total Amount</Text>
            <Text style={styles.totalPrice}>${getTotalPrice().toFixed(2)}</Text>
          </View>
          <TouchableOpacity
            style={styles.checkoutButton}
            onPress={handleCheckout}
          >
            <Text style={styles.checkoutButtonText}>Confirm Checkout</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
