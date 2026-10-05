import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function ActivitiesScreen() {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.text }]}>Activities</Text>
      <Text style={[styles.description, { color: theme.colors.mutedText }]}>
        The FlatList, empty state, and item interaction will be added in a later milestone.
      </Text>

      <Pressable style={[styles.button, { backgroundColor: theme.colors.primary }]} onPress={() => router.push('/settings')}>
        <Text style={[styles.buttonText, { color: theme.colors.primaryText }]}>Continue to Settings</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24 },
  title: { fontSize: 28, fontWeight: '700' },
  description: { marginTop: 10, fontSize: 16, lineHeight: 24 },
  button: { marginTop: 28, borderRadius: 10, padding: 14 },
  buttonText: { fontSize: 16, fontWeight: '600', textAlign: 'center' },
});
