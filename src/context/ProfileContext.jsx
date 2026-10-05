import { createContext, useContext, useMemo, useState } from 'react';

const ProfileContext = createContext(null);

const defaultProfile = {
  name: 'Your Name',
  bio: 'MMA301 student building a multiplatform mobile app.',
};

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(defaultProfile);

  const value = useMemo(
    () => ({
      profile,
      updateProfile: (nextProfile) => {
        setProfile((currentProfile) => ({ ...currentProfile, ...nextProfile }));
      },
    }),
    [profile]
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
