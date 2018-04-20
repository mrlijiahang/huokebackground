import fetch from '../fetch'
/* eslint-disable */
export function adminlogin(msg) {
  return fetch({
    url: 'admin/login',
    method: 'post',
    data: msg
  })
}
export function adminlogout(msg) {
  return fetch({
    url: 'admin/logout',
    method: 'post',
    data: msg
  })
}
export function getmessage(msg) {
  return fetch({
    url: 'category/category_list',
    method: 'post',
    data: msg
  })
}

export function changemessage(msg) {
  return fetch({
    url: 'category/update_category',
    method: 'post',
    data: msg
  })
}
export function getUserlistmsg(msg) {
  return fetch({
    url: 'user/user_list',
    method: 'post',
    data: msg
  })
}
