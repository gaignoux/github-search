import { Account } from "next-auth";

type clientCredentialsGrantType = {
  access_token: string;
  expires_in: number;
  id_token: string;
  "not-before-policy": number;
  refresh_expires_in: number;
  scope: string;
  token_type: string;
};

export type GithubAuthorize = {
  code: string;
};

export type jwtTokenType = Partial<clientCredentialsGrantType> & Account;
