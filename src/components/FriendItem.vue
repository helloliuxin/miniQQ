<template>
  <div class="friend-item" @click="showDetailFunc(f)">
    <mt-cell>
      <div slot="icon" class="avatar">
        <img :src="f.avatar" class="auto-img" />
      </div>
      <div slot="title" class="content">
        <h3 class="name">{{f.name}}</h3>
        <p class="explain">{{f.explain}}</p>
      </div>
    </mt-cell>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "friendItem",
  props: ['f', 'click'],
  methods: {
    ...mapActions(['showDetail']),
    showDetailFunc(f) {
      console.log('this.click ==> ', this.click);
      this.click && this.click()
      this.showDetail(f)
    }
  }
};
</script>

<style lang="scss">
.friend-item {
  .mint-cell {
    padding: 10px 0;
    background: transparent;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  }

  .avatar {
    display: inline-block;
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
    margin-right: 0.2rem;
    background: #fff;
    overflow: hidden;
  }

  .content {
    display: inline-block;
    max-width: 7rem;
    vertical-align: top;
  }

  .name {
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.46rem;
    font-weight: 600;
  }

  .explain {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>