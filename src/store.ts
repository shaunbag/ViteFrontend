import { create } from "zustand";

type UserStore = {
    username: string;
    jwt: string;
    setUsername: (username: string) => void;
    setJwt: (jwt: string) => void;
}

export const useUserStore = create<UserStore>((set) => ({
    username: "",
    jwt: "",
    setUsername: (username: string) => set({ username }),
    setJwt: (jwt: string) => set({ jwt })
}));