import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { FilterComponentProps, FilterField } from '../types';

const filterFields: FilterField[] = [
  {
    key: 'country',
    label: 'Ülke',
    placeholder: 'Türkiye',
  },
  {
    key: 'city',
    label: 'Şehir',
    placeholder: 'İstanbul',
  },
  {
    key: 'category',
    label: 'Branş',
    placeholder: 'Kardiyoloji',
  },
];

const FilterComponent = ({ filters, setFilters, onApply, onClear }: FilterComponentProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filtreler</Text>

      {filterFields.map(field => (
        <View key={field.key}>
          <Text style={styles.label}>{field.label}</Text>
          <TextInput
            style={styles.input}
            placeholder={field.placeholder}
            value={filters[field.key]}
            onChangeText={text =>
              setFilters({
                ...filters,
                [field.key]: text,
              })
            }
          />
        </View>
      ))}

      <View style={styles.buttonRow}>
        <Pressable style={styles.applyButton} onPress={onApply}>
          <Text style={styles.applyButtonText}>Uygula</Text>
        </Pressable>

        <Pressable style={styles.clearButton} onPress={onClear}>
          <Text style={styles.clearButtonText}>Temizle</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginBottom: 12,
    backgroundColor: '#f7f7f7',
    padding: 14,
    borderRadius: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 6,
    color: '#444',
  },
  input: {
    height: 42,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 4,
  },
  applyButton: {
    flex: 1,
    backgroundColor: '#111827',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  clearButton: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  clearButtonText: {
    color: '#333',
    fontWeight: '600',
  },
});

export default FilterComponent;