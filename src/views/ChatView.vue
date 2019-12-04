<template>
  <div class="chat-view">
    <mt-header :title="currentUser.name">
      <div slot="left">
        <mt-button icon="back" @click="goBack"></mt-button>
      </div>
      <mt-button icon="more" slot="right" @click="showDetail(currentUser)"></mt-button>
    </mt-header>
    <div class="chat-wrapper">
      <ul>
        <li v-for="msg in msgList" class="msg-item" :class="{self:msg.self}" :key="msg.time">
          <img
            class="avatar"
            :src="msg.self ? self.avatar : currentUser.avatar"
            :alt="msg.self ? self.name : currentUser.name"
          />
          <p class="bubble">{{msg.msg}}</p>
        </li>
      </ul>
    </div>
    <div class="chat-footer">
      <input type="text" v-model.trim="str" class="chat-input" />
      <mt-button type="default" @click="send">发送</mt-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import * as types from "../store/mutation-types";

export default {
  name: "ChatView",
  data() {
    return { str: "" };
  },
  computed: {
    ...mapState({
      key: 'key',
      currentUser: "currentUser",
      self: state => state.data.self
    }),
    ...mapGetters(["getFriendMsgsFromId"]),
    msgList() {
      let id = this.currentUser._id;
      return this.getFriendMsgsFromId(id).list;
    }
  },
  methods: {
    ...mapActions(["showDetail", 'sendMsg']),
    ...mapMutations({
      resetUnread: types.RESET_UNREAD,
      setIsChat: types.SET_ISCHAT
    }),
    goBack() {
      this.$router.go(-1);
    },
    send() {
      if (!this.str) {
        return 
      }

      this.sendMsg({info: this.str, axios: this.axios})

      this.str = ''
    }
  },
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    next(vm => {
      vm.resetUnread(vm.currentUser._id);
      vm.setIsChat(true);
    });
  },

  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    this.setIsChat(false);
    next();
  }
};
</script>

<style lang="scss">
.chat-view {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  bottom: 0;
  background: #eee;
  z-index: 50;

  .mint-header {
    background-color: #fff;
    color: rgb(77, 85, 93);
  }

  .chat-wrapper {
    flex: 1;
    width: 100%;
    padding: 0.3rem;
    overflow: auto;

    .msg-item {
      display: flex;
      width: 100%;
      margin-bottom: 10px;

      &.self {
        flex-direction: row-reverse;

        .avatar {
          margin-right: 0;
          margin-left: 0.5rem;
        }

        .bubble {
          background: #2ed573;
        }
      }
    }

    .avatar {
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
      margin-right: 0.5rem;
      background: #fff;
    }

    .bubble {
      padding: 0.2rem;
      font-size: 0.4rem;
      line-height: 0.8rem;
      min-height: 1.2rem;
      background: white;
      max-width: 5.5rem;
      border-radius: 0.2rem;
      word-break: break-all;
    }
  }

  .chat-footer {
    display: flex;
    height: 50px;
    padding: 10px 0.25rem;
    background: #fff;
  }

  .chat-input {
    flex: 1;
    padding: 0 15px;
    margin-right: 0.24rem;
    border: 0;
    outline: 0;
    background: #eee;
    border-radius: 15px;
    font-size: 18px;
  }

  .mint-button {
    height: auto;
  }
}
</style>