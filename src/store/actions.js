import * as types from './mutation-types'

export default {
  async getDataFromServer({ commit }, axios) {
    commit(types.SET_ISLOADING_STATUS, true) //发起网络请求,修改请求状态为true

    let self = await axios('api/self')
    self = self.data.data
    // console.log(self)
    commit(types.RECEIVE_SELF_DATA, self)
    let friends = await axios('/api/friends')
    friends = friends.data.data

    //请求完毕后,修改请求状态为false
    setTimeout(() => {
      commit(types.RECEIVE_FRIENDS_DATA, friends)
      commit(types.SET_ISLOADING_STATUS, false)
    }, 1000)
  },
  showDetail({ commit }, user) {
    commit(types.CHANGE_CURRENT_USER, user)
    commit(types.SHOW_DETAIL_VIEW)
  },
  async sendMsg({ state, commit }, { info, axios }) {
    let id = state.currentUser._id
    // 先添加一条自己发送的消息
    commit(types.ADD_NEW_MESSAGE, { msg: info, self: true, id, read: true })
    let data = await axios.post('/robot', {
      info,
      key: state.key,
      id
    })
    // 接收到对方发的消息
    let read = (id === state.currentUser._id && state.isChat) ? true : false
    commit(types.ADD_NEW_MESSAGE, { msg: data.data.text, id, read })
  }
}
