import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function SettingsScreen() {
  const { theme, themeName, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.text }]}>Settings</Text>
      <Text style={[styles.description, { color: theme.colors.mutedText }]}>
        Current theme: {themeName === 'light' ? 'Light' : 'Dark'}
      </Text>

      <Pressable style={[styles.button, { backgroundColor: theme.colors.primary }]} onPress={toggleTheme}>
        <Text style={[styles.buttonText, { color: theme.colors.primaryText }]}>
          Switch to {themeName === 'light' ? 'Dark' : 'Light'} Theme
        </Text>
      </Pressable>

      <Pressable
        style={[styles.secondaryButton, { borderColor: theme.colors.border }]}
        onPress={() => router.replace('/')}
      >
        <Text style={[styles.secondaryButtonText, { color: theme.colors.text }]}>Return Home</Text>
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
  secondaryButton: { marginTop: 12, borderWidth: 1, borderRadius: 10, padding: 14 },
  secondaryButtonText: { fontSize: 16, fontWeight: '600', textAlign: 'center' },
});
