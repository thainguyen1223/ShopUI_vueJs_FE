<template>
    <div class="Cart-wrap">
        <div class="container mx-auto mt-20 mb-20">     
                <div class="cart-content">
                    <div class="flex flex-col pt-10" v-if="products.length > 0">
                        <h3 class="text-2xl">Your cart items</h3>
                        <div class="table-content table-responsive mt-4">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Product Name</th>
                                        <th>Until Price</th>
                                        <th>Qty</th>
                                        <th>Subtotal</th>
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
                                            <span>
                                                <del>
                                                    ${{ product.discount }}
                                                </del>
                                            </span>
                                            <span>
                                                ${{ product.price }}
                                            </span>

                                        </td>
                                        <td class="product-quantity">
                                            <div class="cart-plus-minus">
                                                <button class="dec qtybutton" @click="decrementProduct(product)">-</button>
                                                <input class="cart-plus-minus-box" type="text" readonly
                                                    :value="product.cartQuantity">
                                                <button class="inc qtybutton" @click="incrementProduct(product)">+</button>
                                            </div>
                                        </td>
                                        <td class="product-subtotal">${{ product.total }}</td>
                                        <td class="product-remove" @click="removeProduct(product)">
                                            <i class='bx bx-trash'></i>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="cart-items flex justify-between mt-8">
                            <div class="cart-shiping-update p-2">
                                <RouterLink to="/shop">Continue Shopping</RouterLink>
                            </div>
                            <div class="cart-checkout p-2">
                                <RouterLink to="/checkout">Check out</RouterLink>
                            </div>
                        </div>
                    </div>

                    <div class="empty-cart flex flex-col items-center" v-else>
                        <div class="icon flex justify-center">
                            <i class='bx bx-cart'></i>
                        </div>
                        <h4 class="text-center">No items found in cart</h4>
                        <button class="empty-cart-button text-center">
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
            return this.$store.state.cart
        },
    },
    data() {
        return {
            singleQuantity: 1
        }
    },
    methods: {
        incrementProduct(product) {
            const prod = { ...product, cartQuantity: 1 }
            if (product.cartQuantity < product.quantity) {
                this.$store.dispatch('addToCartItem', prod)
            }
        },

        decrementProduct(product) {
            const prod = { ...product, cartQuantity: 1 }
            if (product.cartQuantity > 1) {
                this.$store.dispatch('decreaseProduct', prod)
            }
        },
        removeProduct(product) {
            this.$store.dispatch('removeProductFromCart', product)
        }
    }
}
</script>
<style src="../assets/styles/base.scss" lang="scss"></style>