/**
 * Represents a repository.
 */
export type TRepository = {
  /**
   * The ID of the repository.
   */
  id: string;
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The user or owner of the repository.
   */
  user: string;
  /**
   * The description of the repository.
   */
  description: string;
  /**
   * The URL of the repository.
   */
  url: string;
  /**
   * Optional homepage URL.
   */
  homepageUrl?: string;
  /**
   * Optional graph image URL.
   */
  graphImage?: string;
  /**
   * Whether the repository is marked as a favorite.
   */
  favorite?: boolean;
  /**
   * The number of stargazers for the repository.
   */
  stargazerCount?: number;
  /**
   * The rating of the repository.
   */
  rate?: number;
  /**
   * The creation date of the repository.
   */
  createdAt?: string;
  /**
   * The last update date of the repository.
   */
  updatedAt?: string;
};

/**
 * Represents a repository with optional rating capability.
 */
export type TRepositoryProps = TRepository & {
  /**
   * Whether rating is enabled for the repository.
   */
  enableRating?: boolean;
};
