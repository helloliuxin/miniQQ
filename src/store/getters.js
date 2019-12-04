export default {
  friendsList(state) {
    return state.data.friends
  },

  getFriendFromId(state) {
    return (id) => state.data.friends.find(f => f._id === id)
  },

  getFriendMsgsFromId(state) {
    return (id) => state.messageList.find(f => f._id === id)
  }
}