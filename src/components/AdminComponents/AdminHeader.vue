<template>
  <header class="admin-header">
    <b-button @click="toggleNav" class="m-2 nav-toggle-btn"
      ><b-icon-justify class="menu-btn" font-scale="1.5"></b-icon-justify>
      <b-icon-x class="close-btn" font-scale="1.5"></b-icon-x>
    </b-button>
    <b-nav vertical>
      <b-nav-item  to="/admin" :class="{'active':$route.name=='admin'}">Home</b-nav-item>
      <b-nav-item to="/admin/product">Product</b-nav-item>
      <b-nav-item to="/admin/categories">Categories</b-nav-item>
    </b-nav>
  </header>
</template>
<script>
export default {
  data: function() {
    return {};
  },
  computed: {
    navVisibility() {
      return this.$store.state.admin.navVisibility;
    },
  },
  methods: {
    toggleNav() {
      this.$store.commit("admin/updateAdminNavVisibility", !this.navVisibility);
    },
  },
  mounted() {},
};
</script>
<style lang="scss">
.router-link-exact-active{
background-color: #000;;
}
$mainHeaderWidth: 200px;
#admin-content {
  &.nav-open {
    padding-left: $mainHeaderWidth !important;
    transition: padding-left 0.5s;
  }
}
.admin-header {
  width: $mainHeaderWidth;
  position: fixed;
  top: 0;
  left: -$mainHeaderWidth;
  transition: left 0.5s;
  bottom: 0;
  background-color: #333;
  color: #fff;
  .nav-toggle-btn {
    position: absolute;
    left: 100%;
    .close-btn {
      display: none;
    }
  }
  .nav-open &{
    left: 0;
    transition: left 0.5s;
    .menu-btn {
      display: none;
      transition: display .5s;
    }
    .close-btn {
      display: block;
      transition: display .5s;
    }
  }
}
</style>
