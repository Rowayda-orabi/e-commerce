import {
  addToCollection,
  getCollection,
  deleteFromCollection
} from "@/firebase/methods/firestore.js";
import { CATEGORIES } from "@/firebase/const/firestore.js";

export default {
    submitCategoryForm({ commit, state }, category) {
      return addToCollection(CATEGORIES, category).then((doc) => {
        commit(
          "updateCategories",
          state.categories.concat(
            Object.assign({}, category, {
              id: doc.id,
            })
          )
        );
      });
     },
    getCategories({ commit }) {
     return getCollection(CATEGORIES).then((querysnapshot) => {
        let categories = querysnapshot.docs.map((queryDoc) =>
          Object.assign({}, queryDoc.data(), {
            id: queryDoc.id,
          })
        );
        commit("updateCategories", categories);
         
      });
    },
    deleteCategory({ commit, state }, categoryId) {
      return deleteFromCollection(CATEGORIES, categoryId).then(
        commit(
          "updateCategories",
          state.categories.filter((category) => category.id != categoryId)
        )
      );
    },
};
