<template>
  <div>
    <section-header>
      <template #title>
        Product List
      </template>
      <template #action>
        <b-button v-b-modal.add-product>Add Product</b-button>
        <modalProducts />
      </template>
    </section-header>
    <productCard is-admin="true" />
  </div>
</template>
<script>
import SectionHeader from "@/components/AdminComponents/SectionHeader.vue";
import modalProducts from "@/components/AdminComponents/products/modalProducts.vue";
import productCard from "@/components/AdminComponents/products/productCard.vue";
export default {
  components: {
    SectionHeader,
    modalProducts,
    productCard,
  },
  data() {
    return {
      //categoryName: null,
      loader: false,
    };
  },

  methods: {
  },
};
</script>
