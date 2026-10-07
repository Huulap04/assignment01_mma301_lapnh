import { useRouter } from "expo-router";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

const menuItems = [
  {
    href: "/profile",
    label: "My Profile",
    description: "View and edit your profile",
  },
  {
    href: "/activities",
    label: "Activities",
    description: "Track your daily activity",
  },
  {
    href: "/settings",
    label: "Settings",
    description: "Change your app preference",
  },
];

export default function AppMenu({ colors, onClose, visible }) {
  const router = useRouter();

  function openRoute(href) {
    onClose();
    router.push(href);
  }

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <Pressable style={styles.backdrop} onPress={onClose}>
        <View style={[styles.sheet, { backgroundColor: colors.surface }]}>
          <View style={[styles.handle, { backgroundColor: colors.border }]} />
          <View style={styles.titleRow}>
            <Text style={[styles.title, { color: colors.text }]}>
              Quick menu
            </Text>
            <Pressable accessibilityLabel="Close menu" onPress={onClose}>
              <Text style={[styles.closeText, { color: colors.mutedText }]}>
                Close
              </Text>
            </Pressable>
          </View>

          {menuItems.map((item) => (
            <Pressable
              key={item.href}
              style={[styles.menuItem, { borderColor: colors.border }]}
              onPress={() => openRoute(item.href)}
            >
              <View>
                <Text style={[styles.menuLabel, { color: colors.text }]}>
                  {item.label}
                </Text>
                <Text
                  style={[styles.menuDescription, { color: colors.mutedText }]}
                >
                  {item.description}
                </Text>
              </View>
              <Text style={[styles.arrow, { color: colors.primary }]}>›</Text>
            </Pressable>
          ))}
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(15, 23, 42, 0.45)",
  },
  sheet: { borderTopLeftRadius: 28, borderTopRightRadius: 28, padding: 24 },
  handle: { alignSelf: "center", width: 42, height: 5, borderRadius: 3 },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 22,
  },
  title: { fontSize: 22, fontWeight: "800" },
  closeText: { fontSize: 15, fontWeight: "700" },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopWidth: 1,
    paddingVertical: 18,
  },
  menuLabel: { fontSize: 17, fontWeight: "700" },
  menuDescription: { marginTop: 4, fontSize: 14 },
  arrow: { fontSize: 30, fontWeight: "400" },
});
