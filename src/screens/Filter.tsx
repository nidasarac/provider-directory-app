import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import FilterComponent from '../components/filterComponent';

const initialFilters = {
  country: '',
  city: '',
  category: '',
};

const Filter = ({ navigation, route }) => {
  const [filters, setFilters] = useState(route?.params?.filters || initialFilters);

  const applyFilters = () => {
    navigation.navigate('ProviderList', {
      filters,
    });
  };

  const clearFilters = () => {
    setFilters(initialFilters);
    navigation.navigate('ProviderList', {
      filters: initialFilters,
    });
  };

  return (
    <View style={styles.container}>
      <FilterComponent
        filters={filters}
        setFilters={setFilters}
        onApply={applyFilters}
        onClear={clearFilters}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 16,
  },
});

export default Filter;