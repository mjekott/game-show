import { Genre } from "./genres";
import { Platform } from "./platform";

export interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  metacritic: number;
  ratings: Rating[];
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  suggestions_count: number;
  updated: string;
  user_game: null;
  reviews_count: number;
  platforms: PlatformElement[];
  parent_platforms: ParentPlatform[];
  genres: Genre[];
  clip: null;
  tags: Genre[];
  esrb_rating: Platform;
}

export interface ParentPlatform {
  platform: Platform;
}

export interface PlatformElement {
  platform: PlatformPlatform;
  released_at: Date | null;
  requirements_en: Requirements | null;
  requirements_ru: Requirements | null;
}

interface PlatformPlatform {
  id: number;
  name: string;
  slug: string;
  image: null;
  year_end: null;
  year_start: number | null;
  games_count: number;
  image_background: string;
}

export interface Requirements {
  minimum: string;
  recommended?: string;
}

export interface Rating {
  id: number;
  title: string;
  count: number;
  percent: number;
}

export interface GamesQuery {
  genre: Genre | null;
  platform: Platform | null;
}
