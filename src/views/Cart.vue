<template>
    <Breadcrumb pageTitle="Cart"  />
    <CartItem/>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue';
import CartItem from '../components/CartItem.vue'
export default {
    components:{
        Breadcrumb:Breadcrumb,
        CartItem:CartItem
    }
}
</script>