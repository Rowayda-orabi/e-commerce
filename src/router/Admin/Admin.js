import Admin from "@/views/Admin/index.vue";
import Product from "@/views/Admin/products/product.vue";
import Categories from "@/views/Admin/products/categories.vue";
import test from "@/views/Admin/products/categories.vue";
export default [
  {
    path: "/admin",
    component: Admin,
    name: "admin",
    children: [
      {
        path: "Product",
        component: Product,
        name: "Product",
      },
      {
        path: "categories",
        component: Categories,
        name: "categories",
      },
      {
        path: "test",
        component: test,
        name: "test",
      },
    ],
  },
];
