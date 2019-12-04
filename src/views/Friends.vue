<template>
  <div class="friends-view">
    <div>
      <SearchBar />
      <mt-cell title="新朋友" is-link></mt-cell>
      <mt-cell title="创建群组" is-link></mt-cell>
      <Split />

      <mt-navbar v-model="selected">
        <mt-tab-item id="1">好友</mt-tab-item>
        <mt-tab-item id="2">群聊</mt-tab-item>
        <mt-tab-item id="3">设备</mt-tab-item>
        <mt-tab-item id="4">通讯录</mt-tab-item>
        <mt-tab-item id="5">公众号</mt-tab-item>
      </mt-navbar>

      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <div class="friends-tab">
            <div @click="click(1)">
              <mt-cell title="特别关心">
                <span class="arrow-icon" slot="icon" :class="{active: active ===1}"></span>
              </mt-cell>
            </div>
            <div @click="click(2)">
              <mt-cell title="我的好友">
                <span class="arrow-icon" slot="icon" :class="{active: active ===2}"></span>
              </mt-cell>
            </div>
            <div class="friends-list" v-show="active ===2">
              <FriendItem v-for="f in friendsList" :key="f._id" :f="f" />
            </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <div>群聊</div>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <div>设备</div>
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
          <div>通讯录</div>
        </mt-tab-container-item>
        <mt-tab-container-item id="5">
          <div>公众号</div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar";
import Split from "../components/Split";
import FriendItem from "../components/FriendItem";
import { mapGetters } from "vuex";

export default {
  name: "Friends",
  data() {
    return {
      selected: "1",
      active: ""
    };
  },
  computed: {
    ...mapGetters(["friendsList"])
  },
  methods: {
    click(val) {
      if (val === this.active) {
        this.active = "";
      } else {
        this.active = val;
      }
    }
  },
  components: {
    SearchBar,
    Split,
    FriendItem
  }
};
</script>

<style lang="scss">
.friends-view {
  position: fixed;
  left: 0;
  top: 40px;
  bottom: 55px;
  right: 0;
  overflow: auto;

  .mint-cell {
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  }

  .arrow-icon {
    margin-right: 0.5rem;
    display: inline-block;
    width: 0;
    height: 0;
    border: 6px solid rgba(7, 17, 27, 0.3);
    border-right: none;
    border-top-color: transparent;
    border-bottom-color: transparent;
    transition: all 0.2s linear;

    &.active {
      transform: rotate(90deg);
    }
  }
}

.friends-list {
  padding: 0 10px;
}
</style>