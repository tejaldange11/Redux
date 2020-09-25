const defaultState = {
    isLoggedIn: false,
    username: '',
    password: ''
};



export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'LOGIN': 
            return {
                    ...state,
                    isLoggedIn: true,
                    username: action.username,
                    password: action.password
          };
        case 'LOGOUT':
            return {
                    ...state,
                    isLoggedIn: false,
                    username: action.username,
                    password: action.password
      };
        default:
            return state;
    }
}
 
// export default function reducer(state = defaultState, action) {
//     switch (action.type) {
//         case 'LOGIN': 
        
//             // return Object.assign({}, state, { 
//             //     isLoggedIn: true,
//             //     username: action.username,
//             //     password: action.password
//             // });
//         case 'LOGOUT':
//             return Object.assign({}, state, { 
//                 isLoggedIn: false,
//                 username: '',
//                 password: ''
//             });
//         default:
//             return state;
//     }
// }

