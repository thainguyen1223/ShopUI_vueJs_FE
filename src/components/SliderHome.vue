<template>
    <div class="slider mb-8">
        <swiper :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }" :modules="modules" class="swiper-slider">
            <swiper-slide lazy="true" v-for="product in products" :key="product.id" class="single-slider">
                <div class="container mx-auto my-auto px-5 slider-home flex">
                    <div class="slider-active acitve flex ">
                        <div class="slider-info flex flex-col justify-center">
                            <div class="info-content flex flex-col items-start">
                                <h3 class="top-down text-2xl font-medium text-left mb-2">
                                    {{ product.title }}
                                </h3>

                                <p class="top-down trans-delay-0-4">
                                    {{ product.description }}
                                </p>
                                <div class="top-down trans-delay-0-6">
                                    <button class="btn-flat btn-hover">
                                        <RouterLink :to="`/productDetail/${product._id}`">
                                            <span>shop now</span>
                                        </RouterLink>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="slider-img top-down">

                            <img :src="product.images[0]" alt="user" class="mx-3 mt-2" loading="lazy" />

                        </div>
                    </div>
                </div>
            </swiper-slide>
            <div class="slider-navigation">
                <div class="nav-indicator prevArrow">
                    <i class='bx bx-chevron-left'></i>
                </div>
                <div class="nav-indicator nextArrow">
                    <i class='bx bx-chevron-right'></i>
                </div>
            </div>
        </swiper>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper';
export default {

    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {

            modules: [
                Navigation,
                Autoplay
                 ]


        }
    },
    mounted() {
        this.products
    },
    computed: {
        products() {
            return this.$store.getters.getProducts.slice(0, 3);
        },
    }
};
</script>
<style src="../assets/styles/SliderHome.scss" lang="scss" scoped ></style>  