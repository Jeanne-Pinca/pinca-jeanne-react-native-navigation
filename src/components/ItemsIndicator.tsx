import React, { useState } from 'react';
import { View, Text, StyleSheet, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { createItemsIndicatorStyles } from './styles/itemsIndicatorStyles';

interface ItemsIndicatorProps {
  itemCount: number;
  isScrollable: boolean;
}

export function ItemsIndicator({ itemCount, isScrollable }: ItemsIndicatorProps) {
  const { isDark } = useTheme();
  const styles = createItemsIndicatorStyles(isDark);

  if (!isScrollable) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>More items below</Text>
    </View>
  );
}
