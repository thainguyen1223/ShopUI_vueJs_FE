<template>
  <keep-alive>

    <component :is="layout">
      <router-view />
    </component>
  </keep-alive>
</template>

<script>
// import Header from './components/Header.vue';
// import Footer from './components/Footer.vue';
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import { PUBLIC_LAYOUT } from '../src/constants/index'

export default {
  // components: {
  //   Header: Header,
  //   Footer: Footer
  // },
  setup() {
    const route = useRoute()
    // console.log(route);
    return {
      layout: computed(() => (route.meta.layout || PUBLIC_LAYOUT) + "-layout")
    }
  }
}

</script>