import { create } from 'zustand';

interface HeroThumbnail {
  image?: string;
  text: string;
}

interface HeroState {
  leftThumbnail: HeroThumbnail;
  rightThumbnail: HeroThumbnail;
  updateThumbnail: (side: 'left' | 'right', data: Partial<HeroThumbnail>) => void;
}

export const useHeroStore = create<HeroState>((set) => ({
  leftThumbnail: {
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=800&fit=crop',
    text: 'FOR: CLIENT',
  },
  rightThumbnail: {
    image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=1200&h=800&fit=crop',
    text: 'FOR: CLIENT',
  },
  updateThumbnail: (side, data) =>
    set((state) => ({
      [side === 'left' ? 'leftThumbnail' : 'rightThumbnail']: {
        ...state[side === 'left' ? 'leftThumbnail' : 'rightThumbnail'],
        ...data,
      },
    })),
}));