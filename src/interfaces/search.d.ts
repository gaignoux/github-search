/**
 * Represents properties for a search operation.
 */
export interface ISearchProps {
  /**
   * The search query.
   */
  query: string;

  /**
   * Optional cursor for pagination (start).
   */
  after?: string | null;

  /**
   * Optional cursor for pagination (end).
   */
  before?: string | null;
}

/**
 * Represents pagination information.
 */
export interface PageInfo {
  /**
   * Indicates whether there is a next page.
   */
  hasNextPage?: boolean;

  /**
   * Indicates whether there is a previous page.
   */
  hasPreviousPage?: boolean;

  /**
   * The cursor for the end of the current page.
   */
  endCursor?: string;

  /**
   * The cursor for the start of the current page.
   */
  startCursor?: string;

  /**
   * The total number of items available.
   */
  total?: number;
}
