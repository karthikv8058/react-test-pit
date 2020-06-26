/* eslint-disable */
export const ADD_USER = 'ADD_USER'; // action types

export function addUser(params) {
   console.log('addUser Action',params);
  return
     {     
        type:ADD_USER,
        params
     }
}
