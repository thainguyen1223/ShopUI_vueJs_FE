<template>
  <header id="header" class="py-12">
    <div class="container mx-auto h-full w-full">
      <div class="nav__wrap flex items-center justify-around">
        <div class="md-6 ">
          <RouterLink to="/">
            <div class="logo">
              <img :src="require('@/assets/images/logo.svg')" alt="logo" class="w-full h-auto object-cover" />
            </div>
          </RouterLink>
        </div>
        <div class="navigation">
          <Navigation />
        </div>
        <div class="header-right-wrap flex items-center justify-between ">
          <!-- <div class="header-search">
            <button class="search-active" @click="handleOpenSearch = !handleOpenSearch">
              <font-awesome-icon icon="fa-soid fa-magnifying-glass" class="text-lg mt-2" />
            </button>
            <div class="search-content flex items-center justify-center" :class="{ active: handleOpenSearch }">
              <form class="form-search flex">
                <input type="text" placeholder="Search" class="search-input"  />
                <div class="button-search" ><font-awesome-icon icon="fa-soid fa-magnifying-glass" />
                </div>
              </form>
            </div>
          </div> -->

          <div class="account-setting">
            <button class="account-setting-active">
              <img :src="require('../assets/images/user 1.svg')" alt="user" class="mx-3 mt-2" />
            </button>
            <div class="account-dropdown">
              <ul>
                <li>
                  <RouterLink to="login-register">Login</RouterLink>
                </li>
                <li>
                  <RouterLink to="login-register">Register</RouterLink>
                </li>
                <li><a href="#">my account</a></li>
              </ul>
            </div>
          </div>

          <div class="wishlist-setting">
            <button class="flex">
              <RouterLink to="/wishlist">
                <i class='bx bx-heart '></i>
                <span class="count-style-wishlist">{{ wishlistItemCount }}</span>
              </RouterLink>
            </button>
          </div>

          <div class="cart-setting">
            <button class="flex">
              <img :src="require('../assets/images/cart.svg')" alt="cart" class="mt-2"
                @click="handOpenCart = !handOpenCart" />
              <span class="count-style">{{ cartItemCount }}</span>
              <MiniCart :miniCart="{ visible: handOpenCart }" @minicartClose="handOpenCart = !handOpenCart" />
            </button>
          </div>

          <div class="mobile-menu-toggler">
            <button class="mobile-aside-button" @click=" handleOpenNav = !handleOpenNav">
              <font-awesome-icon icon="fa-solid fa-bars" alt="menu" class="mt-2 mx-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
  <NavigationMoblie :class="{ 'show-mobile-menu': handleOpenNav }" @toggleAsideMenu="handleOpenNav = !handleOpenNav" v-if="handleOpenNav" />
</template>

<script>

import Navigation from "../components/Navigation.vue";
import NavigationMoblie from "./NavigationMobile.vue";

import MiniCart from "./MiniCart.vue";

export default {
  components: {
    Navigation: Navigation,
    NavigationMoblie: NavigationMoblie,
    MiniCart: MiniCart
  },

  data() {
    return {
   
      handOpenCart: false,
      handleOpenNav: false,

    }
  },
  computed: {
    cartItemCount() {
      return this.$store.getters.getCartItemCount
    },
    wishlistItemCount() {
      return this.$store.getters.getWishlistItemCount
    },
  },


  methods: {
    resSearch() {
      const searhValue =this.search
      
      this.$store.dispatch('fetchProducts', {
        searchValue: searhValue,
 
      })

    }
  }

}
</script>
<style src="../assets/styles/base.scss" lang="scss" ></style>