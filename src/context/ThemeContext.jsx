import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { loadTheme, saveTheme } from '../services/storage';

const ThemeContext = createContext(null);

const themes = {
  light: {
    mode: 'light',
    colors: {
      background: '#F8FAFC',
      surface: '#FFFFFF',
      text: '#0F172A',
      mutedText: '#475569',
      primary: '#2563EB',
      primaryText: '#FFFFFF',
      border: '#CBD5E1',
      avatarBackground: '#DBEAFE',
      avatarText: '#1D4ED8',
    },
  },
  dark: {
    mode: 'dark',
    colors: {
      background: '#0F172A',
      surface: '#1E293B',
      text: '#F8FAFC',
      mutedText: '#CBD5E1',
      primary: '#60A5FA',
      primaryText: '#0F172A',
      border: '#475569',
      avatarBackground: '#1E3A8A',
      avatarText: '#DBEAFE',
    },
  },
};

export function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState('light');
  const [isHydrating, setIsHydrating] = useState(true);

  useEffect(() => {
    let isActive = true;

    async function hydrateTheme() {
      const savedTheme = await loadTheme('light');

      if (isActive) {
        setThemeName(savedTheme);
        setIsHydrating(false);
      }
    }

    hydrateTheme();

    return () => {
      isActive = false;
    };
  }, []);

  const toggleTheme = useCallback(async () => {
    const nextThemeName = themeName === 'light' ? 'dark' : 'light';
    setThemeName(nextThemeName);

    try {
      await saveTheme(nextThemeName);
    } catch (error) {
      console.warn('Could not save the theme preference.', error);
    }
  }, [themeName]);

  const value = useMemo(
    () => ({
      theme: themes[themeName],
      themeName,
      isHydrating,
      toggleTheme,
    }),
    [isHydrating, themeName, toggleTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used inside ThemeProvider.');
  }

  return context;
}
