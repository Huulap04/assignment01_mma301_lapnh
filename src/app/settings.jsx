import { router } from "expo-router";
import { Pressable, StyleSheet, Switch, Text, View } from "react-native";
import { useTheme } from "../context/ThemeContext";

export default function SettingsScreen() {
  const { theme, themeName, toggleTheme } = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text style={[styles.eyebrow, { color: theme.colors.primary }]}>
        PREFERENCES
      </Text>
      <Text style={[styles.title, { color: theme.colors.text }]}>
        Appearance
      </Text>
      <Text style={[styles.description, { color: theme.colors.mutedText }]}>
        Choose how the app looks and feels.
      </Text>

      <View
        style={[
          styles.preferenceCard,
          {
            backgroundColor: theme.colors.surface,
            borderColor: theme.colors.border,
          },
        ]}
      >
        <View style={styles.preferenceCopy}>
          <Text style={[styles.preferenceTitle, { color: theme.colors.text }]}>
            Dark mode
          </Text>
          <Text
            style={[
              styles.preferenceDescription,
              { color: theme.colors.mutedText },
            ]}
          >
            Use a darker app appearance.
          </Text>
        </View>
        <Switch
          value={themeName === "dark"}
          onValueChange={toggleTheme}
          trackColor={{
            false: theme.colors.border,
            true: theme.colors.primary,
          }}
          thumbColor={themeName === "dark" ? "#FFFFFF" : theme.colors.surface}
          ios_backgroundColor={theme.colors.border}
        />
      </View>

      <View style={[styles.infoCard, { borderColor: theme.colors.border }]}>
        <Text style={[styles.infoTitle, { color: theme.colors.text }]}>
          Saved automatically
        </Text>
        <Text
          style={[styles.infoDescription, { color: theme.colors.mutedText }]}
        >
          Your appearance preference stays after reload.
        </Text>
      </View>

      <Pressable
        style={[styles.homeButton, { backgroundColor: theme.colors.primary }]}
        onPress={() => router.replace("/")}
      >
        <Text
          style={[styles.homeButtonText, { color: theme.colors.primaryText }]}
        >
          Return Home
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 24 },
  eyebrow: { fontSize: 12, fontWeight: "800", letterSpacing: 1.1 },
  title: { marginTop: 6, fontSize: 30, fontWeight: "800" },
  description: { marginTop: 10, fontSize: 16, lineHeight: 24 },
  preferenceCard: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 18,
    marginTop: 28,
    padding: 18,
  },
  preferenceCopy: { flex: 1, paddingRight: 12 },
  preferenceTitle: { fontSize: 17, fontWeight: "800" },
  preferenceDescription: { marginTop: 5, fontSize: 14, lineHeight: 20 },
  infoCard: { borderLeftWidth: 3, marginTop: 16, paddingLeft: 14 },
  infoTitle: { fontSize: 15, fontWeight: "800" },
  infoDescription: { marginTop: 4, fontSize: 14, lineHeight: 20 },
  homeButton: { marginTop: 30, borderRadius: 14, padding: 15 },
  homeButtonText: { fontSize: 16, fontWeight: "800", textAlign: "center" },
});
