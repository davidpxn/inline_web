const rootUrl = process.env.API_URL || 'https://127.0.0.1:5000';


async function get(path, data) {
  return request('GET', path, data);
}


async function post(path, data) {
  return request('POST', path, data);
}


async function request(method, path, data) {
  const url = new URL(path, rootUrl);

  const options = {
    method,
    headers: {},
  };

  if (data) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(data);
  }

  const response = await fetch(url.href, options);
  const json = await response.json();

  const { status, ok } = response;

  return {
    data: json,
    ok,
    status,
  };
}


async function login(email, password) {
  let result;

  try {
    result = await post('/login', { email, password });
  } catch (e) {
    throw new Error('Error login');
  }

  return result;
}


async function logout() {
  let result;

  try {
    result = await get('/logout');
  } catch (e) {
    throw new Error('Error logout');
  }

  return result;
}


async function signup(data) {
  let result;

  try {
    result = await post('/signup', data);
  } catch (e) {
    throw new Error('Error signup');
  }

  return result;
}


export {
  login,
  logout,
  signup,
};
