import * as types from './mutation-types'

export default {
  [types.CHANGE_NAV_TITLE](state, name) {
    state.headerTitle = state.titleContent[name]
  },
  [types.RECEIVE_SELF_DATA](state, self) {
    state.data.self = self
  },
  [types.RECEIVE_FRIENDS_DATA](state, friends) {
    state.data.friends = friends
  },
  [types.SHOW_SETDRAWER](state) {
    state.setDrawer = true
  },
  [types.HIDDEN_SETDRAWER](state) {
    state.setDrawer = false
  },
  [types.SHOW_DETAIL_VIEW](state) {
    state.showDetail = true
  },
  [types.HIDDEN_DETAIL_VIEW](state) {
    state.showDetail = false
  },
  [types.CHANGE_CURRENT_USER](state, user) {
    state.currentUser = user
  },
  [types.SET_ISLOADING_STATUS](state, status) {
    state.isLoading = status
  },
  [types.RESET_UNREAD](state, id) {
    let msgs = state.messageList.find(item => item._id === id)
    msgs.list.forEach(m => m.read = true)
    console.log(msgs)
  },
  [types.ADD_NEW_MESSAGE](state, { msg, id, self, read }) {
    let msgs = { msg, time: new Date().getTime(), read, self }
    let msgObj = state.messageList.find(item => item._id === id)
    msgObj.list.push(msgs)
  },
  [types.SET_ISCHAT](state, val) {
    state.isChat = val
  }

}