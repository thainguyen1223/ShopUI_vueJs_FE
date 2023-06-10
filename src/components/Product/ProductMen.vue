<template>
    <div class="product-area mt-10 backdrop-blur-xl" >
        <div class="flex flex-col items-center container mx-auto p-5">
            <div class="text-center text-4xl font-bold m-14">
                <h2>PRODUCT</h2>
            </div>
            <div class="product-tab-content grid grid-cols-4 gap 4">
                <div v-for="(product, i) in products" :key="i">
                    <Product :product="product" />
                </div>
            </div>  

            <div class="section-footer">
                <RouterLink to="./Shop" class="btn-flat btn-hover">view all</RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
import Product from './Product.vue';

export default {
    components: {
        Product: Product,
    },


    computed: {
        products() {
            return this.$store.getters.getProducts.slice(0,8);
        },
    },
    mounted(){

    },
    methods:{
     
    }
}

</script>

<style src="../../assets/styles/base.scss" lang="scss"></style>