<template>
  <div class="search-wrapper">
    <div @click="goSearch">
      <mt-cell title="搜索" icon="search"></mt-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  methods: {
    goSearch() {
      console.log(1231);
      this.$router.push({ name: "search" });
    }
  }
};
</script>

<style lang="scss">
.search-wrapper {
  padding: 10px;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);

  .mint-cell {
    min-height: 26px;

    .mint-cell-wrapper {
      background: rgba(7, 17, 27, 0.1);
      border-radius: 3px;
    }

    .mintui {
      vertical-align: top;
      line-height: 26px;
      font-size: 14px;
    }

    .mint-cell-text {
      line-height: 26px;
      font-size: 12px;
      vertical-align: bottom;
    }
  }
}
</style>