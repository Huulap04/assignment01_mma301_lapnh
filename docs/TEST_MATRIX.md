# Test Matrix

Run every test on the target device before submission. Replace **Pending manual test** with the observed result and Pass/Fail.

## T01 - Startup

- Steps: Clear app data or run for the first time, then open app.
- Expected: Default profile and light theme load; the app does not crash.
- Actual: Saved profile/theme data was cleared; app reopened with default profile and light theme without crashing.
- Result: Pass

## T02 - Navigation

- Steps: Open every screen and use back/home paths.
- Expected: All five screens open without crashing.
- Actual: Opened Home, Profile, Edit Profile, Activities, and Settings without a crash.
- Result: Pass

## T03 - Profile read

- Steps: Open Profile.
- Expected: Name, initials, and bio render.
- Actual: Initials NH, name Nguyễn Hữu Lập, and saved bio rendered on Profile.
- Result: Pass

## T04 - Invalid form

- Steps: Edit Profile, clear Name, then tap Save.
- Expected: Error appears and profile is unchanged.
- Actual: Empty Name showed a validation error and did not save.
- Result: Pass

## T05 - Valid form

- Steps: Enter valid name/bio and Save.
- Expected: Profile and Home update immediately.
- Actual: Saved name and bio appeared on Home and Profile.
- Result: Pass

## T06 - Cancel form

- Steps: Edit fields, then tap Cancel.
- Expected: Previous profile remains unchanged.
- Actual: Cancel returned to Profile with the previous saved name and bio unchanged.
- Result: Pass

## T07 - Theme

- Steps: Switch Light/Dark in Settings, then visit another screen.
- Expected: Theme applies to header and all screen UI.
- Actual: Dark theme applied to the Activities screen, header, text, and buttons.
- Result: Pass

## T08 - List normal

- Steps: Open Activities.
- Expected: Three FlatList items render with categories.
- Actual: Three activities rendered with Fitness, Learning, and Work categories.
- Result: Pass

## T09 - List empty

- Steps: Tap Show empty state.
- Expected: Empty-state message appears.
- Actual: No activities yet message and Restore sample activities button displayed.
- Result: Pass

## T10 - List interaction

- Steps: Tap Mark done for an item.
- Expected: Status changes to Done and title is struck through.
- Actual: Marked activities changed to Done and their titles were struck through.
- Result: Pass

## T11 - Persistence

- Steps: Save profile and theme, then fully reload app.
- Expected: Saved profile and theme are restored.
- Actual: Saved name and bio remained after app reload; dark theme remained active.
- Result: Pass

## T12 - Corrupt storage

- Steps: Set an invalid JSON value for a storage key, then reload.
- Expected: Safe default loads and the app does not crash.
- Actual: Corrupt profile/theme storage was simulated; safe defaults loaded and the app did not crash.
- Result: Pass

## T13 - Responsive UI

- Steps: Test at least two portrait device sizes.
- Expected: Content remains readable and controls are reachable.
- Actual: Tested at 360x800 and 412x915; text and controls remained readable and reachable.
- Result: Pass

## Automated checks already run

- `npx expo lint`: Pass - completed without lint errors after Milestone 5.
- `npx expo export --platform android`: Pass - Android bundle generated successfully after Milestone 5.
- `npx expo-doctor`: Pass - 21/21 checks passed after dependency synchronization.
