import { StyleSheet } from 'react-native';

export const createProductFilterStyles = (isDark: boolean) =>
  StyleSheet.create({
    container: {
      position: 'relative',
    },
    dropdownButton: {
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 6,
      backgroundColor: isDark ? '#333' : '#e0e0e0',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
    },
    dropdownButtonText: {
      fontSize: 14,
      fontWeight: '500',
      color: isDark ? '#fff' : '#000',
    },
    icon: {
      fontSize: 16,
    },
    modal: {
      flex: 1,
      backgroundColor: 'transparent',
    },
    dropdown: {
      position: 'absolute',
      backgroundColor: isDark ? '#222' : '#fff',
      borderRadius: 6,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      minWidth: 150,
    },
    option: {
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: isDark ? '#333' : '#f0f0f0',
    },
    optionLast: {
      borderBottomWidth: 0,
    },
    optionText: {
      fontSize: 14,
      color: isDark ? '#fff' : '#000',
    },
    optionTextActive: {
      fontWeight: '600',
      color: '#007AFF',
    },
  });
