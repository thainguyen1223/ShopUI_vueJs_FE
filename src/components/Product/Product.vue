<template>
    <div class="product-items">
        <div v-if="isLoading">
            <SkeletonLoader />
        </div>
        <div class="product-card" v-else>
    
            <div class="product-card-img flex items-center justify-center" ref="infinitescrolltrigger">
                <img :dataSrc="product.images[0]" :alt="product.title" src="" />
                <img class="hover-image" :dataSrc="product.images[1]" :alt="product.title" src="" />
                <!-- <img src="" :alt="product.title" :dataSrc="product.images[1]" /> -->
            </div>
            <div class="product-card-info p-5 text-center">
                <div class="product-btn flex mb-5">
                    <button class="btn-flat-icon btn-icon-hover">
                        <font-awesome-icon icon="fa-solid fa-cart-shopping" @click="addToCart(product)" />

                    </button>
                    <button class="btn-flat-shop btn-icon-hover">
                        <RouterLink :to="`/productDetail/${product._id}`">
                            shop now
                        </RouterLink>

                    </button>
                    <button class="btn-flat-icon btn-icon-hover">
                        <font-awesome-icon icon="fa-solid fa-heart" @click="addToWishlist(product)" />
                    </button>
                </div>
                <div class="product-card-name text-sm mb-3">
                    <RouterLink :to="`/productDetail/${product._id}`">
                        {{ product.title }}
                    </RouterLink>
                </div>
                <div class="product-card-price">
                    <span class="discount-pricefont-semibold">${{ discountedPrice(product) }}</span>
                    <span class="curr-price ml-1  font-semibold" v-if="product.discount > 0">${{
                        product.price }}</span>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import SkeletonLoader from '../SkeletonLoader/SkeletonLoader.vue';
export default {

    props: ["product", "layout"],
    components: {
        SkeletonLoader: SkeletonLoader
    },
    data() {
        return {
            componentLoaded: false,
            singleQuantity: 1,


        }
    },
    mounted(){
        this.scrollTrigger()
    },
    updated(){
        this.scrollTrigger()
    },
    computed: {
        isLoading() {
            return this.$store.state.isLoading;
        }

    },
    methods: {
        scrollTrigger() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.intersectionRatio > 0) {
                        for(let i of entry.target.querySelectorAll('img')){
                            let attr = i.getAttribute('dataSrc');
                            i.setAttribute('src', attr);
                        }
                    }
                });
            })
            if(this.$refs.infinitescrolltrigger != undefined){
                observer.observe(this.$refs.infinitescrolltrigger);
            }
        },
        addToWishlist(product) {
            this.$store.dispatch('addToWishlist', product)
            console.log(product);
        },
        addToCart(product) {
            const prod = { ...product, cartQuantity: this.singleQuantity }
            this.$store.dispatch('addToCartItem', prod)
            console.log(product)
        },
        discountedPrice(product) {
            return product.price - (product.price * product.discount / 100)
        },
    }
}

</script>

<style src="../../assets/styles/base.scss" lang="scss"></style>