import { StyleSheet } from 'react-native';

export const navigationStyles = StyleSheet.create({
  badgeContainer: {
    position: 'relative',
  },
});

export const getIconStyle = (size: number) => ({
  width: size,
  height: size,
});
