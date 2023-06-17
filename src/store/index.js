import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import axios from "axios";
import SecureLS from "secure-ls";
const ls = new SecureLS({ isCompression: false });

const store = createStore({
  state() {
    return {
      login:{
        email:"",
        password:""
      },
      productMen:[],
      productWomen:[],
      RequireClothes: null,
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
    getLogin(state){
      return state.login
    },
    getProductMen(state){
      return state.productMen
    },
    getProductWomen(state){
      return state.productWomen
    },
    getRequireClothes(state) {
      return state.RequireClothes;
    },
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
    setLogin(state ,loginid){
      state.login =loginid.data
    },
    setProductMen(state ,productPlayload){
      state.productMen =productPlayload.data
      state.totalItemNo = productPlayload.total;
    },
    setProductWomen(state ,productPlayload){
      state.productWomen =productPlayload.data
      state.totalItemNo = productPlayload.total;
    },
    setRequireClothes(state, dataPayload) {
      state.RequireClothes = dataPayload;
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
    setUpdateCart(state, payload) {
      const item = state.cart.find((el) => payload._id === el._id);
      if (item) {
        const price = item.discount
          ? item.price - (item.price * item.discount) / 100
          : item.price;
        item.cartQuantity = item.cartQuantity + payload.cartQuantity;
        item.total = item.cartQuantity * price;
      } else {
        const price = payload.discount
          ? payload.price - (payload.price * payload.discount) / 100
          : payload.price;
        state.cart.push({
          ...payload,
          cartQuantity: payload.cartQuantity,
          total: price,
        });
      }
    },
    setAddWishList(state, productPayload) {
      const item = state.wishlist.find((el) => productPayload._id === el._id);
      if (item) {
        return;
      }
      {
        state.wishlist.push(productPayload);
      }
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
      state.cart = state.cart.filter((item) => {
        console.log( product._id !== item._id);
        return product._id !== item._id;
      });
    },

    setRemoveWishlist(state, RemoveWishlistPayload) {
      state.wishlist = state.wishlist.filter((item) => {
        return RemoveWishlistPayload._id !== item._id;
      });
    },
  },

  actions: {
    async fetchProducts({ commit }, payload) {
      let queryFilter = "";
      let searchValue =""
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
          searchValue =
          payload.searchValue == undefined ? "" : payload.searchValue;
      }
      try {
        commit("setLoading", true);
        const res = await axios.get(
          `http://localhost:3000/clothes/?limit=${limit}&page=${page}&queryFilter=${queryFilter}&searchValue=${searchValue}`
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

    async fetchProductMen({ commit }) {
      let queryFilter = "men";
      let limit = 9;
      let page = 1;
      // if(payload){

      //   page = payload.page == undefined ? 1:payload.page;
      //   queryCate = payload.queryCate == undefined ? "":payload.queryCate;
      // }

      try {
        commit("setLoading", true);
        const res = await axios.get(
          `http://localhost:3000/clothes/?limit=${limit}&page=${page}&queryFilter=${queryFilter}`
        );
        // const re = []
        // let total = Math.ceil(res.data.total / 4);
        // console.log(total);
        console.log(res.data.data);
        commit("setProductMen", res.data);
        commit("setLoading", false);
      } catch (err) {
        commit("setError", err.message);
        commit("setLoading", false);

        // console.log(err);
      }
    },
    async fetchProductWomen({ commit }) {
      let queryFilter = "women";
      let limit = 9;
      let page = 1;

      try {
        commit("setLoading", true);
        const res = await axios.get(
          `http://localhost:3000/clothes/?limit=${limit}&page=${page}&queryFilter=${queryFilter}`
        );
        // const re = []
        // let total = Math.ceil(res.data.total / 4);
        // console.log(total);
        console.log(res.data.data);
        commit("setProductWomen", res.data);
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
   
        commit("setRequireClothes", res.data);
      } catch (err) {
        commit("setError", err.message);
      }
    },

    async fetchLogin({commit} , {login}){
      try{
        const res = await axios.post('http://localhost:3000/auth/login/' + {email:login.email ,password:login.password});
        console.log(login);
        console.log(res.data);  
        commit("setLogin", res.data);
      }catch (err){
        commit("setError", err.message);
      }
    },
    setLoadingState({ commit }, isLoading) {
      commit("setLoading", isLoading);
    },
    addToCartItem({ commit }, payload) {
      commit("setUpdateCart", payload);
    },
    removeProductFromCart({ commit }, product) {
      commit("setRemoveProduct", product);
    },
    decreaseProduct({ commit }, product) {
      commit("setDecreaseProduct", product);
    },
    addToWishlist({ commit }, payload) {
      commit("setAddWishList", payload);
    },
    removeProductFromWishlist({ commit }, product) {
      commit("setRemoveWishlist", product);
    },
  },
  plugins: [
    createPersistedState({
      key: "Shop-ui.com",
      storage: {
        getItem: key => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: key => ls.remove(key)
      },
    }),
  ],
});

export default store;
