import { auth, Provider } from './firebase'

export const initialState = {
  userDetail: []
}

export default function reducer(state, action) {
  console.log(action)
  switch (action.type) {
    case "SET_USER":
      return {
        userDetail: action.user
      }  

    default:
      auth.signOut();
      return state;

  }
}