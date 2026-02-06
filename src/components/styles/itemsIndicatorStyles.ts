import { StyleSheet } from 'react-native';

export const createItemsIndicatorStyles = (isDark: boolean) =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      left: 12,
      right: 12,
      bottom: 12,
      paddingVertical: 8,
      paddingHorizontal: 16,
      backgroundColor: isDark ? '#c94b7d' : '#ffb3d9',
      borderRadius: 6,
      alignItems: 'center',
      zIndex: 1,
    },
    text: {
      fontSize: 13,
      color: isDark ? '#ffb3d9' : '#c94b7d',
      fontWeight: '500',
    },
  });
