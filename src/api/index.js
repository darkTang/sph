import request from './request'
import mockRequest from './mockRequest'
// 三级联动接口
export function reqCategoryList() {
  return request({
    url: '/product/getBaseCategoryList'
  })
}

// 获取banner（Home首页轮播图）
export function reqGetBannerList() {
  return mockRequest.get('/banner')
}

// 获取floor(Floor轮播图)
export function reqGetFloorList() {
  return mockRequest.get('/floor')
}