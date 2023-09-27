/**
 * The GitHub API access token used for authentication.
 * If not provided in the environment variables, it defaults to an empty string.
 *
 * @constant {string}
 */
export const ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN || "";

/**
 * The base URL of the GitHub API.
 * If not provided in the environment variables, it defaults to an empty string.
 *
 * @constant {string}
 */
export const GITHUB_API = process.env.GITHUB_API || "";
