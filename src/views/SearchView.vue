<template>
  <div class="search-view">
    <div class="search-header">
      <mt-search v-model="value"></mt-search>
      <div class="search-cancel" @click="goBack">取消</div>
    </div>
    <div class="friends-list">
      <FriendItem v-for="f in filterFriendsList" :key="f._id" :f="f" :click="goBack"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import FriendItem from "../components/FriendItem";

export default {
  name: "SearchView",
  data() {
    return {
      value: ""
    };
  },
  computed: {
    ...mapGetters(["friendsList"]),
    filterFriendsList() {
      if (!this.value) {
        return []
      }
      // 只根据用户名称 explain匹配
      return this.friendsList.filter(f => {
        let reg = new RegExp(this.value, 'img')
        return reg.test(f.name) || reg.test(f.explain)
      })
    }
  },
  methods: {
    goBack() {
      this.value = "";
      this.$router.go(-1);
    }
  },
  components: {
    FriendItem
  }
};
</script>

<style lang="scss">
.search-view {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  z-index: 99;

  .mint-search-list {
    z-index: -1;
  }

  .search-header {
    display: flex;
    padding-right: 10px;
    position: relative;
    z-index: 20;

    .mint-search {
      flex: 1;
      height: 44px;
    }

    .search-cancel {
      line-height: 44px;
      font-size: 14px;
    }
  }

  .mint-searchbar {
    background: transparent;
  }

  .mint-searchbar-inner {
    background: rgba(7, 17, 27, 0.1);
    border-radius: 3px;
  }

  .mint-searchbar-core {
    background: transparent;
  }

  .mint-searchbar-cancel {
    display: none;
  }
}
</style>
