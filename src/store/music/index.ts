import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import {MusicTab} from '../../@types/music.type';
import {MUSIC_TABS} from '../../constants/music';

interface BearState {
  tab: MusicTab;
  changeTab: (value: MusicTab) => void;
}

export const useMusicStore = create<BearState>()(
  devtools(set => ({
    tab: MUSIC_TABS.HOME,
    changeTab: (value: MusicTab) => set({tab: value}),
  })),
);
