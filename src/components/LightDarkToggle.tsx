import React from 'react';
import { Animated, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';
import { useThemeToggleAnimation } from './hooks/useThemeToggleAnimation';

export function LightDarkToggle() {
  const { isDark, toggleTheme } = useTheme();
  const { sunStyle, moonStyle } = useThemeToggleAnimation(isDark);

  return (
    <TouchableOpacity onPress={toggleTheme} style={styles.container}>
      <Animated.View style={[styles.iconLayer, sunStyle]}>
        <Ionicons name="sunny" size={24} color="#ff69b4" />
      </Animated.View>
      <Animated.View style={[styles.iconLayer, moonStyle]}>
        <Ionicons name="moon" size={24} color="#ff69b4" />
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 16,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  iconLayer: {
    position: 'absolute',
    right: 16,
  },
});
