<template>
    <div class="ProductDetail-wrap" v-if="productDetail">
        <Breadcrumb :pageTitle="productDetail.title" />
        <div class="container mx-auto">
            <div class="productDetail-content flex">
                <div class="productDetail-list">
                    <swiper :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }" :modules="modules"
                        :options="swiperOption" class="swiper-slider" ref="swiperTop">
                        <SwiperSlide v-for="image in productDetail.images" :key="image">
                            <img :src="image" :alt="productDetail.title">
                        </SwiperSlide>
                        <div class="slider-navigation-productDetail">
                            <div class="nav-productDetail prevArrow">
                                <i class='bx bx-chevron-left'></i>
                            </div>
                            <div class="nav-productDetail nextArrow">
                                <i class='bx bx-chevron-right'></i>
                            </div>
                        </div>
                    </swiper>   
                    <Swiper class="productDetail-box mt-8" ref="swiperThumbs">
                        <div class="productDetail-img-list flex items-center justify-center">
                            <div class="productDetail-img-item" v-for="image in productDetail.images" :key="image">
                                <img :src="image" alt="">
                            </div>
                        </div>
                    </Swiper>
                </div>

                <div class="productDetail-info flex flex-col justify-start">
      
                    <h1 class="text-3xl font-bold">
                        {{ productDetail ? productDetail.title : '' }}
                    </h1>
                    <div class="pb-4 mt-2">
                        <span class="productDetail-info-detail-title">Rated:</span>
                        <span class="rating mx-2">
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                        </span>
                        <p class="text-lg text-justify pt-4">
                            {{ productDetail.description }}
                        </p>
                        <div class="pro-details-size-color" v-if="productDetail">
                            <div class="pro-details-color-wrap">
                                <h6 class="label">Color </h6>
                                <div class="pro-details-color-content">
                                    <label :class="item" class="radio" v-for="(item, index) in productDetail.color"
                                        :key="index">
                                        <input type="radio" name="colorGroup" />
                                        <span class="check-mark"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="pro-details-size-wrap mt-5">
                                <h6 class="label">Size</h6>
                                <div class="pro-details-size-content">
                                    <label class="radio" v-for="(item, index) in productDetail.size" :key="index">
                                        <input type="radio" name="sizeGroup" />
                                        <span class="check-mark">{{ item }}</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div class="productDetail-info-price text-2xl py-4">${{ discountedPrice(productDetail) }}
                            </div>
                            <div class="ml-5  text-xl" v-if="productDetail.discount > 0"><del> ${{ productDetail.price
                            }}</del></div>
                        </div>
                        <div class="flex items-center ">
                            <div class="productDetail-qty flex items-center">
                                <button class="productDetail-quantity-dec" @click="decreaseQuantity(productDetail)">
                                    -
                                </button>
                                <input class=" productDetail-quantity-qtv  text-2xl" type="text" :value="singleQuantity" />
                                <button class="productDetail-quantity-inc" @click="increaseQuantity(productDetail)">
                                    +
                                </button>
                            </div>
                            <div class="py-4 px-3">
                                <button class="btn-flat btn-hover" @click="addToCart(productDetail)">add to
                                    cart</button>
                            </div>
                            <div class="text-3xl">
                                <button class='bx bx-heart' @click="addToWishList(productDetail)"></button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="description-review-area mt-9">
                <div class="container mx-auto px-3">
                    <div class="tabs flex py-8 justify-center">
                        <div class="tab-item active text-3xl ">
                            <div class="flex items-center">
                                <i class='bx bx-detail mr-3'></i>
                                <h3>
                                    Additional information
                                </h3>
                            </div>
                        </div>
                        <!-- <div class="tab-item text-3xl">
                            <div class="flex items-center">
                                <i class='bx bx-message-rounded-dots mr-3'></i>
                                <h3>
                                    Reviews
                                </h3>
                            </div>
                        </div> -->
                    </div>
                    <div class="tab-content mb-20 container flex justify-center">
                        <div class="tab-pane active  flex justify-center">
                            <div class="productDetail-anotherinfor">
                                <ul>
                                    <li><span>Weight: </span> 400 g</li>
                                    <li><span>Dimensions: </span>10 x 10 x 15 cm </li>
                                    <li><span>Materials: </span> 60% cotton, 40% polyester</li>

                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { Navigation } from 'swiper';
import Breadcrumb from '../Breadcrumb.vue'
// import {onMounted} from "vue"
// import { useStore } from 'vuex';
// import { useRoute } from "vue-router"
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
export default {
    components: {
        Breadcrumb: Breadcrumb,
        Swiper,
        SwiperSlide,
    },



    data() {
        return {
            singleQuantity: 1,
              modules: [Navigation],

        }
    },
    // mounted() {
    //     console.log(
    //         this.$refs.swiperTop
    //     );
    // },
    // mounted() {
    //         this.$nextTick(() => {
    //             const swiperTop = this.$refs.swiperTop.$Swiper
    //                 console.log(swiperTop);
    //         })
    //     },
        created(){
            this.$store.dispatch("fetchProductDetail", { _id: this.$route.params._id })
        },
    computed: {
        productDetail(){
            return this.$store.state.productDetail
        },
    },
    methods: {
        discountedPrice(product) {
            return product.price - (product.price * product.discount / 100)
        },
        addToCart(productDetail) {

            const prod = { ...productDetail, cartQuantity: this.singleQuantity }
            toast.success('Add to CartItem', {
                autoClose: 1000,
            });
            this.$store.dispatch('addToCartItem', prod)


        },
        increaseQuantity() {
            if (this.productDetail.quantity > this.singleQuantity) this.singleQuantity++
        },
        decreaseQuantity() {
            if (
                this.singleQuantity > 1
            )
                this.singleQuantity--
        },
        addToWishList(productDetail) {
            toast.success('Add to wishList', {
                autoClose: 1000,
            });
            this.$store.dispatch('addToWishlist', productDetail)
            console.log(productDetail);
        }
    }
}
</script>
<style src="../../assets/styles/base.scss" lang="scss"  ></style>