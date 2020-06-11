<template>
  <div>
    <div v-if="products">
    <div
      class="col-md-4 col-12 mb-3 d-inline-block"
      v-for="product in products"
      :key="product.id"
    >
      <b-card
        :img-src="product.imageUrl"
        :img-alt="product.name"
        img-top
        style="width: 100%; hieght:300px;"
        class="mb-2"
        :title="product.productName"
      >
        <b-card-text>
          {{ product.price }}
        </b-card-text>
        <b-button v-b-modal.confirm-modal variant="danger">Delete</b-button>
        <b-button
          variant="info"
          class="admin-action"
          v-if="isAdmin"
          v-b-modal.add-product
          >Edit</b-button
        >
      </b-card>
    </div>
    </div>
  </div>
</template>
<script>
//import modalProducts from "@/components/AdminComponents/products/modalProducts.vue";

export default {
  name: "product-card",
  props: ["isAdmin"],
  components: {
  //  modalProducts,
  },
  mounted() {
    this.$store.dispatch("admin/ProductsModule/getProducts");
  },
  computed: {
    products() {
      return this.$store.state.admin.ProductsModule.products;
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  position: relative;
}
.admin-action {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 5;
}
</style>
