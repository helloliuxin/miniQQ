<template>
  <div class="detail-view" v-show="showDetail">
    <mt-header fixed>
      <div @click="closeDetail" slot="left">
        <mt-button icon="back"></mt-button>
      </div>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="bg-header">
      <img class="auto-img" src="../assets/img/bg.jpg" alt="背景图片" />
    </div>
    <div class="detail-body">
      <div class="detail-content">
        <div class="content-header">
          <img class="detail-avatar" :src="currentUser.avatar" alt="用户头像" />
          <h3 class="detail-name">{{currentUser.name}}</h3>
          <p class="detail-explain">{{currentUser.explain}}</p>
        </div>
        <mt-cell :title="currentUser.birthday" icon="more" is-link></mt-cell>
        <mt-cell :title="currentUser.phone" icon="more" is-link></mt-cell>
        <mt-cell :title="currentUser.email" icon="more" is-link></mt-cell>
        <mt-cell :title="currentUser.address" icon="more" is-link></mt-cell>
      </div>
      <div class="detail-tabs">
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">主页</mt-tab-item>
          <mt-tab-item id="2">关注</mt-tab-item>
          <mt-tab-item id="3">喜欢</mt-tab-item>
        </mt-navbar>
      </div>
      <!-- tab-container -->
      <div class="detail-container">
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
            <p class="text">{{currentUser.about}}</p>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">{{currentUser.explain}}</mt-tab-container-item>
          <mt-tab-container-item id="3">123</mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
    <div class="detail-footer">
      <mt-button type="default">个性名片</mt-button>
      <mt-button type="primary" @click="startChat">{{currentUser._id ? '开始聊天':'编辑资料'}}</mt-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import * as types from "../store/mutation-types";

export default {
  name: "DetailView",
  data() {
    return {
      selected: "1"
    };
  },
  computed: {
    ...mapState(["currentUser", "showDetail"])
  },
  methods: {
    ...mapMutations({
      closeDetail: types.HIDDEN_DETAIL_VIEW
    }),
    startChat() {
      if (this.currentUser._id) {
        // _id === 0时是用户自己
        this.closeDetail();
        console.log(this.$route.name);
        if (this.$route.name === "chat") {
          return;
        }
        this.$router.push("/chat");
      }
    }
  }
};
</script>

<style lang="scss">
.detail-view {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  z-index: 99;

  .mint-header {
    background-color: transparent;
    color: rgb(77, 85, 93);
  }

  .bg-header {
    height: 22.4vh;
    overflow: hidden;
  }

  .detail-body {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 92vh;
    padding-top: 22.4vh;
    overflow: auto;
  }

  .content-header {
    text-align: center;
    transform: translateY(-1.5rem);

    .detail-avatar {
      margin-bottom: 2px;
      width: 2.1rem;
      height: 2.1rem;
      border-radius: 50%;
      background-color: #fff;
    }

    .detail-name {
      margin-bottom: 5px;
      font-size: 0.54rem;
    }

    .detail-explain {
      display: inline-block;
      max-width: 7.5rem;
      font-size: 0.42rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .detail-tabs {
    margin-top: 15px;
    padding: 0 1.5rem;
    background: #eee;

    .mint-navbar {
      background: transparent;
    }
  }

  .detail-container {
    padding: 0.24rem;
    font-size: 0.42rem;
    line-height: 0.56rem;

    .text:first-letter {
      margin-left: 0.36rem;
    }
  }

  .detail-footer {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    padding: 1.5vh 15px;
    height: 8vh;
    background: #eee;

    .mint-button {
      flex: 1;
      height: 5vh;
      margin-right: 15px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>