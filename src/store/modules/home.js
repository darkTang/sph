import { reqCategoryList, reqGetBannerList, reqGetFloorList } from '@/api'
const state = {
  categoryList: [],
  bannerList: [],
  floorList: []
}
const mutations = {
  GETCATEGORYLIST(state, result) {
    state.categoryList = result
  },
  GETBANNERLIST(state, result) {
    state.bannerList = result
  },
  GETFLOORLIST(state, result) {
    state.floorList = result
  }
}
const actions = {
  async getCategoryList(context) {
    const result = await reqCategoryList()
    context.commit('GETCATEGORYLIST', result)
  },
  async getBannerList(context) {
    const result = await reqGetBannerList()
    context.commit('GETBANNERLIST', result)
  },
  async getFloorList(context) {
    const result = await reqGetFloorList()
    context.commit('GETFLOORLIST', result)
  }
}
const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}