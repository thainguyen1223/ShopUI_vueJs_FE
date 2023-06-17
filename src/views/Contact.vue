<template>
    <div>
        <Breadcrumb pageTitle="Contact us"/>
        <ContactItem/>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue';
import ContactItem from '../components/ContactItem.vue';
export default {
    components:{
        Breadcrumb:Breadcrumb,
        ContactItem:ContactItem,
    }
}
</script>