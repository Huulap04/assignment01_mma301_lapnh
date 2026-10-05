import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useProfile } from '../context/ProfileContext';
import { useTheme } from '../context/ThemeContext';

export default function ProfileScreen() {
  const { profile } = useProfile();
  const { theme } = useTheme();
  const initials = profile.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={[styles.avatar, { backgroundColor: theme.colors.avatarBackground }]}>
        <Text style={[styles.avatarText, { color: theme.colors.avatarText }]}>{initials}</Text>
      </View>
      <Text style={[styles.name, { color: theme.colors.text }]}>{profile.name}</Text>
      <Text style={[styles.bio, { color: theme.colors.mutedText }]}>{profile.bio}</Text>

      <Link href="/edit-profile" asChild>
        <Pressable style={StyleSheet.flatten([styles.button, { backgroundColor: theme.colors.primary }])}>
          <Text style={StyleSheet.flatten([styles.buttonText, { color: theme.colors.primaryText }])}>
            Edit Profile
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  avatar: {
    width: 96,
    height: 96,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 48,
  },
  avatarText: { fontSize: 40, fontWeight: '700' },
  name: { marginTop: 18, fontSize: 26, fontWeight: '700' },
  bio: { marginTop: 8, textAlign: 'center', fontSize: 16, lineHeight: 24 },
  button: { marginTop: 30, borderRadius: 10, paddingHorizontal: 22, paddingVertical: 14 },
  buttonText: { fontWeight: '600', fontSize: 16 },
});
