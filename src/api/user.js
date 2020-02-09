import request from '@/utils/request'

export function login(data) {
  console.log("data:",data)
  return request({
    //url: '/vue-element-admin/user/login',
    url: '/user_login/user-login/login',
    method: 'post',
    baseURL: 'http://192.168.0.101:8080',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
