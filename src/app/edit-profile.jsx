import { useFocusEffect, useRouter } from 'expo-router';
import { useCallback, useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useProfile } from '../context/ProfileContext';
import { useTheme } from '../context/ThemeContext';

export default function EditProfileScreen() {
  const router = useRouter();
  const { profile, updateProfile } = useProfile();
  const { theme } = useTheme();
  const [name, setName] = useState(profile.name);
  const [bio, setBio] = useState(profile.bio);
  const [errors, setErrors] = useState({});

  useFocusEffect(
    useCallback(() => {
      setName(profile.name);
      setBio(profile.bio);
      setErrors({});
    }, [profile.bio, profile.name])
  );

  function validate() {
    const nextErrors = {};

    if (name.trim().length < 2) {
      nextErrors.name = 'Name must contain at least 2 characters.';
    }

    if (bio.trim().length > 160) {
      nextErrors.bio = 'Bio must be 160 characters or fewer.';
    }

    return nextErrors;
  }

  function handleSave() {
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    updateProfile({ name: name.trim(), bio: bio.trim() });
    router.back();
  }

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View>
        <Text style={[styles.title, { color: theme.colors.text }]}>Edit Profile</Text>
        <Text style={[styles.description, { color: theme.colors.mutedText }]}>Update the information shown in your profile.</Text>

        <Text style={[styles.label, { color: theme.colors.text }]}>Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
          placeholderTextColor={theme.colors.mutedText}
          autoCapitalize="words"
          maxLength={60}
          style={[
            styles.input,
            { borderColor: errors.name ? '#DC2626' : theme.colors.border, color: theme.colors.text, backgroundColor: theme.colors.surface },
          ]}
        />
        {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}

        <Text style={[styles.label, { color: theme.colors.text }]}>Bio</Text>
        <TextInput
          value={bio}
          onChangeText={setBio}
          placeholder="Tell us about yourself"
          placeholderTextColor={theme.colors.mutedText}
          multiline
          maxLength={160}
          style={[
            styles.input,
            styles.bioInput,
            { borderColor: errors.bio ? '#DC2626' : theme.colors.border, color: theme.colors.text, backgroundColor: theme.colors.surface },
          ]}
        />
        <Text style={[styles.characterCount, { color: theme.colors.mutedText }]}>{bio.length}/160</Text>
        {errors.bio ? <Text style={styles.errorText}>{errors.bio}</Text> : null}

        <Pressable style={[styles.button, { backgroundColor: theme.colors.primary }]} onPress={handleSave}>
          <Text style={[styles.buttonText, { color: theme.colors.primaryText }]}>Save Profile</Text>
        </Pressable>
        <Pressable
          style={[styles.secondaryButton, { borderColor: theme.colors.border }]}
          onPress={() => router.back()}
        >
          <Text style={[styles.secondaryButtonText, { color: theme.colors.text }]}>Cancel</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24 },
  title: { fontSize: 28, fontWeight: '700' },
  description: { marginTop: 10, fontSize: 16, lineHeight: 24 },
  label: { marginTop: 24, fontSize: 16, fontWeight: '600' },
  input: { marginTop: 8, minHeight: 48, borderWidth: 1, borderRadius: 10, paddingHorizontal: 14, fontSize: 16 },
  bioInput: { minHeight: 112, paddingTop: 12, textAlignVertical: 'top' },
  characterCount: { marginTop: 6, fontSize: 13, textAlign: 'right' },
  errorText: { marginTop: 6, color: '#DC2626', fontSize: 13 },
  button: { marginTop: 28, borderRadius: 10, padding: 14 },
  buttonText: { fontSize: 16, fontWeight: '600', textAlign: 'center' },
  secondaryButton: { marginTop: 12, borderWidth: 1, borderRadius: 10, padding: 14 },
  secondaryButtonText: { fontSize: 16, fontWeight: '600', textAlign: 'center' },
});
