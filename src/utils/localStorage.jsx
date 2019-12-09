/**
 * v2
 * 
 */

export const getState = () => {
  try {

    const data = localStorage.getItem('state')
    if (data === null) {
      return undefined; 
    }
    return JSON.parse(data);

  } catch (error) {
    
    return undefined;
  }
}

export const setState = (state) => {
  try {

    const data = JSON.stringify(state)
    localStorage.setItem('state', data)
  } catch (error) {
    // pending
  }
}


/*
* v1
* Save user on local Storage
*/

export const setUserLS = user => {

  localStorage.setItem('user', JSON.stringify(user));
};

export const getUserLS = () => {
	const user = localStorage.getItem('user');
  return JSON.parse(user)
};

export const clearLocalStorage = () => {
  localStorage.clear();
}

//Note: See configuring on sessionStorage or to make configurable

/*
* complementary functions
*/

export const isEmpty = (obj) => {
  // https://firstclassjs.com/check-if-object-is-empty-in-javascript/

  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }
  return true;
}