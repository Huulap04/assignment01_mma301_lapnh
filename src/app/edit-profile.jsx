import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function EditProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
      <Text style={styles.description}>
        The controlled form and validation will be added in the next milestone.
      </Text>

      <Pressable style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Cancel and go back</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#F8FAFC' },
  title: { fontSize: 28, fontWeight: '700', color: '#0F172A' },
  description: { marginTop: 10, fontSize: 16, lineHeight: 24, color: '#475569' },
  button: { marginTop: 28, borderRadius: 10, backgroundColor: '#2563EB', padding: 14 },
  buttonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600', textAlign: 'center' },
});
