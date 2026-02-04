import React, { useState, useMemo } from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useCart } from '../../context/CartContext';
import { useTheme } from '../../context/ThemeContext';
import { createHomeScreenStyles } from './styles/homeScreenStyles';
import { ProductFilter } from '../../components/ProductFilter';
import { AddToCartIndicator } from '../../components/AddToCartIndicator';

export function HomeScreen() {
  const { products, categories, addToCart } = useCart();
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showIndicator, setShowIndicator] = useState(false);
  const styles = createHomeScreenStyles(isDark);

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [products, selectedCategory]);

  const handleAddToCart = (product: any) => {
    addToCart(product);
    setShowIndicator(true);
  };

  const renderProduct = ({ item }: any) => (
    <View style={styles.productContainer}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => handleAddToCart(item)}
      >
        <Text style={styles.addButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <AddToCartIndicator
        isVisible={showIndicator}
        onHide={() => setShowIndicator(false)}
      />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Products</Text>
        <ProductFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />
      </View>
      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
