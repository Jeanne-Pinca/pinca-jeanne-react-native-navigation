import React, { useState } from 'react';
import { FlatList, RefreshControl, FlatListProps } from 'react-native';
import { useTheme } from '../context/ThemeContext';

interface RefreshableListProps<T> extends FlatListProps<T> {
  onRefresh?: () => void | Promise<void>;
  refreshDuration?: number;
}

export function RefreshableList<T>({
  onRefresh,
  refreshDuration = 1000,
  ...flatListProps
}: RefreshableListProps<T>) {
  const { isDark } = useTheme();
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    
    if (onRefresh) {
      await onRefresh();
    } else {
      // Default behavior - simulate refresh
      await new Promise(resolve => setTimeout(resolve, refreshDuration));
    }
    
    setRefreshing(false);
  };

  return (
    <FlatList
      {...flatListProps}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={handleRefresh}
          tintColor={isDark ? '#ffffff' : '#000000'}
          colors={['#007AFF']}
        />
      }
    />
  );
}
