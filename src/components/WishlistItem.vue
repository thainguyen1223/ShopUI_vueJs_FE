<template>
    <div class="wishlist-wrap">
        <div class="container mx-auto mt-20 mb-20 ">
            <div class="flex justify-center">
                <div class="flex flex-col pt-10" v-if="products.length > 0">
                    <h3 class="text-2xl">Your wishlist items</h3>
                    <div class="table-content table-responsive mt-4">
                        <table>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Product Name</th>
                                    <th>Until Price</th>
                                    <th>add to cart</th>
                                    <th>action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="product in products" :key="product._id">
                                    <td class="product-thumbnail">
                                        <img :src="product.images[0]" alt="" />
                                    </td>
                                    <td class="product-name">
                                        <RouterLink :to="`/productDetail/${product._id}`">
                                            {{ product.title }}
                                        </RouterLink>
                                    </td>
                                    <td class="product-price-cart">
                                        <span>${{ discountedPrice(product) }}</span>
                                        <del v-if="product.discount > 0">${{ product.price }}</del>

                                    </td>
                                    <td class="product-wishlist">
                                        <button @click="addToCart(product)">add to cart</button>
                                    </td>

                                    <td class="product-remove" @click="removeProduct(product)">
                                        <i class='bx bx-trash'></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

                <div class="empty-cart flex flex-col items-center" v-else>
                    <div class="icon flex justify-center">
                        <i class='bx bx-heart '></i>
                    </div>
                    <h4>No items found in wishlist</h4>
                    <button class="empty-cart-button text-center ">
                        <RouterLink to="/Shop">
                            shop now
                        </RouterLink>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {

    computed: {
        products() {
            return this.$store.state.wishlist;
        },
    },
        methods: {
            discountedPrice(product) {
                return product.price - (product.price * product.discount / 100)
            },
            addToCart(product) {
                const prod = { ...product, cartQuantity: 1 }

                this.$store.dispatch('addToCartItem', prod)
                console.log(prod);
            },
            removeProduct(product) {
                this.$store.dispatch('removeProductFromWishlist', product)
            }
        }
    }
</script>
<style src="../assets/styles/base.scss" lang="scss"></style>