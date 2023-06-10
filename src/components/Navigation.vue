<template>
    <nav>
        <div class="flex justify-between items-center">
            <ul class="main-menu flex justify-between items-center">
                <li class="text-base"><router-link to="/">Home
                    </router-link>
                </li>
                <!-- mega menu -->
                <li class="text-base mega-dropdowns">
                    <router-link to="/Shop">Shop
                    </router-link>
               
                </li>
                <!-- end mega menu -->
                <li class="text-base  mega-dropdown">
                    <RouterLink to="">
                        Pages
                        <font-awesome-icon icon="fa-solid fa-angle-down" class="icon_style" />
                    </RouterLink>
                    <div class="mega-content-pages">
                        <div>
                            <div class="flex flex-col">
                                <div class="box">
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
                        </div>
                    </div>
                </li>
            
                <li class="text-base">
                    <RouterLink to="/Contact">Contact</RouterLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>

export default {

}
</script>
<style src="../assets/styles/Navigation.scss" lang="scss"></style>