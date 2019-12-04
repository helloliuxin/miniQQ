import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    key:"069e90c4262243bf964ad95014371384", // 图灵机器人秘钥
    isChat: false, // 判断用户是否正在跟当前好友聊天，如果为真当前好友发送的消息都应该直接变为已读
    headerTitle: '消息',
    titleContent: {
      msg: '消息',
      friends: '联系人',
      user: '动态'
    },
    data: {
      self: {},
      friends: []
    },
    isLoading: false,
    currentUser: {},
    // 消息列表
    messageList: [
      {
        _id: 1,
        list: [
          { msg: '你可以和我聊天', time: 1541051132303, read: false },
          { msg: '你今年几岁?123333333333333333333333333333333333333333312312313131231', time: 1541051432303, read: false },
          { msg: '我今天80大寿', time: 1541051832303, read: true, self: true }
        ]
      }, // 五天以前 展示 日期 10-12
      { _id: 2, list: [{ msg: '我会讲笑话', time: 1542002394524, read: true }] }, // 昨天
      { _id: 3, list: [{ msg: '在吗?', time: 1542072369522, read: false }] }, // 当前 展示时间          上午7:03
      { _id: 4, list: [{ msg: '吃了吗?', time: 1541900394524, read: false }] } // 五天以内 展示星期几      星期天
    ],
    //显示隐藏抽屉
    setDrawer: false,
    //显示详情页
    showDetail: false,

  },
  mutations,
  actions,
  getters,
  modules: {
  }
})
