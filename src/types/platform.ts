export interface GetPlatforms {
  count: number;
  results: Platform[];
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
