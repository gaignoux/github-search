export type TRepository = {
  name: string;
  user: string;
  description: string;
  favorite?: boolean;
  rate?: number;
};

export type TRepositoryProps = TRepository & {
  enableRating?: boolean;
};

export type TRepositoriesProps = {
  items: TRepository[];
};
