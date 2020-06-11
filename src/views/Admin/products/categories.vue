<template>
  <div>
    <section-header>
      <template #title>
        Categories List
      </template>
      <template #action>
        <b-button v-b-modal.add-modal>Add Category</b-button>
        <Modal />
      </template>
    </section-header>
    <div v-if="loading" class="text-center m-5">
      <b-spinner
        variant="success"
        style="width: 100px; height: 100px;"
        label="Spinning"
      ></b-spinner>
    </div>
    <div v-else>
      <div
        class="col-md-4 col-12 mb-3 d-inline-block"
        v-for="category in categories"
        :key="category.id"
      >
        <b-card>
          {{ category.name }}
          <b-button
            v-b-modal.confirm-modal
            @click="changeCurrentId(category.id)"
            variant="danger"
            >Delete</b-button
          >
        </b-card>
      </div>
      <b-modal id="confirm-modal" title="Are You Sure ?" hide-footer>
        <b-button class="m-2" variant="danger" @click="deleteCategory(id)"
          >Delete</b-button
        >
        <b-button class="m-2" @click="$bvModal.hide('confirm-modal')"
          >Close</b-button
        >
      </b-modal>
    </div>
  </div>
</template>
<script>
import SectionHeader from "@/components/AdminComponents/SectionHeader.vue";
import Modal from "@/components/AdminComponents/modal.vue";
export default {
  data() {
    return {
      id: null,
      loading: false,
    };
  },
  components: {
    Modal,
    SectionHeader,
  },
  methods: {
    changeCurrentId(id) {
      this.id = id;
    },
    deleteCategory(id) {
      this.$store.dispatch("admin/deleteCategory", id);
      this.$bvModal.hide("confirm-modal");
    },
  },
  mounted() {
    this.loading = true;
    this.$store.dispatch("admin/getCategories").finally(() => {
      this.loading = false;
    });
  },
  computed: {
    categories() {
      return this.$store.state.admin.categories;
    },
  },
};
</script>
<style lang="scss" scoped>
.card-body {
  display: flex;
  justify-content: space-between;
}
</style>
