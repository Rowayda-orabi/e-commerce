<template>
  <div class="section-header ">
    <h3 class="section-title">
      <slot name="title"></slot>
    </h3>
    <div class="action">
      <slot name="action"> </slot>
    </div>
    <div></div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.section-header {
  display: flex;
  justify-content: space-between;
}
</style>
