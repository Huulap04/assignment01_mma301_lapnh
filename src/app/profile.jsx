import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>L</Text>
      </View>
      <Text style={styles.name}>Your Name</Text>
      <Text style={styles.bio}>MMA301 student building a multiplatform mobile app.</Text>

      <Link href="/edit-profile" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Edit Profile</Text>
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
    backgroundColor: '#DBEAFE',
  },
  avatarText: { fontSize: 40, fontWeight: '700', color: '#1D4ED8' },
  name: { marginTop: 18, fontSize: 26, fontWeight: '700', color: '#0F172A' },
  bio: { marginTop: 8, textAlign: 'center', fontSize: 16, lineHeight: 24, color: '#475569' },
  button: { marginTop: 30, borderRadius: 10, backgroundColor: '#2563EB', paddingHorizontal: 22, paddingVertical: 14 },
  buttonText: { color: '#FFFFFF', fontWeight: '600', fontSize: 16 },
});
