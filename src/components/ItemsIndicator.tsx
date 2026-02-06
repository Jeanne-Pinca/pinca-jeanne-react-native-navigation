import React, { useEffect, useState } from 'react';
import { Animated, Text } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { createItemsIndicatorStyles } from './styles/itemsIndicatorStyles';
import { useFadingAnimation } from './hooks/useFadingAnimation';

interface ItemsIndicatorProps {
  itemCount: number;
  isScrollable: boolean;
}

export function ItemsIndicator({ itemCount, isScrollable }: ItemsIndicatorProps) {
  const { isDark } = useTheme();
  const styles = createItemsIndicatorStyles(isDark);
  const [shouldRender, setShouldRender] = useState(isScrollable);
  const { opacity } = useFadingAnimation(isScrollable, {
    minOpacity: 0,
    duration: 180,
    onFadeOutComplete: () => setShouldRender(false),
  });

  useEffect(() => {
    if (isScrollable) {
      setShouldRender(true);
    }
  }, [isScrollable]);

  if (!shouldRender) {
    return null;
  }

  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <Text style={styles.text}>More items below</Text>
    </Animated.View>
  );
}
