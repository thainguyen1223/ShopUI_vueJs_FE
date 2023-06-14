<template>
    <div class="checkout-wrap">
        <div class="container mx-auto mt-20 mb-20">
            <div class="flex justify-center">
                <div class="billing-wrap flex justify-between gap-10 " v-if="products.length > 0">
                    <div class="billing-info-wrap">
                        <h3 class="text-xl font-medium ">Billing Details</h3>
                        <div class="billing flex flex-col mb-5 mt-10">
                            <div class="billing-responsive flex justify-between ">
                                <div class="billing-info mb-10">
                                    <label>First Name</label>
                                    <input type="text" v-model="posts.firstname" />
                                </div>
                                <div class="billing-info mb-10">
                                    <label>Last Name</label>
                                    <input type="text" v-model="posts.lastname">
                                </div>
                            </div>

                            <div class="billing-info mb-10">
                                <label>Street Address</label>
                                <input class="billing-address" placeholder="House number and street name" type="text"
                                    v-model="posts.street">
                            </div>

                            <div class="billing-info mb-10">
                                <label>Phone</label>
                                <input type="text" v-model="posts.phone">
                            </div>

                            <div class="billing-info mb-10">
                                <label>Email Address</label>
                                <input type="email" v-model="posts.email">
                            </div>

                            <div class="additional-info-wrap">
                                <h4 class="text-base font-medium">Additional information</h4>
                                <div class="additional-info flex flex-col">
                                    <label>Order notes</label>
                                    <textarea placeholder="Notes about your order, e.g. special notes for delivery. "
                                        name="message" v-model="posts.additional"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="your-order">
                        <h3 class="text-xl font-medium ">Your order</h3>
                        <div class="your-order-wrap mt-10">
                            <div class="your-order-product-info">
                                <div class="your-order-top">
                                    <ul>
                                        <li>Product</li>
                                        <li>Total</li>
                                    </ul>
                                </div>
                                <div class="your-order-middle">
                                    <ul>
                                        <li v-for="product in products" :key="product.id">
                                            {{ product.title }} X {{ product.cartQuantity }}
                                            <span>
                                                ${{ product.total.toFixed(2) }}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="your-order-bottom">
                                    <ul>
                                        <li class="your-order-shipping">Shipping</li>
                                        <li>Free shipping</li>
                                    </ul>
                                </div>
                                <div class="your-order-total">
                                    <ul>
                                        <li class="order-total">Total</li>
                                        <li>${{ total }}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="place-order mt-10">
                            <button class="btn-hover" @click="sendPostRequest">Place Order</button>
                        </div>
                    </div>
                </div>
                <div class="empty-cart flex flex-col justify-center" v-else>
                    <div class="icon flex justify-center">
                        <i class='bx bx-wallet'></i>
                    </div>
                    <h4>No items found in cart</h4>
                    <button class="empty-cart-button ">
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
import axios from 'axios';
export default {
    data() {
        return {
            posts: {
                firstname: "",
                lastname: "",
                street: "",
                phone: "",
                email: "",
                additional: "",

            }
        }
    },
    computed: {
        products() {
            return this.$store.state.cart;
        },
        total() {
            return this.$store.getters.getTotal
        }
    },
    methods: {
        async sendPostRequest() {
            const post = this.posts
            const product =this.products
            console.log(product);
            try {
                const res = await axios.post('http://localhost:3000/require-clothes/',
                    { firstname: post.firstname, lastname: post.lastname, phone: post.phone, street: post.street, email: post.email, additional: post.additional  ,product:product.title})
                res.data
                console.log(res.data);
            } catch (err) {
                console.log(err);
            }
        }
    },
}

</script>
<style src="../assets/styles/base.scss" lang="scss"></style>