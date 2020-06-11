<template>
    <div id="admin-content" :class="{'nav-open':navVisibility}">
        <h1>admin page</h1>
        <AdminHeader/>
        <router-view />
    </div>
</template>
<script>
import AdminHeader from '@/components/AdminComponents/AdminHeader.vue'
export default {
    components:{
        AdminHeader
    },
    computed: {
    navVisibility() {
      return this.$store.state.admin.navVisibility;
    },
  },
}
</script>
<style lang="scss" scoped>

</style>