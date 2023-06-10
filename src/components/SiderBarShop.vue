<template>
    <div class="sidebar-box-wrap py-10 pl-20">
  
        <div class="sidebar-box mt-8">
            <h4 class=" text-2xl font-medium">Categories</h4>
            <ul class="sidebar-widget-list mt-2 ml-3">
                <li class="checkbox-rect" v-for="(category, index) in getCategoryList" :key="index">
                    <!-- <input type="checkbox" id="checkbox" v-model="checked" />
                        <label for="checkbox-rect1">All Categories</label> -->
                    <RouterLink :to="`?category=${category}`">
                        <span class="check-mark"></span>
                        {{ category }}
                    </RouterLink>
                </li>
            </ul>
        </div>
        <div class="sidebar-box mt-12">
            <h4 class=" text-2xl font-medium">Colors</h4>
            <ul class="sidebar-widget-list mt-2 ml-3">
                <li class="checkbox-rect" v-for="(color, index) in getColorList" :key="index">
                    <!-- <input type="checkbox" id="checkbox" v-model="checked" />
                    <label for="checkbox-rect1">All Colors</label> -->
                    <RouterLink :to="`?category=${color}`">
                        <span class="check-mark"></span>
                        {{ color }}
                    </RouterLink>
                </li>
            </ul>
        </div>
        <div class="sidebar-box mt-12">
            <h4 class=" text-2xl font-medium">Sizes</h4>
            <ul class="sidebar-widget-list mt-2 ml-3">
                <li class="checkbox-rect" v-for="(size, index) in getSizeList" :key="index">
                    <!-- <input type="checkbox" id="checkbox" v-model="checked" />
                    <label for="checkbox-rect1">All Sizes</label> -->
                    <RouterLink :to="`?category=${size}`">
                        <span class="check-mark"></span>
                        {{ size }}
                    </RouterLink>
                </li>

            </ul>
        </div>
    </div>
</template>

<script>

export default {
 
    computed: {
        getCategoryList() {
            return this.$store.getters.getCategoryList

        },
        getSizeList() {
            return this.$store.getters.getSizeList
        },
        getColorList() {
            return this.$store.getters.getColorList
        },

    },

    // methods: {
    //         slugify(text) {
    //             return text
    //                 .toString()
    //                 .toLowerCase()
    //                 .replace(/\s+/g, "-") // Replace spaces with -
    //                 .replace(/[^\w-]+/g, "") // Remove all non-word chars
    //                 .replace(/--+/g, "-") // Replace multiple - with single -
    //                 .replace(/^-+/, "") // Trim - from start of text
    //                 .replace(/-+$/, ""); // Trim - from end of text
    //         }
    //     }
}
</script>

<style src="../assets/styles/base.scss" lang="scss"></style>