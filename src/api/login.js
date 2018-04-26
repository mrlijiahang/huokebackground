import fetch from '../fetch'
// import { methods } from 'http'
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

export function calllist(msg) {
  return fetch({
    url: 'order/relation_list',
    method: 'post',
    data: msg
  })
}
export function orderlist(msg) {
  return fetch({
    url: 'order/order_list',
    method: 'post',
    data: msg
  })
}
export function addRelation(msg) {
  return fetch({
    url: 'order/add_relation',
    method: 'post',
    data: msg
  })
}
export function getRelation(msg) {
  return fetch({
    url: 'order/relation_list',
    method: 'post',
    data: msg
  })
}
// 转换时间
export function transformDateWithTime(date) {
  if (!date) {
    return ''
  }
  if (date.length === 10) {
    date = date + '000'
  }
  date = parseInt(date)
  if (date === 0) {
    return ''
  } else {
    let time = new Date(date)
    let year = time.getFullYear()
    let originMonth = time.getMonth() + 1
    let month = originMonth < 10 ? '0' + originMonth : originMonth
    let day = time.getDate() < 10 ? '0' + time.getDate() : time.getDate()
    let hour = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    let second =
      time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds()
    let newTime = year + '-' + month + '-' + day + '  ' + hour + ':' + second
    return newTime
  }
}
