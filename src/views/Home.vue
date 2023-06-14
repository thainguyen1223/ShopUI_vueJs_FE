<template>
  <div class="home__wrap flex flex-col h-auto">

    <SliderHome  />
    <Support />
    <ProductMen />
    <ProductWomen />
  </div>
</template>

<script>
import SliderHome from '../components/SliderHome.vue';
import Support from '../components/Support.vue';
import ProductMen from '../components/Product/ProductMen.vue';
import ProductWomen from '../components/Product/ProductWomen.vue';


export default {
  components: {
    SliderHome: SliderHome,
    Support: Support,
    ProductMen:ProductMen,
    ProductWomen:ProductWomen
},

}
</script>

