import {MusicTab} from '../@types/music.type';
import Home from '../components/Music/Tabs/Home';
import Library from '../components/Music/Tabs/Library';
import Profile from '../components/Music/Tabs/Profile';
import Search from '../components/Music/Tabs/Search';

export const MUSIC_LIST = [
  {
    name: 'Hương Mùa Hè',
    genre: 'Pop',
    artist: 'Hoàng Dũng',
    thumbnail: 'https://example.com/thumbnails/huong-mua-he.jpg',
  },
  {
    name: 'Đi Về Nhà',
    genre: 'Ballad',
    artist: 'Đen Vâu, JustaTee',
    thumbnail: 'https://example.com/thumbnails/di-ve-nha.jpg',
  },
  {
    name: 'Ánh Nắng Của Anh',
    genre: 'Acoustic',
    artist: 'Đức Phúc',
    thumbnail: 'https://example.com/thumbnails/anh-nang-cua-anh.jpg',
  },
  {
    name: 'Thích Em Hơi Nhiều',
    genre: 'R&B',
    artist: 'Wren Evans',
    thumbnail: 'https://example.com/thumbnails/thich-em-hoi-nhieu.jpg',
  },
  {
    name: 'Bigcityboi',
    genre: 'Hip-hop',
    artist: 'Binz',
    thumbnail: 'https://example.com/thumbnails/bigcityboi.jpg',
  },
  {
    name: 'Lạ Lùng',
    genre: 'Indie',
    artist: 'Vũ',
    thumbnail: 'https://example.com/thumbnails/la-lung.jpg',
  },
  {
    name: 'Sóng Gió',
    genre: 'Pop',
    artist: 'Jack, K-ICM',
    thumbnail: 'https://example.com/thumbnails/song-gio.jpg',
  },
  {
    name: 'Nàng Thơ',
    genre: 'Ballad',
    artist: 'Hoàng Dũng',
    thumbnail: 'https://example.com/thumbnails/nang-tho.jpg',
  },
  {
    name: 'Hôm Nay Tôi Buồn',
    genre: 'Acoustic',
    artist: 'Phùng Khánh Linh',
    thumbnail: 'https://example.com/thumbnails/hom-nay-toi-buon.jpg',
  },
  {
    name: 'Chạy Ngay Đi',
    genre: 'Pop Rock',
    artist: 'Sơn Tùng M-TP',
    thumbnail: 'https://example.com/thumbnails/chay-ngay-di.jpg',
  },
];

export const MUSIC_TABS: {[x: string]: MusicTab} = {
  HOME: 'Home',
  SEARCH: 'Search',
  LIBRARY: 'Library',
  PROFILE: 'Profile',
};

export const TAB_LIST = [
  {
    icon: 'home-sharp',
    label: 'Home',
    key: MUSIC_TABS.HOME,
    component: Home,
  },
  {
    icon: 'list-sharp',
    label: 'Library',
    key: MUSIC_TABS.LIBRARY,
    component: Library,
  },
  {
    icon: 'search-sharp',
    label: 'Search',
    key: MUSIC_TABS.SEARCH,
    component: Search,
  },
  {
    icon: 'person-sharp',
    label: 'Profile',
    key: MUSIC_TABS.PROFILE,
    component: Profile,
  },
];
