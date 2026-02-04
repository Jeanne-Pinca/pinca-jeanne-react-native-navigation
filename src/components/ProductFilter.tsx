import React, { useState, useRef, useMemo } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Modal,
} from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { createProductFilterStyles } from './styles/productFilterStyles';

interface ProductFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
}

export function ProductFilter({
  categories,
  selectedCategory,
  onCategorySelect,
}: ProductFilterProps) {
  const { isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownTop, setDropdownTop] = useState(0);
  const buttonRef = useRef<View>(null);
  const styles = createProductFilterStyles(isDark);

  const titleCase = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  const displayText = selectedCategory ? titleCase(selectedCategory) : 'All Categories';

  const handleButtonPress = () => {
    buttonRef.current?.measure((fx, fy, width, height, px, py) => {
      setDropdownTop(py + height);
      setIsOpen(true);
    });
  };

  return (
    <View style={styles.container}>
      <View ref={buttonRef}>
        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={handleButtonPress}
        >
          <Text style={styles.dropdownButtonText}>{displayText}</Text>
          <Text style={styles.icon}>☰</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={isOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setIsOpen(false)}
      >
        <TouchableOpacity
          style={styles.modal}
          activeOpacity={1}
          onPress={() => setIsOpen(false)}
        >
          <View style={[styles.dropdown, { top: dropdownTop, right: 16 }]}>
            <TouchableOpacity
              style={styles.option}
              onPress={() => {
                onCategorySelect(null);
                setIsOpen(false);
              }}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedCategory === null && styles.optionTextActive,
                ]}
              >
                All Categories
              </Text>
            </TouchableOpacity>
            {categories.map((category, index) => (
              <TouchableOpacity
                key={category}
                style={[
                  styles.option,
                  index === categories.length - 1 && styles.optionLast,
                ]}
                onPress={() => {
                  onCategorySelect(category);
                  setIsOpen(false);
                }}
              >
                <Text
                  style={[
                    styles.optionText,
                    selectedCategory === category && styles.optionTextActive,
                  ]}
                >
                  {titleCase(category)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
