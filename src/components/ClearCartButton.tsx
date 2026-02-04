import React from 'react';
import { TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';

export function ClearCartButton() {
  const { clearCart } = useCart();
  const { isDark } = useTheme();

  const styles = StyleSheet.create({
    button: {
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 6,
      backgroundColor: '#FF3B30',
    },
    buttonText: {
      color: '#fff',
      fontWeight: '600',
      fontSize: 13,
    },
  });

  const handleClearCart = () => {
    Alert.alert(
      'Clear Cart',
      'Are you sure you want to clear all items?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Clear',
          onPress: () => clearCart(),
          style: 'destructive',
        },
      ]
    );
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleClearCart}>
      <Text style={styles.buttonText}>Clear All</Text>
    </TouchableOpacity>
  );
}
