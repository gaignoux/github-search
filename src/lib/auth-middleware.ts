import {
  CLIENT_ID,
  GRANT_ENDPOINT,
  CLIENT_SECRET,
  TOKEN_VALIDITY_IN_SECS,
  AUTHORIZE_ENDPOINT,
} from "@base/constants";
import { cacheManager } from "@base/lib/server-cache";
import { GithubAuthorize, jwtTokenType } from "@base/types/auth";
import { URLSearchParams } from "url";

export const getGuestAuthToken = async (): Promise<jwtTokenType> => {
  const accessToken = (await cacheManager.get(
    "guestAuthToken",
  )) as jwtTokenType;

  if (accessToken) return accessToken;

  const formValues = {
    client_id: CLIENT_ID,
    scope: "repo",
  };

  const searchParams = new URLSearchParams(formValues);

  const authorize = await fetch(`${AUTHORIZE_ENDPOINT}?${searchParams}`, {
    method: "GET",
    body: searchParams,
    next: { revalidate: 0 },
  });

  const data = (await authorize.json()) as GithubAuthorize;

  const grantBody = new URLSearchParams({
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code: data.code,
  }).toString();

  const grant = await fetch(GRANT_ENDPOINT, {
    method: "POST",
    body: JSON.stringify(grantBody),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const token = (await grant.json()) as jwtTokenType;

  await cacheManager.set(
    "guestAuthToken",
    token,
    (TOKEN_VALIDITY_IN_SECS - 10) * 1000,
  );

  return token;
};
