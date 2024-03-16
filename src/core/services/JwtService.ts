const ID_TOKEN_KEY = "id_token" as string;
const JWT_TOKEN_KEY = "jwt_token" as string;

/**
 * @description get token form localStorage
 */
export const getToken = (): string | null => {
  const idToken = window.localStorage.getItem(ID_TOKEN_KEY);
  const jwtToken = window.localStorage.getItem(JWT_TOKEN_KEY);

  return idToken || jwtToken;
};

/**
 * @description save token into localStorage
 * @param token: string
 */
export const saveToken = (token: string, jwt: string): void => {
  window.localStorage.setItem(ID_TOKEN_KEY, token);
  window.localStorage.setItem(ID_TOKEN_KEY, jwt);
};

/**
 * @description remove token form localStorage
 */
export const destroyToken = (): void => {
  window.localStorage.removeItem(ID_TOKEN_KEY);
  window.localStorage.removeItem(ID_TOKEN_KEY);
};

export default { getToken, saveToken, destroyToken };
