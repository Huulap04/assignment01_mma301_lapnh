# Test Matrix

Run every test on the target device before submission. Replace **Pending manual test** with the observed result and Pass/Fail.

## T01 - Startup

- Steps: Clear app data or run for the first time, then open app.
- Expected: Default profile and light theme load; the app does not crash.
- Actual: Pending manual test
- Result: Pending

## T02 - Navigation

- Steps: Open every screen and use back/home paths.
- Expected: All five screens open without crashing.
- Actual: Pending manual test
- Result: Pending

## T03 - Profile read

- Steps: Open Profile.
- Expected: Name, initials, and bio render.
- Actual: Pending manual test
- Result: Pending

## T04 - Invalid form

- Steps: Edit Profile, clear Name, then tap Save.
- Expected: Error appears and profile is unchanged.
- Actual: Pending manual test
- Result: Pending

## T05 - Valid form

- Steps: Enter valid name/bio and Save.
- Expected: Profile and Home update immediately.
- Actual: Pending manual test
- Result: Pending

## T06 - Cancel form

- Steps: Edit fields, then tap Cancel.
- Expected: Previous profile remains unchanged.
- Actual: Pending manual test
- Result: Pending

## T07 - Theme

- Steps: Switch Light/Dark in Settings, then visit another screen.
- Expected: Theme applies to header and all screen UI.
- Actual: Pending manual test
- Result: Pending

## T08 - List normal

- Steps: Open Activities.
- Expected: Three FlatList items render with categories.
- Actual: Pending manual test
- Result: Pending

## T09 - List empty

- Steps: Tap Show empty state.
- Expected: Empty-state message appears.
- Actual: Pending manual test
- Result: Pending

## T10 - List interaction

- Steps: Tap Mark done for an item.
- Expected: Status changes to Done and title is struck through.
- Actual: Pending manual test
- Result: Pending

## T11 - Persistence

- Steps: Save profile and theme, then fully reload app.
- Expected: Saved profile and theme are restored.
- Actual: Pending manual test
- Result: Pending

## T12 - Corrupt storage

- Steps: Set an invalid JSON value for a storage key, then reload.
- Expected: Safe default loads and the app does not crash.
- Actual: Pending manual test
- Result: Pending

## T13 - Responsive UI

- Steps: Test at least two portrait device sizes.
- Expected: Content remains readable and controls are reachable.
- Actual: Pending manual test
- Result: Pending

## Automated checks already run

- `npx expo lint`: Pass - completed without lint errors after Milestone 5.
- `npx expo export --platform android`: Pass - Android bundle generated successfully after Milestone 5.
- `npx expo-doctor`: Pass - 21/21 checks passed after dependency synchronization.
