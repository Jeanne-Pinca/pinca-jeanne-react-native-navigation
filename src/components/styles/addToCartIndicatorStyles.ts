import { StyleSheet } from 'react-native';

export const createAddToCartIndicatorStyles = () =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      top: 60,
      left: 16,
      right: 16,
      backgroundColor: '#34C759',
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      zIndex: 1000,
      alignItems: 'center',
    },
    text: {
      fontSize: 14,
      fontWeight: '600',
      color: '#fff',
      textAlign: 'center',
    },
  });
