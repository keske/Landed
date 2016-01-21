// isEmailValid
// isPhoneValid

/*
 * Validate email
 *
 * @param {String} Email
 * @return {Boolean}
 */
export function isEmailValid(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(email);
}

/*
 * Validate phone
 *
 * @param {String} Phone
 * @return {Boolean}
 */
export function isPhoneValid(phone) {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

  return re.test(phone);
}