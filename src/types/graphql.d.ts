import { PageInfo, Scalars } from "@base/graphql";

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

export type DefaultConnection<T> = {
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<T>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<T>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

export type SearchRepositoriesQuery = {
  __typename?: "Query";
  search: {
    __typename?: "SearchResultItemConnection";
    userCount: number;
    repositoryCount: number;
    nodes?: Array<
      | { __typename?: "App" }
      | { __typename?: "Discussion" }
      | { __typename?: "Issue" }
      | { __typename?: "MarketplaceListing" }
      | { __typename?: "Organization" }
      | { __typename?: "PullRequest" }
      | {
          __typename?: "Repository";
          nameWithOwner: string;
          description?: string | null;
          forkCount: number;
          updatedAt: any;
          stargazerCount: number;
        }
      | { __typename?: "User" }
      | null
    > | null;
    pageInfo: {
      __typename?: "PageInfo";
      endCursor?: string | null;
      startCursor?: string | null;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    };
  };
};

/** The repository's visibility level. */
export enum RepositoryVisibility {
  /** The repository is visible only to users in the same business. */
  Internal = "INTERNAL",
  /** The repository is visible only to those with explicit access. */
  Private = "PRIVATE",
  /** The repository is visible to everyone. */
  Public = "PUBLIC",
}

/** State of the project; either 'open' or 'closed' */
export enum ProjectState {
  /** The project is closed. */
  Closed = "CLOSED",
  /** The project is open. */
  Open = "OPEN",
}

/** All built-in and custom scalars, mapped to their actual values */
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

/** A file in a package version. */
export type PackageFile = Node & {
  __typename?: "PackageFile";
  id: Scalars["ID"];
  /** MD5 hash of the file. */
  md5?: Maybe<Scalars["String"]>;
  /** Name of the file. */
  name: Scalars["String"];
  /** The package version this file belongs to. */
  packageVersion?: Maybe<PackageVersion>;
  /** SHA1 hash of the file. */
  sha1?: Maybe<Scalars["String"]>;
  /** SHA256 hash of the file. */
  sha256?: Maybe<Scalars["String"]>;
  /** Size of the file in bytes. */
  size?: Maybe<Scalars["Int"]>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"];
  /** URL to download the asset. */
  url?: Maybe<Scalars["URI"]>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: "PageInfo";
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["String"]>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["String"]>;
};

/** The connection type for PackageFile. */
export type PackageFileConnection = DefaultConnection<PackageFile> & {
  __typename?: "PackageFileConnection";
};

/** Represents a object that contains package version activity statistics such as downloads. */
export type PackageVersionStatistics = {
  __typename?: "PackageVersionStatistics";
  /** Number of times the package was downloaded since it was created. */
  downloadsTotalCount: Scalars["Int"];
};

/** Information about a specific package version. */
export type PackageVersion = Node & {
  __typename?: "PackageVersion";
  /** List of files associated with this package version */
  files: PackageFileConnection;
  id: Scalars["ID"];
  /** The package associated with this version. */
  package?: Maybe<Package>;
  /** The platform this version was built for. */
  platform?: Maybe<Scalars["String"]>;
  /** Whether or not this version is a pre-release. */
  preRelease: Scalars["Boolean"];
  /** The README of this package version. */
  readme?: Maybe<Scalars["String"]>;
  /** Statistics about package activity. */
  statistics?: Maybe<PackageVersionStatistics>;
  /** The package version summary. */
  summary?: Maybe<Scalars["String"]>;
  /** The version string. */
  version: Scalars["String"];
};

/** Represents a object that contains package activity statistics such as downloads. */
export type PackageStatistics = {
  __typename?: "PackageStatistics";
  /** Number of times the package was downloaded since it was created. */
  downloadsTotalCount: Scalars["Int"];
};

/** The connection type for PackageVersion. */
export type PackageVersionConnection = DefaultConnection<PackageVersion> & {
  __typename?: "PackageVersionConnection";
};

/** Information for an uploaded package. */
export type Package = Node & {
  __typename?: "Package";
  id: Scalars["ID"];
  /** Find the latest version for the package. */
  latestVersion?: Maybe<PackageVersion>;
  /** Identifies the name of the package. */
  name: Scalars["String"];
  /** The repository this package belongs to. */
  repository?: Maybe<Repository>;
  /** Statistics about package activity. */
  statistics?: Maybe<PackageStatistics>;
  /** Find package version by version string. */
  version?: Maybe<PackageVersion>;
  /** list of versions for this package */
  versions: PackageVersionConnection;
};

/** The connection type for Package. */
export type PackageConnection = DefaultConnection<Package> & {
  __typename?: "PackageConnection";
};

export type PackageOwner = {
  id: Scalars["ID"];
  /** A list of packages under the owner. */
  packages: PackageConnection;
};

/** Represents an object which can take actions on GitHub. Typically a User or Bot. */
export type Actor = {
  /** A URL pointing to the actor's public avatar. */
  avatarUrl: Scalars["URI"];
  /** The username of the actor. */
  login: Scalars["String"];
  /** The HTTP path for this actor. */
  resourcePath: Scalars["URI"];
  /** The HTTP URL for this actor. */
  url: Scalars["URI"];
};

/** An object that can be closed */
export type Closable = {
  /** Indicates if the object is closed (definition of closed may depend on type) */
  closed: Scalars["Boolean"];
  /** Identifies the date and time when the object was closed. */
  closedAt?: Maybe<Scalars["DateTime"]>;
  /** Indicates if the object can be closed by the viewer. */
  viewerCanClose: Scalars["Boolean"];
  /** Indicates if the object can be reopened by the viewer. */
  viewerCanReopen: Scalars["Boolean"];
};

/** Entities that can be updated. */
export type Updatable = {
  /** Check if the current viewer can update this object. */
  viewerCanUpdate: Scalars["Boolean"];
};

/** A card in a project. */
export type ProjectCard = Node & {
  __typename?: "ProjectCard";
  /**
   * The project column this card is associated under. A card may only belong to one
   * project column at a time. The column field will be null if the card is created
   * in a pending state and has yet to be associated with a column. Once cards are
   * associated with a column, they will not become pending in the future.
   */
  column?: Maybe<ProjectColumn>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"];
  /** The actor who created this card */
  creator?: Maybe<Actor>;
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  /** Whether the card is archived */
  isArchived: Scalars["Boolean"];
  /** The card note */
  note?: Maybe<Scalars["String"]>;
  /** The project that contains this card. */
  project: Project;
  /** The HTTP path for this card */
  resourcePath: Scalars["URI"];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"];
  /** The HTTP URL for this card */
  url: Scalars["URI"];
};

/** The connection type for ProjectCard. */
export type ProjectCardConnection = DefaultConnection<ProjectCard> & {
  __typename?: "ProjectCardConnection";
};

/** A column inside a project. */
export type ProjectColumn = Node & {
  __typename?: "ProjectColumn";
  /** List of cards in the column */
  cards: ProjectCardConnection;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"];
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  /** The project column's name. */
  name: Scalars["String"];
  /** The project that contains this column. */
  project: Project;
  /** The HTTP path for this project column */
  resourcePath: Scalars["URI"];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"];
  /** The HTTP URL for this project column */
  url: Scalars["URI"];
};

/** The connection type for ProjectColumn. */
export type ProjectColumnConnection = DefaultConnection<ProjectColumn> & {
  __typename?: "ProjectColumnConnection";
};

/** Projects manage issues, pull requests and notes within a project owner. */
export type Project = Closable &
  Node &
  Updatable & {
    __typename?: "Project";
    /** The project's description body. */
    body?: Maybe<Scalars["String"]>;
    /** The projects description body rendered to HTML. */
    bodyHTML: Scalars["HTML"];
    /** Indicates if the object is closed (definition of closed may depend on type) */
    closed: Scalars["Boolean"];
    /** Identifies the date and time when the object was closed. */
    closedAt?: Maybe<Scalars["DateTime"]>;
    /** List of columns in the project */
    columns: ProjectColumnConnection;
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["DateTime"];
    /** The actor who originally created the project. */
    creator?: Maybe<Actor>;
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>;
    id: Scalars["ID"];
    /** The project's name. */
    name: Scalars["String"];
    /** The project's number. */
    number: Scalars["Int"];
    /** The project's owner. Currently limited to repositories, organizations, and users. */
    owner: ProjectOwner;
    /** List of pending cards in this project */
    pendingCards: ProjectCardConnection;
    /** The HTTP path for this project */
    resourcePath: Scalars["URI"];
    /** Whether the project is open or closed. */
    state: ProjectState;
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["DateTime"];
    /** The HTTP URL for this project */
    url: Scalars["URI"];
    /** Indicates if the object can be closed by the viewer. */
    viewerCanClose: Scalars["Boolean"];
    /** Indicates if the object can be reopened by the viewer. */
    viewerCanReopen: Scalars["Boolean"];
    /** Check if the current viewer can update this object. */
    viewerCanUpdate: Scalars["Boolean"];
  };

/** A list of projects associated with the owner. */
export type ProjectConnection = DefaultConnection<ProjectEdge> & {
  __typename?: "ProjectConnection";
};

/** An edge in a connection. */
export type ProjectEdge = {
  __typename?: "ProjectEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<Project>;
};

/** Represents an owner of a Project. */
export type ProjectOwner = {
  id: Scalars["ID"];
  /** Find project by number. */
  project?: Maybe<Project>;
  /** A list of projects under the owner. */
  projects: ProjectConnection;
  /** The HTTP path listing owners projects */
  projectsResourcePath: Scalars["URI"];
  /** The HTTP URL listing owners projects */
  projectsUrl: Scalars["URI"];
  /** Can the current viewer create new projects on this owner. */
  viewerCanCreateProjects: Scalars["Boolean"];
};

/** The connection type for ProjectV2. */
export type ProjectV2Connection = DefaultConnection<any> & {
  __typename?: "ProjectV2Connection";
};

/** Recent projects for the owner. */
export type ProjectV2Recent = {
  /** Recent projects that this user has modified in the context of the owner. */
  recentProjects: ProjectV2Connection;
};

/** A list of repositories owned by the subject. */
export type RepositoryConnection = DefaultConnection<Repository> & {
  __typename?: "RepositoryConnection";
};

/** Represents an owner of a Repository. */
export type RepositoryOwner = {
  /** A URL pointing to the owner's public avatar. */
  avatarUrl: Scalars["URI"];
  id: Scalars["ID"];
  /** The username used to login. */
  login: Scalars["String"];
  /** A list of repositories that the user owns. */
  repositories: RepositoryConnection;
  /** Find Repository. */
  repository?: Maybe<Repository>;
  /** The HTTP URL for the owner. */
  resourcePath: Scalars["URI"];
  /** The HTTP URL for the owner. */
  url: Scalars["URI"];
};

/** Describes a License's conditions, permissions, and limitations */
export type LicenseRule = {
  __typename?: "LicenseRule";
  /** A description of the rule */
  description: Scalars["String"];
  /** The machine-readable rule key */
  key: Scalars["String"];
  /** The human-readable rule label */
  label: Scalars["String"];
};

/** A repository's open source license */
export type License = Node & {
  __typename?: "License";
  /** The full text of the license */
  body: Scalars["String"];
  /** The conditions set by the license */
  conditions: Array<Maybe<LicenseRule>>;
  /** A human-readable description of the license */
  description?: Maybe<Scalars["String"]>;
  /** Whether the license should be featured */
  featured: Scalars["Boolean"];
  /** Whether the license should be displayed in license pickers */
  hidden: Scalars["Boolean"];
  id: Scalars["ID"];
  /** Instructions on how to implement the license */
  implementation?: Maybe<Scalars["String"]>;
  /** The lowercased SPDX ID of the license */
  key: Scalars["String"];
  /** The limitations set by the license */
  limitations: Array<Maybe<LicenseRule>>;
  /** The license full name specified by <https://spdx.org/licenses> */
  name: Scalars["String"];
  /** Customary short name if applicable (e.g, GPLv3) */
  nickname?: Maybe<Scalars["String"]>;
  /** The permissions set by the license */
  permissions: Array<Maybe<LicenseRule>>;
  /** Whether the license is a pseudo-license placeholder (e.g., other, no-license) */
  pseudoLicense: Scalars["Boolean"];
  /** Short identifier specified by <https://spdx.org/licenses> */
  spdxId?: Maybe<Scalars["String"]>;
  /** URL to the license on <https://choosealicense.com> */
  url?: Maybe<Scalars["URI"]>;
};

/** A subset of repository info. */
export type RepositoryInfo = {
  /** Identifies the date and time when the repository was archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"];
  /** The description of the repository. */
  description?: Maybe<Scalars["String"]>;
  /** The description of the repository rendered to HTML. */
  descriptionHTML: Scalars["HTML"];
  /** Returns how many forks there are of this repository in the whole network. */
  forkCount: Scalars["Int"];
  /** Indicates if the repository has the Discussions feature enabled. */
  hasDiscussionsEnabled: Scalars["Boolean"];
  /** Indicates if the repository has issues feature enabled. */
  hasIssuesEnabled: Scalars["Boolean"];
  /** Indicates if the repository has the Projects feature enabled. */
  hasProjectsEnabled: Scalars["Boolean"];
  /** Indicates if the repository has wiki feature enabled. */
  hasWikiEnabled: Scalars["Boolean"];
  /** The repository's URL. */
  homepageUrl?: Maybe<Scalars["URI"]>;
  /** Indicates if the repository is unmaintained. */
  isArchived: Scalars["Boolean"];
  /** Identifies if the repository is a fork. */
  isFork: Scalars["Boolean"];
  /** Indicates if a repository is either owned by an organization, or is a private fork of an organization repository. */
  isInOrganization: Scalars["Boolean"];
  /** Indicates if the repository has been locked or not. */
  isLocked: Scalars["Boolean"];
  /** Identifies if the repository is a mirror. */
  isMirror: Scalars["Boolean"];
  /** Identifies if the repository is private or internal. */
  isPrivate: Scalars["Boolean"];
  /** Identifies if the repository is a template that can be used to generate new repositories. */
  isTemplate: Scalars["Boolean"];
  /** The license associated with the repository */
  licenseInfo?: Maybe<License>;
  /** The repository's original mirror URL. */
  mirrorUrl?: Maybe<Scalars["URI"]>;
  /** The name of the repository. */
  name: Scalars["String"];
  /** The repository's name with owner. */
  nameWithOwner: Scalars["String"];
  /** The image used to represent this repository in Open Graph data. */
  openGraphImageUrl: Scalars["URI"];
  /** The User owner of the repository. */
  owner: RepositoryOwner;
  /** Identifies the date and time when the repository was last pushed to. */
  pushedAt?: Maybe<Scalars["DateTime"]>;
  /** The HTTP path for this repository */
  resourcePath: Scalars["URI"];
  /** A description of the repository, rendered to HTML without any links in it. */
  shortDescriptionHTML: Scalars["HTML"];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"];
  /** The HTTP URL for this repository */
  url: Scalars["URI"];
  /** Whether this repository has a custom image to use with Open Graph as opposed to being represented by the owner's avatar. */
  usesCustomOpenGraphImage: Scalars["Boolean"];
  /** Indicates the repository's visibility level. */
  visibility: RepositoryVisibility;
};

/** Represents a user that's starred a repository. */
export type StargazerEdge = {
  __typename?: "StargazerEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  node: any;
  /** Identifies when the item was starred. */
  starredAt: Scalars["DateTime"];
};

/** The connection type for User. */
export type StargazerConnection = DefaultConnection<StargazerEdge> & {
  __typename?: "StargazerConnection";
};

/** Things that can be starred. */
export type Starrable = {
  id: Scalars["ID"];
  /** Returns a count of how many stargazers there are on this object */
  stargazerCount: Scalars["Int"];
  /** A list of users who have starred this starrable. */
  stargazers: StargazerConnection;
  /** Returns a boolean indicating whether the viewing user has starred this starrable. */
  viewerHasStarred: Scalars["Boolean"];
};

/** The connection type for User. */
export type RepositoryCollaboratorConnection = DefaultConnection<any> & {
  __typename?: "RepositoryCollaboratorConnection";
};

/** A label for categorizing Issues, Pull Requests, Milestones, or Discussions with a given Repository. */
export type Label = Node & {
  __typename?: "Label";
  /** Identifies the label color. */
  color: Scalars["String"];
  /** Identifies the date and time when the label was created. */
  createdAt?: Maybe<Scalars["DateTime"]>;
  /** A brief description of this label. */
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  /** Indicates whether or not this is a default label. */
  isDefault: Scalars["Boolean"];
  /** Identifies the label name. */
  name: Scalars["String"];
  /** The repository associated with this label. */
  repository: Repository;
  /** The HTTP path for this label. */
  resourcePath: Scalars["URI"];
  /** Identifies the date and time when the label was last updated. */
  updatedAt?: Maybe<Scalars["DateTime"]>;
  /** The HTTP URL for this label. */
  url: Scalars["URI"];
};

/** A list of languages associated with the parent. */
export type LanguageConnection = DefaultConnection<any> & {
  __typename?: "LanguageConnection";
  /** The total size in bytes of files written in that language. */
  totalSize: Scalars["Int"];
};

/** Represents a given language found in repositories. */
export type Language = Node & {
  __typename?: "Language";
  /** The color defined for the current language. */
  color?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  /** The name of the current language. */
  name: Scalars["String"];
};

export type UserConnection = DefaultConnection<any> & {
  __typename?: "UserConnection";
};

export type Repository = Node &
  PackageOwner &
  ProjectOwner &
  ProjectV2Recent &
  RepositoryInfo &
  Starrable & {
    __typename?: "Repository";
    /**
     * Whether or not a pull request head branch that is behind its base branch can
     * always be updated even if it is not required to be up to date before merging.
     */
    allowUpdateBranch: Scalars["Boolean"];
    /** Identifies the date and time when the repository was archived. */
    archivedAt?: Maybe<Scalars["DateTime"]>;
    /** Whether or not Auto-merge can be enabled on pull requests in this repository. */
    autoMergeAllowed: Scalars["Boolean"];
    /** A list of collaborators associated with the repository. */
    collaborators?: Maybe<RepositoryCollaboratorConnection>;
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["DateTime"];
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>;
    /** Whether or not branches are automatically deleted when merged in this repository. */
    deleteBranchOnMerge: Scalars["Boolean"];
    /** The description of the repository. */
    description?: Maybe<Scalars["String"]>;
    /** The description of the repository rendered to HTML. */
    descriptionHTML: Scalars["HTML"];
    /** The number of kilobytes this repository occupies on disk. */
    diskUsage?: Maybe<Scalars["Int"]>;
    /** Returns how many forks there are of this repository in the whole network. */
    forkCount: Scalars["Int"];
    /** Whether this repository allows forks. */
    forkingAllowed: Scalars["Boolean"];
    /** A list of direct forked repositories. */
    forks: RepositoryConnection;
    /** Indicates if the repository has the Discussions feature enabled. */
    hasDiscussionsEnabled: Scalars["Boolean"];
    /** Indicates if the repository has issues feature enabled. */
    hasIssuesEnabled: Scalars["Boolean"];
    /** Indicates if the repository has the Projects feature enabled. */
    hasProjectsEnabled: Scalars["Boolean"];
    /** Whether vulnerability alerts are enabled for the repository. */
    hasVulnerabilityAlertsEnabled: Scalars["Boolean"];
    /** Indicates if the repository has wiki feature enabled. */
    hasWikiEnabled: Scalars["Boolean"];
    /** The repository's URL. */
    homepageUrl?: Maybe<Scalars["URI"]>;
    id: Scalars["ID"];
    /** Indicates if the repository is unmaintained. */
    isArchived: Scalars["Boolean"];
    /** Returns true if blank issue creation is allowed */
    isBlankIssuesEnabled: Scalars["Boolean"];
    /** Returns whether or not this repository disabled. */
    isDisabled: Scalars["Boolean"];
    /** Returns whether or not this repository is empty. */
    isEmpty: Scalars["Boolean"];
    /** Identifies if the repository is a fork. */
    isFork: Scalars["Boolean"];
    /** Indicates if a repository is either owned by an organization, or is a private fork of an organization repository. */
    isInOrganization: Scalars["Boolean"];
    /** Indicates if the repository has been locked or not. */
    isLocked: Scalars["Boolean"];
    /** Identifies if the repository is a mirror. */
    isMirror: Scalars["Boolean"];
    /** Identifies if the repository is private or internal. */
    isPrivate: Scalars["Boolean"];
    /** Returns true if this repository has a security policy */
    isSecurityPolicyEnabled?: Maybe<Scalars["Boolean"]>;
    /** Identifies if the repository is a template that can be used to generate new repositories. */
    isTemplate: Scalars["Boolean"];
    /** Is this repository a user configuration repository? */
    isUserConfigurationRepository: Scalars["Boolean"];
    /** Returns a single label by name */
    label?: Maybe<Label>;
    /** A list containing a breakdown of the language composition of the repository. */
    languages?: Maybe<LanguageConnection>;
    /** The license associated with the repository */
    licenseInfo?: Maybe<License>;
    /** Whether or not PRs are merged with a merge commit on this repository. */
    mergeCommitAllowed: Scalars["Boolean"];
    /** The repository's original mirror URL. */
    mirrorUrl?: Maybe<Scalars["URI"]>;
    /** The name of the repository. */
    name: Scalars["String"];
    /** The repository's name with owner. */
    nameWithOwner: Scalars["String"];
    /** The image used to represent this repository in Open Graph data. */
    openGraphImageUrl: Scalars["URI"];
    /** The User owner of the repository. */
    owner: RepositoryOwner;
    /** A list of packages under the owner. */
    packages: PackageConnection;
    /** The repository parent, if this is a fork. */
    parent?: Maybe<Repository>;
    /** The primary language of the repository's code. */
    primaryLanguage?: Maybe<Language>;
    /** Find project by number. */
    project?: Maybe<Project>;
    /** A list of projects under the owner. */
    projects: ProjectConnection;
    /** The HTTP path listing the repository's projects */
    projectsResourcePath: Scalars["URI"];
    /** The HTTP URL listing the repository's projects */
    projectsUrl: Scalars["URI"];
    /** List of projects linked to this repository. */
    projectsV2: ProjectV2Connection;
    /** Identifies the date and time when the repository was last pushed to. */
    pushedAt?: Maybe<Scalars["DateTime"]>;
    /** Whether or not rebase-merging is enabled on this repository. */
    rebaseMergeAllowed: Scalars["Boolean"];
    /** Recent projects that this user has modified in the context of the owner. */
    recentProjects: ProjectV2Connection;
    /** The HTTP path for this repository */
    resourcePath: Scalars["URI"];
    /** The security policy URL. */
    securityPolicyUrl?: Maybe<Scalars["URI"]>;
    /** A description of the repository, rendered to HTML without any links in it. */
    shortDescriptionHTML: Scalars["HTML"];
    /** Whether or not squash-merging is enabled on this repository. */
    squashMergeAllowed: Scalars["Boolean"];
    /** The SSH URL to clone this repository */
    sshUrl: Scalars["GitSSHRemote"];
    /** Returns a count of how many stargazers there are on this object */
    stargazerCount: Scalars["Int"];
    /** A list of users who have starred this starrable. */
    stargazers: StargazerConnection;
    /** Temporary authentication token for cloning this repository. */
    tempCloneToken?: Maybe<Scalars["String"]>;
    /** The repository from which this repository was generated, if any. */
    templateRepository?: Maybe<Repository>;
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["DateTime"];
    /** The HTTP URL for this repository */
    url: Scalars["URI"];
    /** Whether this repository has a custom image to use with Open Graph as opposed to being represented by the owner's avatar. */
    usesCustomOpenGraphImage: Scalars["Boolean"];
    /** Indicates whether the viewer has admin permissions on this repository. */
    viewerCanAdminister: Scalars["Boolean"];
    /** Can the current viewer create new projects on this owner. */
    viewerCanCreateProjects: Scalars["Boolean"];
    /** Check if the viewer is able to change their subscription status for the repository. */
    viewerCanSubscribe: Scalars["Boolean"];
    /** Indicates whether the viewer can update the topics of this repository. */
    viewerCanUpdateTopics: Scalars["Boolean"];
    /** The last commit email for the viewer. */
    viewerDefaultCommitEmail?: Maybe<Scalars["String"]>;
    /** Returns a boolean indicating whether the viewing user has starred this starrable. */
    viewerHasStarred: Scalars["Boolean"];
    /** A list of emails this viewer can commit with. */
    viewerPossibleCommitEmails?: Maybe<Array<Scalars["String"]>>;
    /** Indicates the repository's visibility level. */
    visibility: RepositoryVisibility;
    /** A list of users watching the repository. */
    watchers: UserConnection;
    /** Whether contributors are required to sign off on web-based commits in this repository. */
    webCommitSignoffRequired: Scalars["Boolean"];
  };
