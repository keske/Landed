const initialState = {
  showPhoneMenu: false,
  showLoginMenu: false,
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
      showLoginMenu: action.act,
    };

  default:
    return state;
  }
}
