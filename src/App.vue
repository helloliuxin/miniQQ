<template>
  <div id="app">
    <div v-if="show">
      <TopNav />
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>

    <BottomTab />
    <SettingDrawer />
    <DetailView />
  </div>
</template>

<script>
import BottomTab from "./components/BottomTab";
import TopNav from "./components/TopNav";
import SettingDrawer from "./components/SettingDrawer";
import DetailView from "./views/DetailView";
import { mapState } from "vuex";
import { Indicator } from "mint-ui";

export default {
  name: "app",
  computed: mapState(["isLoading"]),
  components: {
    BottomTab,
    TopNav,
    SettingDrawer,
    DetailView
  },
  data() {
    return { show: false };
  },
  watch: {
    isLoading(val) {
      if (val) {
        Indicator.open({
          text: "Loading...",
          spinnerType: "fading-circle"
        });
      } else {
        this.show = true;
        Indicator.close();
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
