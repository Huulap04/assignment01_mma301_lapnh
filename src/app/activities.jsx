import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import ActivityItem from '../components/ActivityItem';
import EmptyState from '../components/EmptyState';
import { useTheme } from '../context/ThemeContext';

const initialActivities = [
  { id: 'morning-run', title: 'Morning Run', category: 'Fitness', completed: false },
  { id: 'read-book', title: 'Read 20 pages', category: 'Learning', completed: true },
  { id: 'team-call', title: 'Join team call', category: 'Work', completed: false },
];

export default function ActivitiesScreen() {
  const { theme } = useTheme();
  const [activities, setActivities] = useState(initialActivities);

  function toggleCompleted(activityId) {
    setActivities((currentActivities) =>
      currentActivities.map((activity) =>
        activity.id === activityId ? { ...activity, completed: !activity.completed } : activity
      )
    );
  }

  function toggleList() {
    setActivities((currentActivities) => (currentActivities.length === 0 ? initialActivities : []));
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.colors.text }]}>Activities</Text>
        <Text style={[styles.description, { color: theme.colors.mutedText }]}>
          Use a status button to update the completion state.
        </Text>

        <Pressable style={[styles.button, { backgroundColor: theme.colors.primary }]} onPress={toggleList}>
          <Text style={[styles.buttonText, { color: theme.colors.primaryText }]}>
            {activities.length === 0 ? 'Restore sample activities' : 'Show empty state'}
          </Text>
        </Pressable>
      </View>

      <FlatList
        data={activities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ActivityItem activity={item} colors={theme.colors} onToggleComplete={toggleCompleted} />
        )}
        ListEmptyComponent={<EmptyState colors={theme.colors} />}
        contentContainerStyle={activities.length === 0 ? styles.emptyListContent : styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { paddingHorizontal: 24, paddingTop: 24 },
  title: { fontSize: 28, fontWeight: '700' },
  description: { marginTop: 10, fontSize: 16, lineHeight: 24 },
  button: { marginTop: 20, borderRadius: 10, padding: 14 },
  buttonText: { fontSize: 16, fontWeight: '600', textAlign: 'center' },
  listContent: { padding: 24, paddingTop: 20 },
  emptyListContent: { flexGrow: 1, paddingHorizontal: 24 },
});
