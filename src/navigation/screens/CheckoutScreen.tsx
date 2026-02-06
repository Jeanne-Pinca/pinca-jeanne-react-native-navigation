import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Modal,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { useCart } from '../../context/CartContext';
import { useTheme } from '../../context/ThemeContext';
import { createCheckoutScreenStyles } from './styles/checkoutScreenStyles';
import { ItemsIndicator } from '../../components/ItemsIndicator';

export function CheckoutScreen() {
  const navigation = useNavigation();
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const { isDark } = useTheme();
  const [isScrollable, setIsScrollable] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const [layoutHeight, setLayoutHeight] = useState(0);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const styles = createCheckoutScreenStyles(isDark);

  const handleCheckout = () => {
    setShowSuccessModal(true);
  };

  const handleCheckoutSuccess = () => {
    setShowSuccessModal(false);
    clearCart();
    navigation.navigate('ShoppingTabs');
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

  const handleContentSizeChange = (contentWidth: number, contentHeight: number) => {
    setContentHeight(contentHeight);
  };

  // Update scrollable state whenever contentHeight or layoutHeight changes
  React.useEffect(() => {
    if (layoutHeight > 0 && contentHeight > 0) {
      const scrollable = contentHeight > layoutHeight;
      setIsScrollable(scrollable);
      // If not scrollable, we're automatically at the bottom
      if (!scrollable) {
        setIsAtBottom(true);
      }
    }
  }, [contentHeight, layoutHeight]);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const isBottom =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;
    setIsAtBottom(isBottom);
  };

  return (
    <View style={styles.container}>
      <Modal
        visible={showSuccessModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowSuccessModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Checkout Successful</Text>
            <Text style={styles.modalMessage}>Your order has been placed!</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleCheckoutSuccess}
            >
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Checkout</Text>
      </View>

      {cartItems.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No items to checkout</Text>
        </View>
      ) : (
        <>
          <View style={styles.listArea}>
            <FlatList
              data={cartItems}
              renderItem={renderCheckoutItem}
              keyExtractor={(item) => item.id}
              scrollEnabled={true}
              showsVerticalScrollIndicator={false}
              onContentSizeChange={handleContentSizeChange}
              onScroll={handleScroll}
              onLayout={(event) => {
                const { height } = event.nativeEvent.layout;
                setLayoutHeight(height);
              }}
              scrollEventThrottle={16}
            />
            <ItemsIndicator
              itemCount={cartItems.length}
              isScrollable={isScrollable && !isAtBottom}
            />
          </View>
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
