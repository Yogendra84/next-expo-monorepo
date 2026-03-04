import { create } from "zustand";
import { User } from "@repo/types";

interface IUserStore {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: (user: null) => void;
}

export const useAuthStore = create<IUserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: (user) => set({ user }),
}));
