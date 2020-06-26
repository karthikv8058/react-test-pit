import { ADD_USER } from "../actions/actions";

const initialState = { 
    user: 'hello user',
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
       case ADD_USER: {
         return {
           ...state,
           user:'new user',
         };
         break;
       }
       
    }

    return state;
    
}

export default userReducer;