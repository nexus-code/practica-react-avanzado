/**
 * v2
 * 
 */

// export const getState = () => {
//   try {

//     const data = localStorage.getItem('state')
//     if (data === null) {
//       return undefined; 
//     }
//     return JSON.parse(data);

//   } catch (error) {
    
//     return undefined;
//   }
// }

// export const setState = (state) => {
//   try {

//     const data = JSON.stringify(state)
//     localStorage.setItem('state', data)
//   } catch (error) {
//     // pending
//   }
// }


/*
* v1
* Save user on local Storage
*/

export const setUserLS = user => {

  localStorage.setItem('user', JSON.stringify(user));
};

export const getUserLS = () => {
  const user = localStorage.getItem('user');
  // console.log('user', user);

  return !user ? undefined : JSON.parse(user);
};

export const setAdsLS = ads => {

  localStorage.setItem('ads', JSON.stringify(ads));
  // localStorage.setItem('ads', ads);
};

export const getAdsLS = () => {
  const ads = localStorage.getItem('ads');

  // return !ads ? undefined : JSON.parse(ads);
  return !ads ? [] : JSON.parse(ads);
};


export const clearLocalStorage = () => {
  localStorage.clear();
}



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