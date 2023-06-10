<template>
       <Breadcrumb pageTitle="Wishlist"/>
        <WishlistItem/>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue';
import WishlistItem from '@/components/WishlistItem.vue';
export default{
    components:{
        Breadcrumb:Breadcrumb,
        WishlistItem:WishlistItem,
    }
}
</script>