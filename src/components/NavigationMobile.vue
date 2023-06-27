<template>
    <div class="menu-mobile-wrap">
        <div class="mobile-menu-overlay"></div>
        <div class="mobile-menu-inner flex flex-col">
            <button class="close-btn" @click="$emit('toggleAsideMenu')">
                <font-awesome-icon icon="fa-solid fa-xmark" class="text-3xl close-moblie-style" />
            </button>
            <div class="flex items-center justify-center mt-8">
                <div class="mobile-logo">
                    <img :src="require('@/assets/images/logo.svg')" alt="logo" class="w-full h-auto object-cover" />
                </div>
            </div>

            <div class="navigation-moblie-inner">
                <ul class="mobile-menu">

                    <li class="text-base leading-10"><router-link to="/">Home
                        </router-link>
                    </li>

                    <li class="text-base leading-10">
                        <router-link to="/Shop">Shop
                        </router-link>

                    </li>
                    <li class="text-base leading-10">
                        <router-link to="/Checkout">Checkout
                        </router-link>

                    </li>
                    <li class="text-base leading-10">
                        <router-link to="/Cart">Cart
                        </router-link>

                    </li>

                    <li class="text-base leading-10">
                        <router-link to="/Shop">Wishlist
                        </router-link>

                    </li>

                    <!-- <li class="text-base mobile-menu-active">
                        <RouterLink to="">
                            Pages

                        </RouterLink>
                        <div class="submenu">
                            <div class="flex flex-col">
                         
                                    <ul>
                                        <li>
                                            <RouterLink to="/Cart">
                                                Cart
                                            </RouterLink>
                                        </li>
                                        <li>
                                            <RouterLink to="/Checkout">Checkout</RouterLink>
                                        </li>
                                        <li>
                                            <RouterLink to="/Wishlist">Wishlist</RouterLink>
                                        </li>

                                    </ul>
                                </div>
                
                        </div>
                    </li> -->
                    <li class="text-base leading-10">
                        <RouterLink to="/Contact">Contact</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue';
import { ref } from 'vue';
import { ITEMS_SHOP_LAYOUT } from '../constants/index'
export default {
    setup() {
        const handleOpenSearch1 = ref(false)
        const handleToggle = ref(false)
        // console.log(handleToggle);
        const menuMobile = reactive(ITEMS_SHOP_LAYOUT)
        const subMenuToggle = document.querySelectorAll('.submenu-toggle');


        return {
            menuMobile, subMenuToggle, handleToggle, handleOpenSearch1
        }
    },
    data() {
        return {

        }
    }
}
</script>

<style src="../assets/styles/NavigationMobile.scss" lang="scss"></style>