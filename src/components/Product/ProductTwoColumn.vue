<template>
    <div class="product-items">
        <div class="product-card">
            <div class="product-card-img flex items-center justify-center" ref="infinitescrolltrigger">
                <img v-if="isVisible" :alt="product.title" :src="product.images[0]" />
                <img v-if="isVisible" :alt="product.title" :src="product.images[1]" />
            </div>
            <div class="product-card-info p-5 text-center">
                <div class="product-btn flex mb-5">
                    <button class="btn-flat-icon btn-icon-hover">
                        <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                    </button>
                    <button class="btn-flat-shop btn-icon-hover">
                        <RouterLink :to="`/productDetail/${product._id}`">
                            shop now
                        </RouterLink>

                    </button>
                    <button class="btn-flat-icon btn-icon-hover">
                        <font-awesome-icon icon="fa-solid fa-heart"  @click="addToWishlist(product)" />
                    </button>
                </div>
                <div class="product-card-name text-xl mb-3">
                    {{ product.title }}
                </div>
                <div class="product-card-price text-base">
                    <span class="discount-pricefont-semibold">${{ discountedPrice(product) }}</span>
                    <span class="curr-price ml-1  font-semibold" v-if="product.discount > 0">${{
                        product.price}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: ["product", "layout"],
    data() {
        return {
            isVisible: false,
       
        }
    },
    mounted(){
        this.scrollTrigger()
    },
    methods: {
        scrollTrigger() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.intersectionRatio > 0) {
                        this.isVisible = true;
                   
                        // setTimeout(() => {
             
                        //     this.isVisible = false;
                        // }, 2000); // simulate Ajax-Call ;-)
                    }
                });
            })
            observer.observe(this.$refs.infinitescrolltrigger);
        },
        addToWishlist(product) {

            this.$store.dispatch('addToWishlist', product)
            console.log(product);
        },
        discountedPrice(product) {
            return product.price - (product.price * product.discount / 100)
        },
    }
}

</script>

<style src="../../assets/styles/base.scss" lang="scss"></style>