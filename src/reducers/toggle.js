const initialState = {
  status: 'landed',
};

export function toggle(state = initialState, action) {
  switch (action.type) {
  case 'SET':
    return {
      ...state,
      status: action.position,
    };

  default:
    return state;
  }
}
