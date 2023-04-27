const host = 'https://api.wisey.app';
const version = 'api/v1';

const TOKEN_URL
  = `${host}/${version}/auth/anonymous?platform=subscriptions`;

const BASE_URL
  = `${host}/${version}/core/preview-courses`;

const getToken = () => {
  return fetch(TOKEN_URL).then(response => response.json());
};

function request<T>(lessonId: string): Promise<T> {
  return getToken()
    .then((token) => fetch(
      !lessonId
        ? BASE_URL
        : `${BASE_URL}/${lessonId}`,
      {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token.token}`,
        },
      },
    ))
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    });
}

export const client = {
  get: <T>(lessonId: string) => request<T>(lessonId),
};
