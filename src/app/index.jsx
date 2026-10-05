import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const links = [
  { href: '/profile', label: 'View Profile' },
  { href: '/activities', label: 'View Activities' },
  { href: '/settings', label: 'Open Settings' },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.description}>
        This is the starting screen for your Profile & Activity App.
      </Text>

      <View style={styles.actions}>
        {links.map((item) => (
          <Link key={item.href} href={item.href} asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>{item.label}</Text>
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
    backgroundColor: '#F8FAFC',
  },
  title: { fontSize: 30, fontWeight: '700', color: '#0F172A' },
  description: { marginTop: 10, fontSize: 16, lineHeight: 24, color: '#475569' },
  actions: { marginTop: 32, gap: 12 },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#2563EB',
  },
  buttonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600', textAlign: 'center' },
});
