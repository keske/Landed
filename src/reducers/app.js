const initialState = {
  showPhoneMenu: false,
};

export function app(state = initialState, action) {
  switch (action.type) {
  case 'SHOW':
    return {
      ...state,
      showPhoneMenu: action.act,
    };

  default:
    return state;
  }
}
