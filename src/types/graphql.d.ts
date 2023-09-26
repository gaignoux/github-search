export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};

export type SearchRepositoriesQueryVariables = Exact<{
  query: Scalars["String"];
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
}>;

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

export type SearchRepositoriesQuery = {
  __typename?: "Query";
  data: {
    search: {
      __typename?: "SearchResultItemConnection";
      userCount: number;
      repositoryCount: number;
      nodes?: Array<{
        __typename?: "Repository";
        name: string;
        nameWithOwner: string;
        description?: string | null;
        openGraphImageUrl: string;
        id: string;
        homepageUrl?: string;
        url: string;
        createdAt: string;
        updatedAt: string;
        stargazerCount: number;
      }> | null;
      pageInfo: {
        __typename?: "PageInfo";
        endCursor?: string | null;
        startCursor?: string | null;
        hasNextPage: boolean;
        hasPreviousPage: boolean;
      };
    };
  };
};

export type Repository = Node & {
  __typename?: "Repository";
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"];
  /** The description of the repository. */
  description?: Maybe<Scalars["String"]>;
  /** The repository's URL. */
  homepageUrl?: Maybe<Scalars["URI"]>;
  id: Scalars["ID"];
  /** The name of the repository. */
  name: Scalars["String"];
  /** The repository's name with owner. */
  nameWithOwner: Scalars["String"];
  /** The image used to represent this repository in Open Graph data. */
  openGraphImageUrl: Scalars["URI"];
  /** Returns a count of how many stargazers there are on this object */
  stargazerCount: Scalars["Int"];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"];
  /** The HTTP URL for this repository */
  url: Scalars["URI"];
};
