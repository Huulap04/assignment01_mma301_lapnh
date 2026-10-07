# Debug Log

## D01 - Expo Router `Link asChild` rejected an array style

- Symptom: Home crashed with an error saying an array of styles was passed to a child of `Slot`.
- Hypothesis: `Link asChild` clones its child and requires a flattened style object.
- Check: The error pointed to `Link` children in Home/Profile. Their `Pressable` styles were arrays.
- Root cause: An array style passed through `Link asChild`.
- Fix: Applied `StyleSheet.flatten()` in `index.jsx` and `profile.jsx`.
- Retest: Android bundle passed; verify Home/Profile links on device.

## D02 - Expo Router warned that linking scheme was missing

- Symptom: Metro warned that Linking requires a build-time `scheme`.
- Hypothesis: Expo Router uses linking, but `app.json` had no scheme.
- Check: Reviewed `app.json`; no `scheme` property existed.
- Root cause: Missing deep-link scheme.
- Fix: Added `"scheme": "mma301lanh"` to `app.json`.
- Retest: Restart Metro using `npx expo start --clear` and verify the warning is absent.
