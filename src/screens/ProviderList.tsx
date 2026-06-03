import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { providers } from '../data/providerData';
import { Filters, ActiveFilter } from '../types';

const initialFilters: Filters = {
    country: '',
    city: '',
    category: '',
};

const ProviderList = ({ navigation, route }) => {
    const [searchText, setSearchText] = useState('');
    const [appliedFilters, setAppliedFilters] = useState<Filters>(initialFilters);
    const [isLoading, setIsLoading] = useState(false);
    const searchValue = searchText.trim();

    const clearSearchAndFilters = () => {
        setSearchText('');
        setAppliedFilters(initialFilters);
        navigation.setParams({ filters: initialFilters });
    };

    const removeFilter = (filterKey: keyof Filters) => {
        const updatedFilters = {
            ...appliedFilters,
            [filterKey]: '',
        };

        setAppliedFilters(updatedFilters);
        navigation.setParams({ filters: updatedFilters });
    };

    const activeFilters: ActiveFilter[] = [
        {
            key: 'country' as keyof Filters,
            label: 'Ülke',
            value: appliedFilters.country,
        },
        {
            key: 'city' as keyof Filters,
            label: 'Şehir',
            value: appliedFilters.city,
        },
        {
            key: 'category' as keyof Filters,
            label: 'Branş',
            value: appliedFilters.category,
        },
    ].filter(filter => filter.value);

    useEffect(() => {
        if (route?.params?.filters !== undefined) {
            setIsLoading(true);

            const timer = setTimeout(() => {
                setAppliedFilters(route.params.filters || initialFilters);
                setIsLoading(false);
            }, 700);

            return () => clearTimeout(timer);
        }
    }, [route?.params?.filters]);

    const filteredProviders = providers.filter(provider => {
        const matchesSearch = [
            provider.name,
            provider.category,
            provider.city,
            provider.country,
            provider.bio,
        ].some(value => value.includes(searchValue));

        const matchesFilters =
            (!appliedFilters.country || provider.country.includes(appliedFilters.country)) &&
            (!appliedFilters.city || provider.city.includes(appliedFilters.city)) &&
            (!appliedFilters.category || provider.category.includes(appliedFilters.category));

        return matchesSearch && matchesFilters;
    });

    return (
        <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
            <TextInput
                style={styles.input}
                onChangeText={text => setSearchText(text)}
                value={searchText}
                placeholder="Doktor, branş veya şehir ara"
            />
            <Pressable
                style={styles.filterButton}
                onPress={() => navigation.navigate('Filter', { filters: appliedFilters })}
            >
                <Text style={styles.filterButtonText}>Filtreleri Aç</Text>
            </Pressable>

            {activeFilters.length > 0 && (
                <View style={styles.activeFiltersContainer}>
                    {activeFilters.map(filter => (
                        <View key={filter.key} style={styles.activeFilterChip}>
                            <Text style={styles.activeFilterText}>
                                {filter.label}: {filter.value}
                            </Text>
                            <Pressable onPress={() => removeFilter(filter.key)}>
                                <Text style={styles.removeFilterText}>×</Text>
                            </Pressable>
                        </View>
                    ))}
                </View>
            )}

            {isLoading ? (
                <View style={styles.loadingContainer}>
                    <Text style={styles.loadingText}>Sonuçlar yükleniyor...</Text>
                </View>
            ) : (
                <FlatList
                    data={filteredProviders}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.listContent}
                    ListEmptyComponent={
                        <View style={styles.emptyContainer}>
                            <Text style={styles.emptyText}>Aramanızla ilgili bir sonuç bulunamadı.</Text>
                            <Pressable style={styles.retryButton} onPress={clearSearchAndFilters}>
                                <Text style={styles.retryButtonText}>Aramayı ve filtreleri temizle</Text>
                            </Pressable>
                        </View>
                    }
                    renderItem={({ item }) => (
                        <Pressable style={styles.item} onPress={() =>
                            navigation.navigate('ProviderDetail', {
                                data: item,
                            })
                        }>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.detail}>{item.category}</Text>
                            <Text style={styles.detail}>{item.city}, {item.country}</Text>
                            <Text style={styles.rating}>⭐ {item.rating}</Text>
                        </Pressable>
                    )}
                />
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    input: {
        height: 44,
        margin: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 12,
        paddingHorizontal: 12,
    },
    listContent: {
        paddingBottom: 16,
    },
    item: {
        backgroundColor: '#f7f7f7',
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 12,
    },
    name: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 6,
    },
    detail: {
        fontSize: 14,
        color: '#555',
        marginBottom: 4,
    },
    rating: {
        fontSize: 14,
        marginTop: 4,
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 32,
        color: '#777',
    },
    filterButton: {
        marginHorizontal: 16,
        marginBottom: 12,
        backgroundColor: '#111827',
        paddingVertical: 12,
        borderRadius: 12,
        alignItems: 'center',
    },
    filterButtonText: {
        color: '#fff',
        fontWeight: '600',
    },
    activeFiltersContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        marginHorizontal: 16,
        marginBottom: 8,
    },
    activeFilterChip: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        paddingLeft: 12,
        paddingRight: 8,
        paddingVertical: 6,
        borderRadius: 16,
        gap: 6,
    },
    activeFilterText: {
        color: '#333',
        fontSize: 13,
    },
    removeFilterText: {
        color: '#666',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 18,
    },
    loadingContainer: {
        marginTop: 40,
        alignItems: 'center',
    },
    loadingText: {
        color: '#666',
    },
    emptyContainer: {
        alignItems: 'center',
        marginTop: 32,
        paddingHorizontal: 24,
    },
    retryButton: {
        marginTop: 12,
        backgroundColor: '#111827',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 10,
    },
    retryButtonText: {
        color: '#fff',
        fontWeight: '600',
    },
});

export default ProviderList;