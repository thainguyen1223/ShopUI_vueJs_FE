<template>
    <div>
        <Header />

        <slot />

        <Footer />
    </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import Header from '../components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
    components: {
        Header: Header,
        Footer: Footer
    },
    setup() {
    const route = useRoute();

    return {
      meta: computed(() => route.meta),
    };
  },
}
</script>
