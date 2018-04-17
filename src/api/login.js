import fetch from '../fetch'
/* eslint-disable */
export function adminlogin(msg) {
  return fetch({
    url: 'admin/login',
    method: 'post',
    data: msg
  })
}
