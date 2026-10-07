import { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import ActivityItem from "../components/ActivityItem";
import EmptyState from "../components/EmptyState";
import { useTheme } from "../context/ThemeContext";

const initialActivities = [
  {
    id: "morning-run",
    title: "Morning Run",
    category: "Fitness",
    completed: false,
  },
  {
    id: "read-book",
    title: "Read 20 pages",
    category: "Learning",
    completed: true,
  },
  {
    id: "team-call",
    title: "Join team call",
    category: "Work",
    completed: false,
  },
  {
    id: "review-notes",
    title: "Review lecture notes",
    category: "Learning",
    completed: false,
  },
  {
    id: "grocery-list",
    title: "Plan grocery list",
    category: "Personal",
    completed: false,
  },
  {
    id: "water-plants",
    title: "Water the plants",
    category: "Home",
    completed: true,
  },
  {
    id: "project-update",
    title: "Send project update",
    category: "Work",
    completed: false,
  },
  {
    id: "stretch-break",
    title: "Take a stretch break",
    category: "Wellness",
    completed: false,
  },
];

export default function ActivitiesScreen() {
  const { theme } = useTheme();
  const [activities, setActivities] = useState(initialActivities);
  const [searchQuery, setSearchQuery] = useState("");

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredActivities = activities.filter((activity) => {
    const searchableText =
      `${activity.title} ${activity.category}`.toLowerCase();
    return searchableText.includes(normalizedQuery);
  });

  function toggleCompleted(activityId) {
    setActivities((currentActivities) =>
      currentActivities.map((activity) =>
        activity.id === activityId
          ? { ...activity, completed: !activity.completed }
          : activity,
      ),
    );
  }

  function toggleList() {
    setSearchQuery("");
    setActivities((currentActivities) =>
      currentActivities.length === 0 ? initialActivities : [],
    );
  }

  function clearSearch() {
    setSearchQuery("");
  }

  const hasNoSearchResults =
    activities.length > 0 && filteredActivities.length === 0;

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.colors.text }]}>
          Activities
        </Text>
        <Text style={[styles.description, { color: theme.colors.mutedText }]}>
          Use a status button to update the completion state.
        </Text>

        <View
          style={[
            styles.searchField,
            {
              backgroundColor: theme.colors.surface,
              borderColor: theme.colors.border,
            },
          ]}
        >
          <Text style={[styles.searchIcon, { color: theme.colors.mutedText }]}>
            ⌕
          </Text>
          <TextInput
            accessibilityLabel="Search activities"
            autoCapitalize="none"
            autoCorrect={false}
            editable={activities.length > 0}
            onChangeText={setSearchQuery}
            placeholder="Search activities"
            placeholderTextColor={theme.colors.mutedText}
            returnKeyType="search"
            selectionColor={theme.colors.primary}
            style={[styles.searchInput, { color: theme.colors.text }]}
            value={searchQuery}
          />
          {searchQuery ? (
            <Pressable
              accessibilityLabel="Clear search"
              hitSlop={8}
              onPress={clearSearch}
            >
              <Text
                style={[styles.clearSearch, { color: theme.colors.primary }]}
              >
                Clear
              </Text>
            </Pressable>
          ) : null}
        </View>

        <Pressable
          style={[styles.button, { backgroundColor: theme.colors.primary }]}
          onPress={toggleList}
        >
          <Text
            style={[styles.buttonText, { color: theme.colors.primaryText }]}
          >
            {activities.length === 0
              ? "Restore sample activities"
              : "Show empty state"}
          </Text>
        </Pressable>
      </View>

      <FlatList
        data={filteredActivities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ActivityItem
            activity={item}
            colors={theme.colors}
            onToggleComplete={toggleCompleted}
          />
        )}
        ListEmptyComponent={
          hasNoSearchResults ? (
            <View style={styles.noResults}>
              <Text
                style={[styles.noResultsTitle, { color: theme.colors.text }]}
              >
                No matching activities
              </Text>
              <Text
                style={[
                  styles.noResultsText,
                  { color: theme.colors.mutedText },
                ]}
              >
                Try a different title or category.
              </Text>
              <Pressable onPress={clearSearch}>
                <Text
                  style={[styles.resetText, { color: theme.colors.primary }]}
                >
                  Clear search
                </Text>
              </Pressable>
            </View>
          ) : (
            <EmptyState colors={theme.colors} />
          )
        }
        contentContainerStyle={
          filteredActivities.length === 0
            ? styles.emptyListContent
            : styles.listContent
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { paddingHorizontal: 24, paddingTop: 24 },
  title: { fontSize: 28, fontWeight: "700" },
  description: { marginTop: 10, fontSize: 16, lineHeight: 24 },
  searchField: {
    alignItems: "center",
    borderRadius: 14,
    borderWidth: 1,
    flexDirection: "row",
    marginTop: 18,
    minHeight: 52,
    paddingHorizontal: 14,
  },
  searchIcon: { fontSize: 24, marginRight: 8 },
  searchInput: { flex: 1, fontSize: 16, paddingVertical: 12 },
  clearSearch: { fontSize: 14, fontWeight: "700", paddingLeft: 8 },
  button: { marginTop: 20, borderRadius: 10, padding: 14 },
  buttonText: { fontSize: 16, fontWeight: "600", textAlign: "center" },
  listContent: { padding: 24, paddingTop: 20 },
  emptyListContent: { flexGrow: 1, paddingHorizontal: 24 },
  noResults: { alignItems: "center", paddingTop: 64 },
  noResultsTitle: { fontSize: 20, fontWeight: "700" },
  noResultsText: { fontSize: 16, marginTop: 8, textAlign: "center" },
  resetText: { fontSize: 16, fontWeight: "700", marginTop: 18 },
});
