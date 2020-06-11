import {
  addToCollection,
  getCollection,

} from "@/firebase/methods/firestore.js";
import { uploadToStorage } from "@/firebase/methods/storage.js";
import { PRODUCTS } from "@/firebase/const/firestore.js";

export default {
  submitProductForm({ commit, state }, { product, imageFile }) { 
    return uploadToStorage(imageFile).then(imageUrl => {
      const productObj = { ...product, imageUrl };
      return addToCollection(PRODUCTS, productObj).then(doc => {
        commit(
          "updateProducts",
          state.products.concat(Object.assign({}, productObj, { id: doc.id }))
        );
      });
    });
  },
  getProducts({ commit }) {
    return getCollection(PRODUCTS).then(querySnapshot => {
      let products = querySnapshot.docs.map(doc =>
        Object.assign({}, doc.data(), {
          id: doc.id
        })
      );
      commit("updateProducts", products);
    });
  },
};
