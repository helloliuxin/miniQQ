<template>
  <div class="nav">
    <mt-header :title="headerTitle" fixed>
      <div class="avatar" slot="left" @click="cutDrawer">
        <img :src="self.avatar" class="auto-img" />
      </div>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>

<script>
import { mapState, mapMutations} from "vuex";
import * as types from '../store/mutation-types'

export default {
  name: "TopNav",
  computed: mapState({
    headerTitle: "headerTitle",
    self: state => state.data.self
  }),
  methods: {
    ...mapMutations({
      cutDrawer: types.SHOW_SETDRAWER
    })
    
  },
  
};
</script>

<style lang="scss" scoped>
.nav .mint-header.is-fixed {
  background: linear-gradient(to right, #2955f3 0%, #7db8e7 70%);
}
.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
}
</style>