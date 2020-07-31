import {
  getMerinfo
} from '@/api/home.js'
import {
  merInfo
} from '@/config'
const state = {
  merInfo,
  codeKey: '',
  equityCardId: '',
  userInfo: localStorage.getItem('userInfo') ? localStorage.getItem('userInfo') : ''
}
const mutations = {
  // GET_MER_INFO(state, info) {
  //   state.merInfo = info
  // },
  setCodeKey(state, codeKey) {
    state.codeKey = codeKey
  },
  setEquityCardId(state, cardId) {
    state.equityCardId = cardId
  },
  setUserInfo(state, userData) {
    state.userInfo = userData
    localStorage.setItem('userInfo', JSON.stringify(userData))
  }
}
const actions = {
  // getMerInfoFn({
  //   commit
  // }, params) {
  //   getMerinfo(params)
  //     .then((res) => {
  //       commit('GET_MER_INFO', res.data)
  //       localStorage.setItem('merInfo', JSON.stringify(res.data))
  //     })
  //     .catch(() => {})
  // }
}
export default {
  state,
  mutations,
  actions
}
