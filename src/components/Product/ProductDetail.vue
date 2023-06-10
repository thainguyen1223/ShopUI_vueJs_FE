<template>
    <section class="ProductDetail-wrap" v-if="productDetail">
        <Breadcrumb :pageTitle="productDetail.title" />
        <div class="ProductDetail-area pt-12">
            <div class="container mx-auto px-8">
                <div class="productDetail-content flex">
                    <div class="productDetail-list">
                        <swiper :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }" :modules="modules"
                            :options="swiperOption" class="swiper-productDetail" ref="swiperTop">
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
                                    <input class=" productDetail-quantity-qtv  text-2xl" type="text"
                                        :value="singleQuantity" />
                                    <button class="productDetail-quantity-inc" @click="increaseQuantity(productDetail)">
                                        +
                                    </button>
                                </div>
                                <div  class="py-4 px-3">
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
                        <div class="tab-item text-3xl">
                            <div class="flex items-center">
                                <i class='bx bx-message-rounded-dots mr-3'></i>
                                <h3>
                                    Reviews
                                </h3>
                            </div>
                        </div>
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
                        <div class="tab-pane flex justify-center ">

                            <div class="review-wrap flex justify-around">
                                <div class="single-review flex ">
                                    <div class="review-img">
                                        <img src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/284187455_3278463615752707_5582040726676977022_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=AqyiTuXoDaoAX_w3W4P&_nc_ht=scontent.fdad3-5.fna&oh=00_AfA8nWu4cWi4U1J1tvjd9-MTA1t-qfzcX9raxyWo4lN2BQ&oe=645B1160"
                                            alt="" />
                                    </div>
                                    <div class="review-content ml-4">
                                        <div class="review-top-wrap flex items-center">
                                            <h3 class="font-soid text-lg">Duy thái</h3>
                                            <span class="rating">
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                            </span>
                                        </div>

                                        <div class="review-bottom mt-5">
                                            <p>
                                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                                nostrud exercitation
                                                ullamco laboris nisi ut aliquip ex ea commo consequat. Duis aute
                                                irure dolor in
                                                reprehend in voluptate velit esse cillum dolore eu fugiat nulla
                                                pariatur. Excepteur sint
                                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="review-form flex flex-col">
                                    <h3 class="text-lg text-center font-bold">Add a Review</h3>
                                    <form class="p-3 mt-4">
                                        <div class="review-box mt-2 flex justify-between ">
                                            <input type="name" placeholder="name" class="name-review " />
                                            <input type="email" placeholder="email" class="email-review " />
                                        </div>
                                        <div class="mt-4">
                                            <textarea name="Your-Review" placeholder="Message"
                                                class="message-review"></textarea>
                                        </div>

                                        <button class="btn-submit-review btn-hover">
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { Navigation } from 'swiper';
import Breadcrumb from '../Breadcrumb.vue'
// import {onMounted} from "vue"
import { useStore } from 'vuex';
import { useRoute } from "vue-router"
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
export default {
    components: {
        Breadcrumb: Breadcrumb,
        Swiper,
        SwiperSlide,
    },

    setup() {
        // const listActiveImg = onMounted(() => {
        //     const activeImg = document.querySelectorAll('.productDetail-img-item')
        //     console.log(activeImg);
        //     activeImg.forEach(e => {
        //         e.addEventListener('click', () => {
        //             let img = e.querySelector('img').getAttribute('src')
        //             document.querySelector('#product-img > img').setAttribute('src', img)
        //         })
        //     })
        // })
        // const activeTab = onMounted(() => {
        //     const tabs = document.querySelectorAll('.tab-item')
        //     const panes = document.querySelectorAll('.tab-pane')

        //     // const tabActive = document.querySelector('.tab-item.activeDec')
        //     // const paneActive = document.querySelector('.tab-pane.activeDec')
        //     tabs.forEach((tabItem, index) => {
        //         const pane = panes[index]

        //         tabItem.addEventListener('click', () => {
        //             document.querySelector('.active')?.classList.remove('active');
        //             document.querySelector('.tab-pane.active')?.classList.remove('active');
        //             tabItem.classList.add('active')
        //             pane.classList.add('active')

        //         })

        //     })
        // })

        const route = useRoute();
        const store = useStore()

        store.dispatch("fetchProductDetail", { _id: route.params._id })
        return {
    
            //  activeTab
        }
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
    computed: {
        productDetail() {
            return this.$store.state.productDetail
        }
    },
    methods: {
        discountedPrice(product) {
            return product.price - (product.price * product.discount / 100)
        },
        addToCart(productDetail) {
            
            const prod = { ...productDetail, cartQuantity: this.singleQuantity }
            toast.success('Add to CartItem',{
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
            toast.success('Add to wishList',{
                autoClose: 1000,
            }); 
            this.$store.dispatch('addToWishlist', productDetail)
            console.log(productDetail);
        }
    }
}
</script>
<style src="../../assets/styles/base.scss" lang="scss"  ></style>