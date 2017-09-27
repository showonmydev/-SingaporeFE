import { stringify } from 'qs';
import { curry } from 'lodash';

function accessTokenQuery() {
  const accessToken = memoryDB.CLEANPOWERPRO__access_token;
  if (accessToken) {
    return { access_token: accessToken };
  }
  return {};
}

function queryWithAuth(query, auth = true) {
  return auth ?
    stringify({ ...query, ...accessTokenQuery() }) :
    stringify(query);
}

export function makeApiUrl(endpoint, query, auth = true) {
  const queryString = queryWithAuth(query, auth);
  return `${endpoint}${queryString ? '?' : ''}${queryString}`;
}

function checkStatus(response) {
  if (response.status < 400) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function processError({ endpoint, query, auth, url, method }) {
  const metadata = {
    endpoint,
    query,
    auth,
    url,
    method,
  };

  const name = `API Error: ${method} ${endpoint}`;
  const severity = 'error';

  return (error) => {
    const message = error.message || `${error.response.status} error calling ${endpoint}`;
    return ({ error });
  };
}

function processResponse(response) {
  return response
    .json()
    .then(body => ({
      response: {
        headers: response.headers,
        body,
        status: response.status,
      },
    }));
}

export function get(endpoint, query, { auth = true } = {}) {
  const url = makeApiUrl(endpoint, query, auth);
  return fetch(url)
    .then(checkStatus)
    .then(processResponse)
    .catch(processError({ endpoint, query, auth, url, method: 'GET' }));
}

function postOrPatch(method, endpoint, { query, auth = true, requestBody = {} } = {}) {
  const url = makeApiUrl(endpoint, query, auth);
  return fetch(url, {
    method,
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json; version=1',
    },
    body: JSON.stringify(requestBody),
  })
    .then(checkStatus)
    .then(processResponse)
    .catch(processError({ endpoint, query, auth, url, method }));
}

export const post = curry(postOrPatch)('POST');
export const patch = curry(postOrPatch)('PATCH');
