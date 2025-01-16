import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set) => ({
      accessToken: null,
      isAuth: false,
      setAccessToken: (token) => {
        set({ 
          accessToken: token,
          isAuth: !!token,
        });
      },
      logout: () => {
        set({ accessToken: null, isAuth: false });
      },
    }),
    {
      name: 'auth-storage',
      getStorage: () => localStorage,
    }
  )
);

export default useAuthStore;
