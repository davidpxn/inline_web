const rootUrl = process.env.REACT_APP_API_URL;


async function get(path, data) {
  return request('GET', path, data);
}


async function post(path, data) {
  return request('POST', path, data);
}


async function request(method, path, data) {
  const url = new URL(path, rootUrl);

  const options = {
    credentials: 'include',
    method,
    headers: {},
  };

  if (data) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(data);
  }
  
  const response = await fetch(url.href, options);
  const contentType = response.headers.get("content-type");
  let body;

  if (contentType && contentType.indexOf("application/json") !== -1) {
    body = await response.json();
  } else {
    body = await response.text();
  }

  const { status, ok } = response;

  return {
    data: body,
    ok,
    status,
  };
}


async function login(credentials) {
  let result;

  try {
    result = await post('/login', credentials);
  } catch (e) {
    console.error(e)
    throw new Error('Error login');
  }

  return result;
}


async function logout() {
  let result;

  try {
    result = await get('/logout');
  } catch (e) {
    console.error(e)
    throw new Error('Error logout');
  }

  return result;
}


async function signup(data) {
  let result;

  try {
    result = await post('/signup', data);
  } catch (e) {
    console.error(e)
    throw new Error('Error signup');
  }

  return result;
}


export {
  login,
  logout,
  signup,
};
