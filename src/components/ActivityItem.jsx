import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function ActivityItem({ activity, colors, onToggleComplete }) {
  return (
    <View style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.text }, activity.completed && styles.completedText]}>
          {activity.title}
        </Text>
        <Text style={[styles.category, { color: colors.mutedText }]}>{activity.category}</Text>
      </View>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`${activity.completed ? 'Mark incomplete' : 'Mark completed'}: ${activity.title}`}
        style={[styles.statusButton, { backgroundColor: activity.completed ? colors.primary : colors.background, borderColor: colors.primary }]}
        onPress={() => onToggleComplete(activity.id)}
      >
        <Text style={[styles.statusText, { color: activity.completed ? colors.primaryText : colors.primary }]}>
          {activity.completed ? 'Done' : 'Mark done'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 12,
    padding: 16,
  },
  content: { flex: 1, paddingRight: 12 },
  title: { fontSize: 17, fontWeight: '700' },
  completedText: { textDecorationLine: 'line-through', opacity: 0.7 },
  category: { marginTop: 5, fontSize: 14 },
  statusButton: { borderWidth: 1, borderRadius: 8, paddingHorizontal: 12, paddingVertical: 9 },
  statusText: { fontSize: 14, fontWeight: '700' },
});
