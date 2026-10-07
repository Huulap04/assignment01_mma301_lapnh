# Design Decision Record

## Navigation

- Choice: Expo Router Stack in `src/app/`.
- Reason: File-based routes make the five required screens easy to locate and explain.
- Change impact: Tabs can be added in a route group without moving shared Context providers.

## Theme ownership

- Choice: `ThemeContext` at the root.
- Reason: Theme affects backgrounds, text, buttons, and the stack header.
- Change impact: A system-theme option adds a third mode through the same storage helper.

## Profile ownership

- Choice: `ProfileContext` at the root.
- Reason: Home and Profile read profile; Edit Profile writes it.
- Change impact: Adding phone/location changes the model, validation, UI, storage validation, and tests.

## Form state

- Choice: Local state in `EditProfileScreen`.
- Reason: Inputs and errors matter only while editing.
- Change impact: An offline draft needs a separate context or AsyncStorage key.

## Persistence

- Choice: Dedicated `storage.js` service.
- Reason: JSON parsing, keys, corruption handling, and AsyncStorage calls stay out of UI screens.
- Change impact: A mock API can replace the service while keeping Context and UI behaviour.

## Activity list

- Choice: Local FlatList state plus reusable `ActivityItem`.
- Reason: Only Activities consumes the collection in the current scope.
- Change impact: Persisting favourites/completion moves activities to Context/service and adds storage tests.
