const initialState = {
  showPhoneMenu: false,
  showQuizPopUp: false,
  loginMenu: false,
  popup: false,
};

export function app(state = initialState, action) {
  switch (action.type) {
    case 'SHOW':
      return {
        ...state,
        showPhoneMenu: action.act,
      };

    case 'SHOW_QUIZ':
      return {
        ...state,
        showQuizPopUp: action.act,
      };

    case 'SHOW_LOGIN':
      return {
        ...state,
        loginMenu: action.act,
      };

    case 'SHOW_POPUP':
      return {
        ...state,
        popup: action.act,
      };

    default:
      return state;
  }
}
