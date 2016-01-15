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

export function showQuiz(act) {
  return {
    type: 'SHOW_QUIZ',
    act,
  };
}

export function showPopup(act) {
  return {
    type: 'SHOW_POPUP',
    act,
  };
}
