<template>
  <div class="message-view">
    <SearchBar />
    <div class="message-list-wrapper">
      <div>
          <MessageListItem v-for="m in messageList" :key="m._id" :msgs="m.list" :user="getFriendFromId(m._id)"/>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar";
import MessageListItem from "../components/MessageListItem";
import {mapState, mapGetters} from 'vuex'

export default {
  name: "Message",
  computed: {
      ...mapState(['messageList']),
      ...mapGetters(['getFriendFromId'])
  },
  components: {
    SearchBar,
    MessageListItem
  }
};
</script>

<style lang="scss" scoped>
.message-view {
  position: fixed;
  top: 40px;
  bottom: 55px;
  left: 0;
  right: 0;
  overflow: auto;
}

.message-list-wrapper {
  padding: 0.24rem;
}
</style>