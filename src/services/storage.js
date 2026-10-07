import AsyncStorage from '@react-native-async-storage/async-storage';

const PROFILE_KEY = '@mma301/profile';
const THEME_KEY = '@mma301/theme';

function isValidProfile(value) {
  return (
    value &&
    typeof value === 'object' &&
    typeof value.name === 'string' &&
    typeof value.bio === 'string'
  );
}

async function readJson(key) {
  const storedValue = await AsyncStorage.getItem(key);

  if (storedValue === null) {
    return null;
  }

  return JSON.parse(storedValue);
}

export async function loadProfile(fallbackProfile) {
  try {
    const storedProfile = await readJson(PROFILE_KEY);

    return isValidProfile(storedProfile) ? storedProfile : fallbackProfile;
  } catch (error) {
    console.warn('Could not read the saved profile. Using default profile instead.', error);
    return fallbackProfile;
  }
}

export async function saveProfile(profile) {
  await AsyncStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
}

export async function loadTheme(fallbackTheme) {
  try {
    const storedTheme = await readJson(THEME_KEY);

    return storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : fallbackTheme;
  } catch (error) {
    console.warn('Could not read the saved theme. Using light theme instead.', error);
    return fallbackTheme;
  }
}

export async function saveTheme(themeName) {
  await AsyncStorage.setItem(THEME_KEY, JSON.stringify(themeName));
}
