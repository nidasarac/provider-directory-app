import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProviderDetail = ({ route }) => {
  const providerData = route?.params?.data;

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Text style={styles.avatar}>{providerData?.gender == 'female' ? '👩‍⚕️' : '👨‍⚕️'}</Text>
      </View>

      <Text style={styles.name}>{providerData?.name || '-'}</Text>
      <Text style={styles.category}>{providerData?.category || '-'}</Text>

      <View style={styles.card}>
        <Text>
          📍 {providerData?.city || '-'}, {providerData?.country || '-'}
        </Text>
        <Text>⭐ {providerData?.rating ?? '-'}</Text>
        <Text>📞 {providerData?.phone || '-'}</Text>
        <Text>✉️ {providerData?.email || '-ş'}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.bioTitle}>Hakkında</Text>
        <Text>{providerData?.bio || 'Açıklama bulunmuyor.'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    fontSize: 80,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 8,
  },
  category: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    gap: 8,
  },
  bioTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ProviderDetail;