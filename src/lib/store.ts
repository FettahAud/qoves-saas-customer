import { sidebarTabId } from "@/components/layout/Sidebar";
import { create } from "zustand";

type Store = {
  sidebarState: boolean;
  toggleSidebar: () => void;
  sidebarTab: sidebarTabId;
  setSidebarTab: (tab: sidebarTabId) => void;
  modalState: boolean;
  selectedModal: string | null;
  toggleModal: (modal: string) => void;
  closeModal: () => void;
  loggedIn: boolean;
  login: () => void;
  logout: () => void;
  user: {
    fullName: string;
    email: string;
    password: string;
  };
  setUser: (user: {
    fullName: string;
    email: string;
    password: string;
  }) => void;
};

const store = create<Store>()((set) => ({
  sidebarState: true,
  toggleSidebar: () => set((state) => ({ sidebarState: !state.sidebarState })),
  sidebarTab: "overview",
  setSidebarTab: (tab: sidebarTabId) => set({ sidebarTab: tab }),
  modalState: false,
  selectedModal: null,
  toggleModal: (modal) =>
    set(() => ({ modalState: true, selectedModal: modal })),
  closeModal: () => set(() => ({ modalState: false, selectedModal: null })),
  loggedIn: true,
  login: () => set({ loggedIn: true }),
  logout: () => set({ loggedIn: false }),
  user: {
    fullName: "",
    email: "",
    password: "",
  },
  setUser: (user) => set({ user }),
}));

export default store;
