// import qs from 'qs'
import api from './index'
// axios
import request from '@/utils/request'

// banner
export function getBanner(params) {
  return request({
    url: api.GetBanner,
    method: 'get',
    params
  })
}

export function getCategory(params) {
  return request({
    url: api.GetCategory,
    method: 'get',
    params
  })
}
