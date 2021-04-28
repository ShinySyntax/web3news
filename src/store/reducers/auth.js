import { LOGIN, LOGOUT, REGISTER } from "../actions/actionTypes";

const initalState = {
  user: {},
  token: "",
  isLoggedIn: false,
};

const authReducer = (state = initalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      const newLoginState = {
        ...state,
        ...payload,
        isLoggedIn: true,
      };
      saveToLocalStorage(newLoginState);
      return newLoginState;
    case REGISTER:
      const newRegisterState = {
        ...state,
        ...payload,
        isLoggedIn: true,
      };
      saveToLocalStorage(newRegisterState);
      return newRegisterState;
    case LOGOUT:
      clearLocalStorage();
      return initalState;
    default:
      return state;
  }
};

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("web3news-user", serializedState);
  } catch (e) {
    console.warn(e);
  }
};

// const loadFromLocalStorage = (state) => {
//   try {
//     const serializedState = localStorage.getItem("web3news-user");
//     if (serializedState === null) return undefined;
//     else return JSON.parse(serializedState);
//   } catch (e) {
//     console.warn(e);
//     return undefined;
//   }
// };

const clearLocalStorage = (state) => {
  localStorage.removeItem("web3news-user");
};

export default authReducer;
