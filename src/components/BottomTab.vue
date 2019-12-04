<template>
  <mt-tabbar v-model="selected" fixed>
    <mt-tab-item id="msg">
      <img slot="icon" :src="selected === 'msg'? msgIconS : msgIcon" />
      消息
    </mt-tab-item>
    <mt-tab-item id="friends">
      <img slot="icon" :src="selected === 'friends'? friendIconS : friendIcon" />
      联系人
    </mt-tab-item>
    <mt-tab-item id="user">
      <img slot="icon" :src="selected === 'user'? userIconS : userIcon" />
      动态
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
export default {
  name: "BottomTab",
  data() {
    return {
      selected: "msg",
      msgIcon: require("../assets/img/ic_tab_strip_icon_feed.png"),
      msgIconS: require("../assets/img/ic_tab_strip_icon_feed_selected.png"),
      friendIcon: require("../assets/img/ic_tab_strip_icon_follow.png"),
      friendIconS: require("../assets/img/ic_tab_strip_icon_follow_selected.png"),
      userIcon: require("../assets/img/ic_tab_strip_icon_profile.png"),
      userIconS: require("../assets/img/ic_tab_strip_icon_profile_selected.png")
    };
  },
  watch: {
    selected(val) {
      // console.log(val);
      this.$router.push({name: val})
    }
  }
};
</script>

<style lang="scss">
#app .mint-tab-item-icon {
  width: 1.28rem;
  height: 0.64rem;
}

#app .mint-tabbar.is-fixed {
  color: #a6a6a6;
}

#app .mint-tabbar > .mint-tab-item.is-selected {
  color: #000;
  background: transparent;
}

</style>