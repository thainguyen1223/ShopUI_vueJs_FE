import { createStore } from "vuex";

import axios from "axios";
const store = createStore({
  strict: process.env.NODE_ENV !== "production",
  state() {
    return {
      RequireClothes:null,
      isLoading: false,
      productDetail: null,
      products: [],
      error: null,
      cart: [],
      wishlist: [],
      totalItemNo: 0,
    };
  },
  getters: {
    getRequireClothes(state){
      return state.RequireClothes
    }
,
    getTotalItemNo(state) {
      return state.totalItemNo;
    },
    getProductDetail(state) {
      return state.productDetail;
    },
    getProducts(state) {
      return state.products;
    },
    getCart(state) {
      return state.cart;
    },
    getWishlist(state) {
      return state.wishlist;
    },
    getTotal(state) {
      let total = 0;
      state.cart.forEach((item) => {
        let price = item.discount
          ? item.price - (item.price * item.discount) / 100
          : item.price;
        total = total + price * item.cartQuantity;
      });
      return total;
    },
    getCartItemCount(state) {
      return state.cart.length;
    },
    getWishlistItemCount(state) {
      return state.wishlist.length;
    },
    getCategoryList() {
      return [
        "All Categories",
        "Men",
        "Women",
        "Jean",
        "Shirt",
        "Short",
        "Jacket",
      ];
    },
    getColorList() {
      return [
        "All Colors",
        "White",
        "Black",
        "while",
        "Khaki",
        "Blue",
        "Navy",
        "Gray",
        "Red",
        "Brown",
      ];
    },
    getSizeList() {
      return ["All Sizes", "M", "L", "XL"];
    },
  },
  mutations: {
    setRequireClothes(state , dataPayload){
      state.RequireClothes =dataPayload
    },
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    setProductDetail(state, productDetailPayoad) {
      state.productDetail = productDetailPayoad;
    },
    setProducts(state, productPlayload) {
      state.products = productPlayload.data;
      state.totalItemNo = productPlayload.total;
    },
    setList(state, productPlayload) {
      state.products = productPlayload;
    },
    setError(state, errorPayload) {
      state.error = errorPayload;
    },
    setUpdateCart(state, updateCartPlayload) {
      const item = state.cart.find((el) => updateCartPlayload._id === el._id);
      if (item) {
        const price = item.discount
          ? item.price - (item.price * item.discount) / 100
          : item.price;
        item.cartQuantity = item.cartQuantity + updateCartPlayload.cartQuantity;
        item.total = item.cartQuantity * price;
      } else {
        const price = updateCartPlayload.discount
          ? updateCartPlayload.price -
            (updateCartPlayload.price * updateCartPlayload.discount) / 100
          : updateCartPlayload.price;
        state.cart.push({
          ...updateCartPlayload,
          cartQuantity: updateCartPlayload.cartQuantity,
          total: price,
        });
      }
    },
    setAddWishList(state, productPayload) {
      const item = state.wishlist.find((el) => productPayload.id === el.id);
      state.wishlist.push(productPayload);
      return item;
    },
    setDecreaseProduct(state, DecreaseProductPayload) {
      const found = state.cart.find(
        (el) => DecreaseProductPayload._id === el._id
      );
      const price = found.discount
        ? found.price - (found.price * found.discount) / 100
        : found.price;
      found.cartQuantity =
        found.cartQuantity - DecreaseProductPayload.cartQuantity;
      found.total = found.cartQuantity * price;
    },
    setRemoveProduct(state, product) {
      const item = state.cart.filter((item) => product.id !== item.id);
      console.log(item.id);
    },

    setRemoveWishlist(state, RemoveWishlistPayload) {
      state.wishlist = state.wishlist.filter((item) => {
        return RemoveWishlistPayload.id !== item.id;
      });
    },
  },

  watch: {
    updateCartPlayload(newUpdate) {
      console.log(newUpdate);
      localStorage.updateCartPlayload = JSON.stringify(newUpdate);
    },
  },
  actions: {
    async fetchProducts({ commit }, payload) {
      let queryFilter = "";
      let limit = 9;
      let page = 1;
      // if(payload){

      //   page = payload.page == undefined ? 1:payload.page;
      //   queryCate = payload.queryCate == undefined ? "":payload.queryCate;
      // }
      if (payload) {
        page = payload.page == undefined ? 1 : payload.page;
        queryFilter =
          payload.queryFilter == undefined ? "" : payload.queryFilter;
      }
      try {
        commit("setLoading", true);

        const res = await axios.get(
          `http://localhost:3000/clothes/?limit=${limit}&page=${page}&queryFilter=${queryFilter}`
        );
        // const re = []
        // let total = Math.ceil(res.data.total / 4);
        // console.log(total);
        console.log(res.data.data);
        commit("setProducts", res.data);
        commit("setLoading", false);
      } catch (err) {
        commit("setError", err.message);
        commit("setLoading", false);

        // console.log(err);
      }
    },
    async fetchProductDetail({ commit }, { _id }) {
      try {
        const res = await axios.get("http://localhost:3000/clothes/" + _id);
        console.log(res.data);
        commit("setProductDetail", res.data);
      } catch (err) {
        commit("setError", err.message);
        // console.log(err);
      }
    },
    async fetchRequireProduct({ commit } ,dataPayload ) {
      console.log(dataPayload);
      try {
        const res = await axios.post(
          `http://localhost:3000/require-clothes/?limit=3&page=1 ,` + dataPayload 
        );
        console.log(res.data.data);
        commit("setRequireClothes", res.data);
      } catch (err) {
        commit("setError", err.message);
      }
    },

    setLoadingState({ commit }, isLoading) {
      commit("setLoading", isLoading);
    },
    addToCartItem({ commit }, updateCartPlayload) {
      commit("setUpdateCart", updateCartPlayload);
    },
    decreaseProduct({ commit }, product) {
      commit("setDecreaseProduct", product);
    },
    removeProductFromCart({ commit }, product) {
      commit("setRemoveProduct", product);
    },
    removeProductFromWishlist({ commit }, product) {
      commit("setRemoveWishlist", product);
    },
    addToWishlist({ commit }, productPlayload) {
      commit("setAddWishList", productPlayload);
    },
  },
});

export default store;
