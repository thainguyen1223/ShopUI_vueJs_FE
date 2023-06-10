<template>
    <div class="minicart-wrapper" :class="miniCart">
        <div class="shopping-cart-content" v-if="products.length > 0">
            <ul>
                <li class="shopping-items flex justify-between" v-for="product in products" :key="product._id">
                    <div class="shopping-cart-img">
                        <RouterLink :to="`/productDetail/${product._id}`">
                            <img :src=" product.images[0]" alt="">
                        </RouterLink>
                    </div>

                    <div class="shopping-cart-title">
                        <h4>
                            <RouterLink :to="`/productDetail/${product._id}`">
                                {{ product.title }}
                            </RouterLink>
                        </h4>
                        <h6>Qty: {{ product.cartQuantity }}</h6>
                    </div>
                    <div class="shopping-cart-delete">
                        <button @click="removeProduct(product)">
                            <i class='bx bxs-x-circle'></i>
                        </button>
                    </div>
                </li>
            </ul>
            <div class="shopping-cart-total flex justify-between">
                <h4>Total :
                </h4>
                <div class="shop-total">${{ total }}</div>
            </div>
            <div class="shopping-cart-btn flex flex-col">
                <div class="shop-cart-item btn-hover">
                    <RouterLink to="/cart">
                        view cart
                    </RouterLink>
                </div>
                <div class="shop-cart-item btn-hover">
                    <RouterLink to="/checkout">
                        checkout
                    </RouterLink>
                </div>
            </div>
        </div>
        <div class="shopping-cart-content text-center" v-else>
            <p>No items added to cart</p>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { useStore } from 'vuex';
export default {
    props: ["miniCart"],
    setup() {
        const store = useStore();

        store.dispatch("fetchProducts")
        const products = computed(() => store.state.cart);
        const total = computed(() => store.getters.getTotal);
        return {
            products,
            total
        };
    },
    methods: {
        removeProduct(product) {
            this.$store.dispatch("removeProductFromCart", product);
        }
    },
    components: { RouterLink }
}


</script>

<style src="../assets/styles/Header.scss" lang="scss"></style>