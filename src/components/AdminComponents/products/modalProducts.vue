<template>
  <b-modal id="add-product" title="Add Product" hide-footer>
    <b-form @submit.prevent="submit">
      <b-form-group label="Name:" label-for="name">
        <b-form-input
          id="name"
          v-model="form.productName"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Price:" label-for="price">
        <b-form-input id="price" v-model="form.price" required></b-form-input>
      </b-form-group>
      <b-form-group>
        <label for="image"
          ><b-icon-image></b-icon-image> <img class="img" id="img1"
        /></label>

        <b-form-file
          type="file"
          accept="image/*"
          plain
          id="image"
          @change="imageInputChangeHandler"
          required
          v-model="filename"
        ></b-form-file>
      </b-form-group>
      <b-button :disabled="loader" type="submit" variant="success"
        >Submit</b-button
      >
    </b-form>
  </b-modal>
</template>
<script>
const initForm = () => {
  return {
    form: {
      productName: null,
      price: 0,
    },
  };
};
export default {
  data() {
    return {
      form: initForm(),
      filename: null,
      loader: false,
    };
  },
  methods: {
    addProduct() {
      return this.$store.dispatch("admin/ProductsModule/submitProductForm", {
        product: this.form,
        imageFile: this.filename,
      });
    },
    submit() {
      this.loader = true;
      this.addProduct().then(() => {
        this.loader = false;
        this.resetForm;
      });
    },
    resetForm() {
      this.form = initForm;
      this.imageUrl = null;
    },
    imageInputChangeHandler(e) {
      this.filename = e.target.files[0];
    },
  },
};
</script>
