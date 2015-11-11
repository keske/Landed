export function show(act) {
  return {
    type: 'SHOW',
    act,
  };
}

export function showLoginMenu(act) {
  return {
    type: 'SHOW_LOGIN',
    act,
  };
}
