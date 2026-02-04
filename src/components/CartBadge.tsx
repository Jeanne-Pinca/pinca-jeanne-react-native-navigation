import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';

export function CartBadge() {
  const { cartItems } = useCart();
  const { isDark } = useTheme();

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  if (itemCount === 0) {
    return null;
  }

  const styles = StyleSheet.create({
    badge: {
      position: 'absolute',
      right: -6,
      top: -6,
      backgroundColor: '#FF3B30',
      borderRadius: 10,
      width: 20,
      height: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: isDark ? '#1a1a1a' : '#f5f5f5',
    },
    badgeText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 12,
    },
  });

  return (
    <View style={styles.badge}>
      <Text style={styles.badgeText}>{itemCount}</Text>
    </View>
  );
}
