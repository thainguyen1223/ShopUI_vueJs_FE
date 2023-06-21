<template>
    <div v-if="isLoading">
        <SkeletonLoaderList/>
    </div>
    <div class="product-items" v-else>
        <div class="product-card_list py-3 flex">
            <div class="product-list_img flex justify-center items-center mb-5 mr-9" ref="infinitescrolltrigger">
                <img :dataSrc="product.images[0]" :alt="product.title" src="" />
                <img class="hover-image" :dataSrc="product.images[1]" :alt="product.title" src="" />
            </div>
            <div class="product-list_info">
                <div class="product-card-name text-2xl ">
                    {{ product.title }}
                </div>
                <div class="product-card-price ">
                    <span class="discount-pricefont-semibold">${{ discountedPrice(product) }}</span>
                    <span class="curr-price ml-1  font-semibold" v-if="product.discount > 0">${{
                        product.price }}</span>
                </div>
                <div class="product-list_content mt-7">
                    <p class="text-justify">{{ product.description }}</p>

                    <div class="product-list_btn flex justify-between mt-7">
                        <button class="btn-flat_list btn-icon-hover">
                            <RouterLink :to="`/productDetail/${product._id}`">
                                shop now
                            </RouterLink>
                        </button>
                        <button class="btn-icon_list">
                            <font-awesome-icon icon="fa-solid fa-cart-shopping" @click="addToCart(product)" />
                        </button>
                        <button class="btn-icon_list">
                            <font-awesome-icon icon="fa-solid fa-heart" @click="addToWishlist(product)" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import SkeletonLoaderList from '../SkeletonLoader/SkeletonLoaderList.vue';

// import { computed } from 'vue';
// import { useStore } from 'vuex';
export default {
    props: ["product",],
    // setup() {
    //     const store = useStore();
    //     store.dispatch("fetchProducts")

    //     const products = computed(() => store.state.products)
    //     return {
    //         products,
    //     }
    // },
    components: {
        SkeletonLoaderList:SkeletonLoaderList
    },
    data() {
        return {
            singleQuantity: 1,
        }
    },
    mounted() {
        this.scrollTrigger()
    },
    updated() {
        this.scrollTrigger()
    },
    computed: {
        isLoading() {
            return this.$store.state.isLoading;
        },
    },
    methods: {
        scrollTrigger() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.intersectionRatio > 0) {
                        for (let i of entry.target.querySelectorAll('img')) {
                            let attr = i.getAttribute('dataSrc');
                            i.setAttribute('src', attr);
                        }
                    }
                });
            })
            if (this.$refs.infinitescrolltrigger != undefined) {
                observer.observe(this.$refs.infinitescrolltrigger);
            }
        },
        addToCart(product) {
            const prod = { ...product, cartQuantity: this.singleQuantity }
            toast.success('Add to Add to CartItem   ', {
                autoClose: 1000,
            });
            this.$store.dispatch('addToCartItem', prod)

            console.log(prod)
        },
        addToWishlist(product) {
            const prod = { ...product, cartQuantity: this.singleQuantity }
            toast.success('Add to Wishlist', {
                autoClose: 1000,
            });
            this.$store.dispatch('addToWishlist', prod)
            console.log(prod);
        },
        discountedPrice(product) {
            return product.price - (product.price * product.discount / 100)
        },
    }
}

</script>

<style src="../../assets/styles/base.scss" lang="scss"></style>