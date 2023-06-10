<template>
    <Breadcrumb pageTitle="Checkout"/>
    <CheckoutItem/>
</template>


<script>
import Breadcrumb from '@/components/Breadcrumb.vue';
import CheckoutItem from '@/components/CheckoutItem.vue';
export default {
    components:{
        Breadcrumb:Breadcrumb,
        CheckoutItem:CheckoutItem,
    }
}
</script>