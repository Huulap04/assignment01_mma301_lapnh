# Requirement Traceability Matrix

## R01 - Project runs

- Evidence: `package.json`, `app.json`, `src/app/_layout.jsx`
- Test: T01

## R02 - Navigation across five screens

- Evidence: `src/app/_layout.jsx` and routes in `src/app/`
- Test: T02

## R03 - Profile shows default and saved data

- Evidence: `ProfileContext.jsx`, `profile.jsx`, `index.jsx`
- Tests: T03, T11

## R04 - Edit Profile form and validation

- Evidence: `edit-profile.jsx`
- Tests: T04, T05, T06

## R05 - App-wide theme preference

- Evidence: `ThemeContext.jsx`, `settings.jsx`
- Test: T07

## R06 - FlatList, interaction, and empty state

- Evidence: `activities.jsx`, `ActivityItem.jsx`, `EmptyState.jsx`
- Tests: T08, T09, T10

## R07 - AsyncStorage persistence and fallback

- Evidence: `storage.js`, `ProfileContext.jsx`, `ThemeContext.jsx`
- Tests: T01, T11, T12

## R08 - Reusable components

- Evidence: `ActivityItem.jsx`, `EmptyState.jsx`
- Tests: T08, T09

## R09 - Responsive Flexbox layout

- Evidence: `StyleSheet` layouts in screens and components
- Test: T13

## R10 - Error and fallback states

- Evidence: form errors plus storage fallback in `storage.js`
- Tests: T04, T09, T12
