<template>
    <div>
        <Breadcrumb pageTitle="ALL PRODUCT" />
        <ProductShop/>
    </div>
</template>

<script>
import Breadcrumb from '../components/Breadcrumb.vue';
import ProductShop from '../components/Product/ProductShop.vue'
export default {
    components:{
    ProductShop: ProductShop,
    Breadcrumb
}
}
</script>