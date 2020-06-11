<template>
  <b-modal id="add-modal" title="Add Category" hide-footer>
    <b-form @submit.prevent="submit">
      <b-form-group
        id="input-group-1"
        label="Category Name:"
        label-for="input-name"
      >
        <b-form-input
          id="input-name"
          required
          v-model="categoryName"
        ></b-form-input>
      </b-form-group>
      <b-button :disabled="loader" type="submit" variant="success"
        >Submit</b-button
      >
    </b-form>
  </b-modal>
</template>
<script>
export default {
    data(){return{
        categoryName: null,
        loader: false
    }},
    methods:{
        submit() {
      this.loader = true;
      this.$store
        .dispatch("admin/submitCategoryForm", {
          name: this.categoryName
        })
        .then(() => {
          this.loader = false;
          this.categoryName = null;
        });
    }
    }
}
</script>