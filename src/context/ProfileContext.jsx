import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { loadProfile, saveProfile } from '../services/storage';

const ProfileContext = createContext(null);

const defaultProfile = {
  name: 'Your Name',
  bio: 'MMA301 student building a multiplatform mobile app.',
};

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(defaultProfile);
  const [isHydrating, setIsHydrating] = useState(true);

  useEffect(() => {
    let isActive = true;

    async function hydrateProfile() {
      const savedProfile = await loadProfile(defaultProfile);

      if (isActive) {
        setProfile(savedProfile);
        setIsHydrating(false);
      }
    }

    hydrateProfile();

    return () => {
      isActive = false;
    };
  }, []);

  const updateProfile = useCallback(async (nextProfile) => {
    const updatedProfile = { ...profile, ...nextProfile };
    setProfile(updatedProfile);

    try {
      await saveProfile(updatedProfile);
    } catch (error) {
      console.warn('Could not save the profile.', error);
    }
  }, [profile]);

  const value = useMemo(
    () => ({
      profile,
      isHydrating,
      updateProfile,
    }),
    [isHydrating, profile, updateProfile]
  );

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
}

export function useProfile() {
  const context = useContext(ProfileContext);

  if (!context) {
    throw new Error('useProfile must be used inside ProfileProvider.');
  }

  return context;
}
