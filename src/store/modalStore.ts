import { create } from 'zustand';

interface ModalState {
  isOpen: boolean;
  content: {
    type: 'video' | 'thumbnail';
    url: string;
    title: string;
  } | null;
  openModal: (content: { type: 'video' | 'thumbnail'; url: string; title: string }) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  content: null,
  openModal: (content) => set({ isOpen: true, content }),
  closeModal: () => set({ isOpen: false, content: null }),
}));