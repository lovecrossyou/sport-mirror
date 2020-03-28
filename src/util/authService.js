import storage from '@/util/localStorage';

const jwtDecode = require('jwt-decode');
export const refreshToken = resp => {
  let token = resp.headers.authorization;
  if (token != null) {
    let decodeToken = getDecodeToken(token);
    console.log('decodeToken ', JSON.stringify(decodeToken));
    storage.storeData('currentUserName', decodeToken.fn);
    storage.storeData('token', token);
    storage.storeData('signedOut', 'false');
    storage.storeData('et', resp.headers.et);
  }
};
export const getDecodeToken = token => {
  if (token) {
    token = token.replace('Bearer ', '');
    var decoded = jwtDecode(token);
    return decoded;
  }
  return token;
};

export const cleanup = () => {
  storage.storeData('currentUserName', '');
  storage.storeData('token', '');
  storage.storeData('signedOut', 'true');
  storage.storeData('et', '');
};

export const checkLoginWithAuth = async who => {
  // return true;
  const checkOwnerET = storage.getData('et') === 'h0*6wr';
  const checkEmployeeET = storage.getData('et') === 'W16j$P';

  const currentUserName = await storage.getData('currentUserName');
  const token = await storage.getData('token');
  if (currentUserName && token) {
    if (who === 'owner' && checkOwnerET) {
      return true;
    } else if (who === 'employee' && checkEmployeeET) {
      return true;
    }
    return false;
  } else {
    return false;
  }
};

export const getHeader = () => {
  const token = storage.getData('token');
  return {
    'Content-Type': 'application/json',
    authorization: token,
  };
};
