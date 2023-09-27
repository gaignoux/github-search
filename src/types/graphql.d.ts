/**
 * Represents a generic type that may have a value or be null.
 * @template T - The type that may have a value or be null.
 */
export type Maybe<T> = T | null;

/**
 * Represents a generic type that may have a value or be null.
 * @template T - The type that may have a value or be null.
 */
export type InputMaybe<T> = Maybe<T>;

/**
 * Represents an exact type that matches the keys of an object.
 * @template T - The type to match exactly.
 */
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};

/**
 * Represents the variables for a searchRepositoriesQuery.
 */
export type SearchRepositoriesQueryVariables = Exact<{
  /**
   * The search query.
   */
  query: Scalars["String"];
  /**
   * Optional cursor for pagination (start).
   */
  after?: InputMaybe<Scalars["String"]>;
  /**
   * Optional cursor for pagination (end).
   */
  before?: InputMaybe<Scalars["String"]>;
  /**
   * Optional limit for the number of results to fetch (from the start).
   */
  first?: InputMaybe<Scalars["Int"]>;
  /**
   * Optional limit for the number of results to fetch (from the end).
   */
  last?: InputMaybe<Scalars["Int"]>;
}>;

/**
 * Represents scalar types used in GraphQL queries.
 */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A (potentially binary) string encoded using base64. */
  Base64String: any;
  /**
   * Represents non-fractional signed whole numeric values. Since the value may
   * exceed the size of a 32-bit integer, it's encoded as a string.
   */
  BigInt: any;
  /** An ISO-8601 encoded date string. */
  Date: any;
  /** An ISO-8601 encoded UTC date string. */
  DateTime: any;
  /** A Git object ID. */
  GitObjectID: any;
  /** A fully qualified reference name (e.g. `refs/heads/master`). */
  GitRefname: any;
  /** Git SSH string */
  GitSSHRemote: any;
  /** An ISO-8601 encoded date string. Unlike the DateTime type, GitTimestamp is not converted in UTC. */
  GitTimestamp: any;
  /** A string containing HTML code. */
  HTML: any;
  /** An ISO-8601 encoded UTC date string with millisecond precision. */
  PreciseDateTime: any;
  /** An RFC 3986, RFC 3987, and RFC 6570 (level 4) compliant URI string. */
  URI: any;
  /** A valid x509 certificate string */
  X509Certificate: any;
};

/**
 * The data returned by the search query.
 */
export type SearchRepositoryData = {
  /**
   * The search result containing user and repository information.
   */
  search: {
    /**
     * The GraphQL type name.
     */
    __typename?: "SearchResultItemConnection";
    /**
     * The number of users in the search result.
     */
    userCount: number;
    /**
     * The number of repositories in the search result.
     */
    repositoryCount: number;
    /**
     * An array of repository nodes in the search result.
     */
    nodes?: Array<{
      /**
       * The GraphQL type name.
       */
      __typename?: "Repository";
      /**
       * The name of the repository.
       */
      name: string;
      /**
       * The name of the repository with the owner.
       */
      nameWithOwner: string;
      /**
       * The description of the repository.
       */
      description?: string | null;
      /**
       * The URL of the repository.
       */
      url: string;
      /**
       * The creation date and time of the repository.
       */
      createdAt: string;
      /**
       * The last update date and time of the repository.
       */
      updatedAt: string;
      /**
       * The count of stargazers for the repository.
       */
      stargazerCount: number;
      /**
       * The URL of the repository's open graph image.
       */
      openGraphImageUrl: string;
      /**
       * The homepage URL of the repository.
       */
      homepageUrl?: string;
      /**
       * The unique identifier of the repository.
       */
      id: string;
    }> | null;
    /**
     * Pagination information for the search result.
     */
    pageInfo: {
      /**
       * The GraphQL type name.
       */
      __typename?: "PageInfo";
      /**
       * The cursor for the end of the current page.
       */
      endCursor?: string | null;
      /**
       * The cursor for the start of the current page.
       */
      startCursor?: string | null;
      /**
       * Indicates whether there is a next page of results.
       */
      hasNextPage: boolean;
      /**
       * Indicates whether there is a previous page of results.
       */
      hasPreviousPage: boolean;
    };
  };
};

/**
 * Represents a GraphQL query for searching repositories.
 */
export type SearchRepositoriesQuery = {
  /**
   * The GraphQL type name.
   */
  __typename?: "Query";
  /**
   * The data returned by the search query.
   */
  data: SearchRepositoryData;
};

/**
 * Represents a GraphQL object type for a repository.
 */
export type Repository = Node & {
  /**
   * The GraphQL type name.
   */
  __typename?: "Repository";
  /**
   * Identifies the date and time when the repository was created.
   */
  createdAt: Scalars["DateTime"];
  /**
   * The description of the repository.
   */
  description?: Maybe<Scalars["String"]>;
  /**
   * The homepage URL of the repository.
   */
  homepageUrl?: Maybe<Scalars["URI"]>;
  /**
   * The unique identifier of the repository.
   */
  id: Scalars["ID"];
  /**
   * The name of the repository.
   */
  name: Scalars["String"];
  /**
   * The name of the repository with the owner.
   */
  nameWithOwner: Scalars["String"];
  /**
   * The URL of the repository's open graph image.
   */
  openGraphImageUrl: Scalars["URI"];
  /**
   * The count of stargazers for the repository.
   */
  stargazerCount: Scalars["Int"];
  /**
   * Identifies the date and time when the repository was last updated.
   */
  updatedAt: Scalars["DateTime"];
  /**
   * The HTTP URL for this repository.
   */
  url: Scalars["URI"];
};
