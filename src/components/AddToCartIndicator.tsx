import React, { useEffect, useRef } from 'react';
import {
  Text,
  Animated,
} from 'react-native';
import { createAddToCartIndicatorStyles } from './styles/addToCartIndicatorStyles';

interface AddToCartIndicatorProps {
  isVisible: boolean;
  onHide: () => void;
}

export function AddToCartIndicator({ isVisible, onHide }: AddToCartIndicatorProps) {
  const translateX = useRef(new Animated.Value(-400)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const styles = createAddToCartIndicatorStyles();

  useEffect(() => {
    if (isVisible) {
      Animated.parallel([
        Animated.timing(translateX, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();

      const timer = setTimeout(() => {
        Animated.parallel([
          Animated.timing(translateX, {
            toValue: 400,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
        ]).start(() => onHide());
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, translateX, opacity, onHide]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ translateX }],
          opacity,
        },
      ]}
    >
      <Text style={styles.text}>✓ Added to cart!</Text>
    </Animated.View>
  );
}
