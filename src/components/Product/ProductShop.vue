<template>
    <div class="Shop-area mt-10">
        <div class="container mx-auto">
            <div class="shop-content flex w-full">
                <div class="sidebar-style">
                    <SliderBarShop />
                </div>
                <div class="shop-product flex flex-col">
                    <div class="shop-top-product flex justify-between px-2">
                        <div class="search-product flex">
                            <input type="text" placeholder="Search Product" v-model="search"
                                @input="handleSearch" />
                            <div class="button-search"><font-awesome-icon icon="fa-soid fa-magnifying-glass" />
                            </div>
                        </div>
                        <div class="shop-select">
                            <select v-model="selectedPrice">
                                <option value="default">Default</option>
                                <option value="low2high">Price - Low to High</option>
                                <option value="high2low">Price - High to Low</option>
                            </select>
                        </div>
                        <div class="shop-tab flex justify-between w-20">
                            <button class="tab-shop" @click="layout = 'twoColumn'"
                                :class="{ active: layout === 'twoColumn' }">
                                <font-awesome-icon icon="fa-solid fa-table-cells-large" class="icon-shop" />
                            </button>
                            <button class="tab-shop" @click="layout = 'threeColumn'"
                                :class="{ active: layout === 'threeColumn' }">
                                <font-awesome-icon icon="fa-solid fa-table-cells" class="icon-shop" />
                            </button>
                            <button class="tab-shop" @click="layout = 'list'" :class="{ active: layout === 'list' }">
                                <font-awesome-icon icon="fa-solid fa-table-list" class="icon-shop" />
                            </button>
                        </div>
                    </div>
                    <div class="shop-bottom-product mt-8">
                        <div class="product-layout">
                            <div class=" grid grid-cols-3 gap-4 threeColumn" v-if="layout === 'threeColumn'">

                                <div v-for="product in filterItems" :key="product.id">
                                    <Product :product="product" :layout="layout" />
                                </div>
                            </div>

                            <div class="flex flex-col list" v-if="layout === 'list'">

                                <div v-for="product in filterItems" :key="product.id">
                                    <ProductShopList :product="product" :layout="layout" />
                                </div>


                            </div>

                            <div class="grid grid-cols-2  twoColumn" v-if="layout === 'twoColumn'">
                                <div v-for="product in filterItems" :key="product.id">
                                    <ProductTwoColumn :product="product" :layout="layout" />

                                </div>
                            </div>
                        </div>


                    </div>
                    <div class="pagination p-10 text-center flex items-center justify-center">
                        <img @click="previousPage" :disabled="currentPage === 1" src="../../assets/images/pre.svg" />
                        <span v-for="page  in totalPages" :key="page" class="mx-2"
                            :class="{ 'active': currentPage === page }" @click="updateCurrentPage(page)">{{ page }}</span>
                        <img @click="nextPage" :disabled="currentPage === totalPages" src="../../assets/images/next.svg" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>


import Product from './Product.vue';
import ProductShopList from './ProductShopList.vue';
import ProductTwoColumn from './ProductTwoColumn.vue';
import SliderBarShop from '../SiderBarShop.vue';
// import { useStore } from 'vuex';
export default {
    components: {
        Product: Product,
        ProductShopList: ProductShopList,
        ProductTwoColumn: ProductTwoColumn,
        SliderBarShop: SliderBarShop,

    },
    data() {
        return {
            search: "",
            currentPage: 1,
            perPage: 9,
            layout: "list",
            filterItems: [],
            categorySelect: '',
            selectedPrice: 'default',
        }
    },

    computed: {

        total() {
            return this.$store.getters.getTotalItemNo
        },
        products() {
            return this.$store.getters.getProducts;
        },

        totalPages() {
            return Math.ceil(this.$store.getters.getTotalItemNo / this.perPage);
        },

    },
    mounted() {

        this.filterItems = this.products
        this.filterItems = this.$store.dispatch('fetchProducts')
        // this.updateProductData()
    },
    methods: {
        handleSearch() {
            const searhValue = this.search

            this.$store.dispatch('fetchProducts', {
                searchValue: searhValue,

            })
        },
        paginateClickCallback(page) {
            this.currentPage = page

        },
        updateProductData() {
            this.paginateClickCallback(1);
            this.categorySelect = this.$route.query.category;
            if (this.categorySelect === "All Categories" || this.categorySelect === "All Colors" || this.categorySelect === "All Sizes") {
                this.categorySelect = "";
            }
            this.$store.dispatch('fetchProducts', {
                queryFilter: this.categorySelect,
                page: 1
            })

        },

        discountedPrice(product) {
            return product.price - (product.price * product.discount / 100)
        },

        previousPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
            this.$store.dispatch('fetchProducts', {
                queryFilter: this.categorySelect,
                page: this.currentPage
            })
            window.scrollTo(0, 0);
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
            this.$store.dispatch('fetchProducts', {
                queryFilter: this.categorySelect,
                page: this.currentPage
            })
            window.scrollTo(0, 0);
        },
        updateCurrentPage(page) {
            this.currentPage = page;
            console.log(page)
            this.$store.dispatch('fetchProducts', {
                queryFilter: this.categorySelect,
                page: this.currentPage,
                isVisible: true
            })
            window.scrollTo(0, 0);
        },

    },

    watch: {
        $route() {
            this.updateProductData()
        },


        products: {
            deep: true,
            handler(val) {
                this.filterItems = [...val]
            }
        },

        selectedPrice() {

            switch (this.selectedPrice) {
                case "low2high":
                    this.filterItems = this.filterItems.sort((a, b) => this.discountedPrice(a) - this.discountedPrice(b))
                    break;
                case "high2low":
                    this.filterItems = this.filterItems.sort((a, b) => this.discountedPrice(b) - this.discountedPrice(a))
                    break;
                default:
                    this.filterItems = [...this.products]
                // console.log(this.filterItems);
            }
        }
    },


};
</script>

<style lang="scss" src="../../assets/styles/base.scss"></style>