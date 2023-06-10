<template>
  <div class="home__wrap flex flex-col h-auto">

    <SliderHome  />
    <Support />
    <ProductMen />

  </div>
</template>

<script>
import SliderHome from '@/components/SliderHome.vue';
import Support from '@/components/Support.vue';
import ProductMen from '../components/Product/ProductMen.vue';


export default {
  components: {
    SliderHome: SliderHome,
    Support: Support,
    ProductMen: ProductMen,

},

}
</script>

