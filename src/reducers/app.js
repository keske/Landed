const initialState = {
  showPhoneMenu: false,
  loginMenu: false,
};

export function app(state = initialState, action) {
  switch (action.type) {
  case 'SHOW':
    return {
      ...state,
      showPhoneMenu: action.act,
    };

  case 'SHOW_LOGIN':
    return {
      ...state,
      loginMenu: action.act,
    };

  default:
    return state;
  }
}
