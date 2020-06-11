import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import ProductsModule from "./ProductsModule";

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
  modules: {
    ProductsModule
  }
};
