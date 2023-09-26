export interface ISearchProps {
  query: string;
  after?: string | null;
  before?: string | null;
}

export interface PageInfo {
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  endCursor?: string;
  startCursor?: string;
  total?: number;
}
