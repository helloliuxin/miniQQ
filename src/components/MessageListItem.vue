<template>
  <div class="msg-list-item" @click="startChat">
    <div class="msg-avatar">
      <img :src="user.avatar" class="auto-img" alt="头像" />
    </div>
    <div class="msg-content">
      <h3 class="msg-name">{{user.name}}</h3>
      <p class="msg">{{lstMsg.msg}}</p>
    </div>
    <div class="msg-time">
      <div class="time">{{lstMsg.time|timeDesc}}</div>
      <mt-badge size="small" color="rgb(240,20,20)" v-show="unread">{{unread}}</mt-badge>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import * as  types from '../store/mutation-types'
import {timeDesc} from '../assets/js/tool'

export default {
  name: "MessageListItem",
  props: ["msgs", "user"],
  computed: {
    lstMsg() {
      return this.msgs[this.msgs.length - 1];
    },
    unread() {
      let num = 0
      for (let i = 0; i < this.msgs.length; i++) {
        let msg = this.msgs[i]
        num = !msg.read ? num + 1 : num
      }
      return num
    }
  },
  filters: {
    timeDesc
  },
  methods: {
    ...mapMutations({changeUser: types.CHANGE_CURRENT_USER}),
    startChat() {
      this.changeUser(this.user)
      this.$router.push('/chat')
    }
  }
};
</script>

<style lang="scss" scoped>
.msg-list-item {
  position: relative;
  padding: 0.2rem 0;
  width: 100%;
  display: flex;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);

  .msg-avatar {
    flex: 0 0 1.4rem;
    margin-right: 0.3rem;
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50%;
    overflow: hidden;
  }

  .msg-content {
    flex: 1;
    padding: 0.2rem 0;

    .msg-name {
      margin-bottom: 0.1rem;
      font-size: 0.38rem;
      line-height: 0.5rem;
      font-weight: 600;
    }

    .msg {
      font-size: 0.2rem;
      line-height: 0.4rem;
      max-width: 7rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .msg-time {
    position: absolute;
    right: 0.2rem;
    top: 0.4rem;

    .time {
      font-size: 10px;
      color: rgb(77, 85, 93);
    }
  }
}
</style>