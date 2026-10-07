import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AppMenu from "../components/AppMenu";
import { useProfile } from "../context/ProfileContext";
import { useTheme } from "../context/ThemeContext";

const quickActions = [
  {
    href: "/activities",
    label: "Activities",
    detail: "Review your activity list",
  },
  {
    href: "/settings",
    label: "Preferences",
    detail: "Choose your app appearance",
  },
];

export default function HomeScreen() {
  const router = useRouter();
  const { profile } = useProfile();
  const { theme } = useTheme();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const initials = profile.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <View style={styles.topRow}>
        <View>
          <Text style={[styles.eyebrow, { color: theme.colors.primary }]}>
            PERSONAL SPACE
          </Text>
          <Text style={[styles.topTitle, { color: theme.colors.text }]}>
            Profile & Activity
          </Text>
        </View>
        <Pressable
          accessibilityLabel="Open quick menu"
          style={[
            styles.menuButton,
            {
              backgroundColor: theme.colors.surface,
              borderColor: theme.colors.border,
            },
          ]}
          onPress={() => setIsMenuVisible(true)}
        >
          <Text style={[styles.menuButtonText, { color: theme.colors.text }]}>
            ☰
          </Text>
        </Pressable>
      </View>

      <View
        style={[
          styles.heroCard,
          {
            backgroundColor: theme.colors.surface,
            borderColor: theme.colors.border,
          },
        ]}
      >
        <View
          style={[
            styles.avatar,
            { backgroundColor: theme.colors.avatarBackground },
          ]}
        >
          <Text style={[styles.avatarText, { color: theme.colors.avatarText }]}>
            {initials}
          </Text>
        </View>
        <Text style={[styles.title, { color: theme.colors.text }]}>
          Welcome, {profile.name}!
        </Text>
        <Text style={[styles.description, { color: theme.colors.mutedText }]}>
          {profile.bio}
        </Text>

        <Pressable
          style={[
            styles.primaryButton,
            { backgroundColor: theme.colors.primary },
          ]}
          onPress={() => router.push("/profile")}
        >
          <Text
            style={[
              styles.primaryButtonText,
              { color: theme.colors.primaryText },
            ]}
          >
            View my profile
          </Text>
        </Pressable>
      </View>

      <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
        Quick actions
      </Text>
      <View style={styles.actions}>
        {quickActions.map((item) => (
          <Pressable
            key={item.href}
            style={[
              styles.actionCard,
              {
                backgroundColor: theme.colors.surface,
                borderColor: theme.colors.border,
              },
            ]}
            onPress={() => router.push(item.href)}
          >
            <View>
              <Text style={[styles.actionLabel, { color: theme.colors.text }]}>
                {item.label}
              </Text>
              <Text
                style={[styles.actionDetail, { color: theme.colors.mutedText }]}
              >
                {item.detail}
              </Text>
            </View>
            <Text style={[styles.actionArrow, { color: theme.colors.primary }]}>
              ›
            </Text>
          </Pressable>
        ))}
      </View>

      <AppMenu
        colors={theme.colors}
        visible={isMenuVisible}
        onClose={() => setIsMenuVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  eyebrow: { fontSize: 12, fontWeight: "800", letterSpacing: 1.1 },
  topTitle: { marginTop: 4, fontSize: 21, fontWeight: "800" },
  menuButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 48,
    borderWidth: 1,
    borderRadius: 24,
  },
  menuButtonText: { fontSize: 23, fontWeight: "800" },
  heroCard: { borderWidth: 1, borderRadius: 24, padding: 22 },
  avatar: {
    alignItems: "center",
    justifyContent: "center",
    width: 52,
    height: 52,
    borderRadius: 26,
  },
  avatarText: { fontSize: 20, fontWeight: "800" },
  title: { marginTop: 18, fontSize: 27, fontWeight: "800" },
  description: { marginTop: 8, fontSize: 16, lineHeight: 23 },
  primaryButton: {
    marginTop: 22,
    borderRadius: 14,
    paddingVertical: 15,
    paddingHorizontal: 16,
  },
  primaryButtonText: { fontSize: 16, fontWeight: "800", textAlign: "center" },
  sectionTitle: { marginTop: 26, fontSize: 17, fontWeight: "800" },
  actions: { marginTop: 12, gap: 10 },
  actionCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 10,
    padding: 16,
  },
  actionLabel: { fontSize: 16, fontWeight: "800" },
  actionDetail: { marginTop: 4, fontSize: 13 },
  actionArrow: { fontSize: 27, fontWeight: "400" },
});
