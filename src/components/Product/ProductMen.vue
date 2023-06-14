<template>
    <div class="product-area mt-10 backdrop-blur-xl" >
        <div class="flex flex-col items-center container mx-auto p-5">
            <div class="text-center text-4xl font-bold m-14">
                <h2>FASHION MEN</h2>
            </div>
            <div class="product-tab-content grid grid-cols-4 gap 4">
                <div v-for="(product, i) in products" :key="i">
                    <Product :product="product" />
                </div>
            </div>  

            <div class="section-footer mt-20">
                <RouterLink to="./Shop" class="btn-flat btn-hover">view all</RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
import Product from './Product.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';
export default {
    components: {
        Product: Product,
    },
 
    setup() {
        const store = useStore();
        
        store.dispatch("fetchProductMen")
        const products = computed(() => store.state.productMen.slice(0,8));
        return {
            products,
        
        };
    },
}

</script>

<style src="../../assets/styles/base.scss" lang="scss"></style>