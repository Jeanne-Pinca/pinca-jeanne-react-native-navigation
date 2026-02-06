import { StyleSheet } from 'react-native';

export const createCartScreenStyles = (isDark: boolean) =>
  StyleSheet.create({
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
    cartItem: {
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
    itemPrice: {
      fontSize: 14,
      color: isDark ? '#aaa' : '#666',
    },
    itemPriceBreakdown: {
      fontSize: 14,
      color: '#ff69b4',
    },
    quantityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    quantityButton: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: '#ff69b4',
      justifyContent: 'center',
      alignItems: 'center',
    },
    quantityButtonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 18,
    },
    quantity: {
      fontSize: 14,
      fontWeight: '600',
      color: isDark ? '#fff' : '#000',
      minWidth: 20,
      textAlign: 'center',
    },
    removeButton: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: '#afb7ff',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 8,
    },
    removeButtonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 18,
    },
    header: {
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: isDark ? '#333' : '#ddd',
      backgroundColor: isDark ? '#222' : '#fff',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: isDark ? '#fff' : '#000',
    },
    checkoutButton: {
      marginHorizontal: 12,
      marginBottom: 12,
      paddingHorizontal: 16,
      paddingVertical: 12,
      backgroundColor: '#ff69b4',
      borderRadius: 8,
      alignItems: 'center',
    },
    checkoutButtonText: {
      color: '#fff',
      fontWeight: '600',
      fontSize: 16,
    },
  });
