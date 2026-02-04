import { StyleSheet } from 'react-native';

export const createItemsIndicatorStyles = (isDark: boolean) =>
  StyleSheet.create({
    container: {
      marginHorizontal: 12,
      marginBottom: 12,
      paddingVertical: 8,
      paddingHorizontal: 16,
      backgroundColor: isDark ? '#333' : '#f0f0f0',
      borderRadius: 6,
      alignItems: 'center',
    },
    text: {
      fontSize: 13,
      color: isDark ? '#aaa' : '#666',
      fontWeight: '500',
    },
  });
