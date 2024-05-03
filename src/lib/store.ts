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
    firstName: string;
    lastName: string;
    country: string;
    bDate: Date | undefined;
    identify: string | undefined;
    racialGroup: string;
    email: string;
    password: string | undefined;
  };
  setUser: (user: {
    firstName: string;
    lastName: string;
    country: string;
    bDate: Date | undefined;
    identify: string | undefined;
    racialGroup: string;
    email: string;
    password: string | undefined;
  }) => void;
};

const store = create<Store>()((set) => ({
  sidebarState: true,
  toggleSidebar: () => set((state) => ({ sidebarState: !state.sidebarState })),
  sidebarTab: "reports",
  setSidebarTab: (tab: sidebarTabId) => set({ sidebarTab: tab }),
  modalState: false,
  selectedModal: null,
  toggleModal: (modal) =>
    set(() => ({ modalState: true, selectedModal: modal })),
  closeModal: () => set(() => ({ modalState: false, selectedModal: null })),
  loggedIn: false,
  login: () => set({ loggedIn: true }),
  logout: () => set({ loggedIn: false }),
  user: {
    firstName: "",
    lastName: "",
    country: "",
    bDate: undefined,
    identify: undefined,
    racialGroup: "",
    email: "",
    password: undefined,
  },
  setUser: (user) => set({ user }),
}));

export default store;
