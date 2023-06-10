<template>
    <div class="support-area">
        <div class="container mx-auto  mt-6">
            <div class="support-wrap flex justify-around py-5 ">
                <div class="support-items flex" v-for="( items, i) in itemsSupport" :key="i">
                    <div class="support-icon flex items-center">
                        <img :src="require('../assets/images/' + items.icon)" alt="" class="animated h-11">
                    </div>
                    <div class="support-content ml-5">
                        <h5 class="text-lg ">{{ items.title }}</h5>
                        <p>{{ items.subTitle }}</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import { reactive } from 'vue'
import { ITEMS_SUPPORT_LAYOUT } from '../constants/index'
export default {
    setup() {
        const itemsSupport = reactive(ITEMS_SUPPORT_LAYOUT)
        return {
            itemsSupport,
        }
    }

}

</script>

<style lang="scss" src="../assets/styles/base.scss">

</style>