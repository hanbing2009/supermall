//封装所有首页的数据请求的函数

import http from './httpRequest'

export function getMultiData() {
  return http({
    url: "/home/multidata"
  })
}
