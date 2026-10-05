import { StyleSheet, Text, View } from 'react-native';

export default function EmptyState({ colors }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>No activities yet</Text>
      <Text style={[styles.description, { color: colors.mutedText }]}>
        Restore the sample list to see your activities here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', paddingTop: 56, paddingHorizontal: 24 },
  title: { fontSize: 20, fontWeight: '700' },
  description: { marginTop: 8, fontSize: 15, lineHeight: 22, textAlign: 'center' },
});
