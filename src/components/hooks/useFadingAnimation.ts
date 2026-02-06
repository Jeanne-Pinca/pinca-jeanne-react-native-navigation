import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

interface FadingAnimationOptions {
  minOpacity?: number;
  maxOpacity?: number;
  duration?: number;
  onFadeOutComplete?: () => void;
}

export function useFadingAnimation(
  isActive: boolean,
  {
    minOpacity = 0,
    maxOpacity = 1,
    duration = 200,
    onFadeOutComplete,
  }: FadingAnimationOptions = {}
) {
  const opacity = useRef(new Animated.Value(isActive ? maxOpacity : minOpacity)).current;

  useEffect(() => {
    const animation = Animated.timing(opacity, {
      toValue: isActive ? maxOpacity : minOpacity,
      duration,
      useNativeDriver: true,
    });

    animation.start(({ finished }) => {
      if (finished && !isActive && onFadeOutComplete) {
        onFadeOutComplete();
      }
    });

    return () => {
      animation.stop();
    };
  }, [isActive, opacity, minOpacity, maxOpacity, duration, onFadeOutComplete]);

  return { opacity };
}
