export type TRepository = {
  name: string;
  user: string;
  description: string;
};

export type TRepositoriesProps = {
  items: TRepository[];
  search: string;
};
