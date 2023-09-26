export type TRepository = {
  id: string;
  name: string;
  user: string;
  description: string;
  url: string;
  homepage_url?: string;
  graphImage?: string;
  favorite?: boolean;
  stargazerCount?: number;
  rate?: number;
  created_at?: string;
  updated_at?: string;
};

export type TRepositoryProps = TRepository & {
  enableRating?: boolean;
};
