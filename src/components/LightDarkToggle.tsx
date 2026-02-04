import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export function LightDarkToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <TouchableOpacity onPress={toggleTheme} style={{ paddingRight: 16 }}>
      <Text style={{ fontSize: 24 }}>{isDark ? '☀️' : '🌙'}</Text>
    </TouchableOpacity>
  );
}
