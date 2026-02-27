
export interface Pet {
  id: string;
  name: string;
  breed: string;
  age: string;
  imageUrl: string;
  description: string;
  shelter: string;
}

export type TabType = 'discover' | 'add' | 'shelters' | 'profile' | 'my-posts' | 'settings';

export interface Shelter {
  id: string;
  name: string;
  address: string;
  distance: string;
}

export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  location: string;
  bio: string;
}

export interface Stats {
  savedPets: number;
  publications: number;
}
