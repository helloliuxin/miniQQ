<template>
  <div>
    <mt-popup v-model="setDrawer" position="left">
      <div class="drawer-content">
        <div class="header">
          <div class="desc-container">
            <div class="avatar" @click="goDetail">
              <img class="auto-img" :src="self.avatar" />
            </div>
            <div class="desc">
              <h3 class="name">{{self.name}}</h3>
              <p>Tel:{{self.phone}}</p>
              <p>email:{{self.email}}</p>
            </div>
          </div>
          <div class="explain">{{self.explain}}</div>
        </div>
        <div class="set-list">
          <mt-cell title="了解会员特群" icon="vip"></mt-cell>
          <mt-cell title="QQ钱包" icon="qianbao"></mt-cell>
          <mt-cell title="个性装扮" icon="gexingzhuangban"></mt-cell>
          <mt-cell title="我的收藏" icon="shoucang"></mt-cell>
          <mt-cell title="我的相册" icon="xiangce"></mt-cell>
          <mt-cell title="我的文件" icon="wenjian"></mt-cell>
          <mt-cell title="免流量特权" icon="redian"></mt-cell>
        </div>
        <div class="set-footer">
          <mt-cell icon="set" label="设置"></mt-cell>
          <mt-cell icon="yejianmoshi" label="夜间"></mt-cell>
          <mt-cell title="23°" label="温度"></mt-cell>
        </div>
      </div>
    </mt-popup>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import * as types from "../store/mutation-types";

export default {
  name: "SettingDrawer",

  computed: {
    ...mapState({
      drawer: "setDrawer",
      self: state => state.data.self
    }),
    setDrawer: {
      get() {
        return this.drawer;
      },
      set(newVal) {
        console.log("newVal ==> ", newVal);
        if (!newVal) {
          this.closeDrawer();
        }
      }
    }
  },

  methods: {
    ...mapActions(['showDetail']),
    ...mapMutations({
      closeDrawer: types.HIDDEN_SETDRAWER
    }),
    goDetail() {
      this.closeDrawer()
      this.showDetail(this.self)
    }
  }
};
</script>

<style lang="scss">
.drawer-content {
  width: 6.8rem;
  height: 100vh;
  background: #fff;

  .header {
    padding: 60px 5px 10px;
    background: url("../assets/img/bg.jpg");
    background-size: 256px 168px;
    font-size: 0.4rem;
  }

  .desc-container {
    display: flex;

    .avatar {
      width: 1.3rem;
      height: 1.3rem;
      border-radius: 50%;
      overflow: hidden;
    }

    .desc {
      flex: 1;
      margin-left: 5px;
      font-size: 10px;
      line-height: 0.3rem;
      text-align: left;
    }

    .name {
      line-height: 0.7rem;
      font-size: 0.56rem;
    }
  }

  .explain {
    margin-top: 0.2rem;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .set-list {
    color: #000;

    .mint-cell-title {
      line-height: 23px;

      .mintui {
        font-size: 23px;
      }

      .mint-cell-text {
        margin-left: 10px;
        vertical-align: top;
      }
    }
  }

  .set-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;

    .mint-cell-text {
      line-height: 24px;
      font-size: 23px;
      vertical-align: top;
    }

    .mintui {
      font-size: 23px;
      line-height: 23px;
    }
  }
}
</style>