# Profile & Activity App

React Native + Expo application for MMA301 Assignment 01. The app demonstrates navigation, shared state, controlled forms, FlatList, and local persistence.

> Before submission, update the project/app name to the `StudentName_ClassCode` convention required by your class.

## Features

- Five screens: Home, Profile, Edit Profile, Activities, and Settings.
- Expo Router Stack navigation.
- Shared Profile and Theme state with Context API.
- Controlled Edit Profile form with validation, Save, and Cancel flows.
- Activity collection rendered with FlatList, an interaction to mark an item completed, and an empty state.
- AsyncStorage persistence for profile and theme, including safe defaults for missing or malformed local data.

## Run locally

```powershell
npm install
npx expo start --clear
```

Open the app in Expo Go on Android, an Android emulator, or a compatible iOS simulator.

## Screen and workflow map

```text
Home
 |- Profile -> Edit Profile -> Save/Cancel -> Profile/Home update
 |- Activities -> mark completed / empty state / restore list
 `- Settings -> toggle Light/Dark theme -> applies to all screens

App startup -> hydrate Profile + Theme from AsyncStorage -> render app
```

## State and persistence strategy

### Form inputs and validation errors

- Owner: `EditProfileScreen`
- Persistent: No
- Reason: This temporary state belongs only to the edit flow.

### Profile

- Owner: `ProfileContext`
- Persistent: Yes
- Reason: Home and Profile read it; Edit Profile changes it.

### Theme mode

- Owner: `ThemeContext`
- Persistent: Yes
- Reason: It applies app-wide and must survive restart.

### Activities

- Owner: `ActivitiesScreen`
- Persistent: No
- Reason: The current assignment scope uses activities on one screen only.

`src/services/storage.js` owns AsyncStorage keys, JSON parsing, validation, and fallback logic. Providers hydrate first; the root layout shows a loading state until profile and theme are ready.

## Project structure

```text
src/
  app/          Expo Router screens and root Stack layout
  components/   Reusable ActivityItem and EmptyState components
  context/      ProfileContext and ThemeContext
  services/     AsyncStorage helper
docs/           Assignment evidence documents
```

## Limitations

- Activities are intentionally not persisted because the assignment requires persistence for profile/theme/preference; this keeps the initial scope focused.
- Avatar is rendered from name initials rather than an uploaded image.
- The project has no backend, authentication, or real API.

## Verification

Run these checks before submitting:

```powershell
npx expo lint
npx expo-doctor
npx expo start --clear
```

Detailed requirement, design, testing, debugging, and AI-use evidence is in `docs/`.
