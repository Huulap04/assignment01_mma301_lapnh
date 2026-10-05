import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useProfile } from '../context/ProfileContext';
import { useTheme } from '../context/ThemeContext';

const links = [
  { href: '/profile', label: 'View Profile' },
  { href: '/activities', label: 'View Activities' },
  { href: '/settings', label: 'Open Settings' },
];

export default function HomeScreen() {
  const { profile } = useProfile();
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.text }]}>Welcome, {profile.name}!</Text>
      <Text style={[styles.description, { color: theme.colors.mutedText }]}>
        {profile.bio}
      </Text>

      <View style={styles.actions}>
        {links.map((item) => (
          <Link key={item.href} href={item.href} asChild>
            <Pressable style={StyleSheet.flatten([styles.button, { backgroundColor: theme.colors.primary }])}>
              <Text style={StyleSheet.flatten([styles.buttonText, { color: theme.colors.primaryText }])}>
                {item.label}
              </Text>
            </Pressable>
          </Link>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  title: { fontSize: 30, fontWeight: '700' },
  description: { marginTop: 10, fontSize: 16, lineHeight: 24 },
  actions: { marginTop: 32, gap: 12 },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  buttonText: { fontSize: 16, fontWeight: '600', textAlign: 'center' },
});
