import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",

    meta: {
      layout: "default",
    },
    component: () => import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
  },
  {
    path: `/shop`,
    name: "Shop",

    component: () => import(/* webpackChunkName: "Shop" */ "../views/Shop.vue"),
  },

  {
    path: "/productDetail/:_id",
    name: "productDetail",

    component: () =>
      import(
        /* webpackChunkName: "ProductDetail" */ "../components/Product/ProductDetail.vue"
      ),
  },
  {
    path: "/cart",
    name: "Cart",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Cart.vue"),
  },
  {
    path: "/wishlist",
    name: "Wishlist",

    component: () =>
      import(/* webpackChunkName: "wishlist" */ "../views/wishlist.vue"),
  },
  {
    path: "/checkout",
    name: "Checkout",

    component: () =>
      import(/* webpackChunkName: "checkout" */ "../views/Checkout.vue"),
  },
  {
    path: "/contact",
    name: "Contact",

    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
  },
  {
    path: "/login-register",
    name: "Login-register",

    component: () =>
      import(
        /* webpackChunkName: "login-register" */ "../views/Login-register.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})  
export default router;
