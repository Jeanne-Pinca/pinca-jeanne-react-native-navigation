import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

export function useThemeToggleAnimation(isDark: boolean) {
  const progress = useRef(new Animated.Value(isDark ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: isDark ? 1 : 0,
      duration: 220,
      useNativeDriver: true,
    }).start();
  }, [isDark, progress]);

  const sunStyle = {
    opacity: progress,
    transform: [
      {
        scale: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0.7, 1],
        }),
      },
    ],
  };

  const moonStyle = {
    opacity: progress.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    }),
    transform: [
      {
        scale: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0.7],
        }),
      },
    ],
  };

  return { sunStyle, moonStyle };
}
