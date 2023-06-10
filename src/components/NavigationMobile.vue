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
                    <li v-for="(menu, i) in menuMobile " class="mobile-menu-active" :key="i"
                        @click="handleToggle = !handleToggle">
                        <router-link :to="menu.url">
                            {{ menu.title }}
                        </router-link>
                        <span class='submenu-toggle' v-if="menu.submenu">
                            <font-awesome-icon icon="fa-solid fa-angle-down" />
                        </span>
                        <ul class="submenu" v-if="menu.submenu" :class="{ active: handleToggle }">
                            <li v-for='(menu, i) in menu.submenu' :key='i'>
                                <router-link :to="menu.url"> {{ menu.title }} </router-link>
                            </li>
                        </ul>
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
        const handleOpenSearch1 =ref(false)
        const handleToggle = ref(false)
        // console.log(handleToggle);
        const menuMobile = reactive(ITEMS_SHOP_LAYOUT)
        const subMenuToggle = document.querySelectorAll('.submenu-toggle');


        return {
            menuMobile, subMenuToggle, handleToggle ,handleOpenSearch1
        }
    }
}
</script>

<style src="../assets/styles/NavigationMobile.scss" lang="scss"></style>