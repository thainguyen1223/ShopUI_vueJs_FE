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
                                    <input type="text" v-model="posts.firstname"
                                        :class="{ 'is-invalid': posts.errors.firstname }" />
                                    <span v-if="posts.errors.firstname" class="error">{{ posts.errors.firstname }}</span>

                                </div>
                                <div class="billing-info mb-10">
                                    <label>Last Name</label>
                                    <input type="text" v-model="posts.lastname">
                                    <span v-if="posts.errors.lastname" class="error">{{ posts.errors.lastname }}</span>
                                </div>
                            </div>

                            <div class="billing-info mb-10">
                                <label>Street Address</label>
                                <input class="billing-address" placeholder="House number and street name" type="text"
                                    v-model="posts.street">
                                <span v-if="posts.errors.street" class="error">{{ posts.errors.street }}</span>
                            </div>

                            <div class="billing-info mb-10">
                                <label>Phone</label>
                                <input type="text" v-model="posts.phone">
                                <span v-if="posts.errors.phone" class="error">{{ posts.errors.phone }}</span>
                            </div>

                            <div class="billing-info mb-10">
                                <label>Email Address</label>
                                <input type="email" v-model="posts.email">
                                <span v-if="posts.errors.email" class="error">{{ posts.errors.email }}</span>
                            </div>

                            <div class="additional-info-wrap">
                                <h4 class="text-base font-medium">Additional information</h4>
                                <div class="additional-info flex flex-col">
                                    <label>Order notes</label>
                                    <textarea placeholder="Notes about your order, e.g. special notes for delivery. "
                                        name="message" v-model="posts.additional"></textarea>

                                    <span v-if="posts.errors.additional" class="error">{{ posts.errors.additional }}</span>
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
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
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
                arraySp: [],
                errors: {}
            },
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
            const post = { ...this.posts };
            ;
            const product = [...this.products]
            let temp = []
            for (let i of product) {
                temp.push({
                    id: i._id,
                    sl: i.cartQuantity
                })
            }
            post.arraySp = [...temp]
            console.log(post);
            if (post.firstname || post.lastname || post.street || post.phone || post.email
            ) {
                post.errors.firstname = ''
                post.errors.lastname = ''
                post.errors.street = ''
                post.errors.phone = ''
                post.errors.email = ''
            }
            if (!post.firstname) {
                post.errors.firstname = 'FirstName is required.';
            }
            if (!post.lastname) {
                post.errors.lastname = 'Lastname is required.';
            }
            if (!post.street) {
                post.errors.street = 'Street is required.';
            }
            if (!post.phone ) {
                post.errors.phone = 'Phone is required.';
            }
            if (!post.email) {
                post.errors.email = 'Email is required.';
            }


            try {
                const res = await axios.post('http://localhost:3000/require-clothes/',
                    post)
                res.data

                toast.success('Successful order', {
                    autoClose: 1000,
                });

                console.log(res.data);
            } catch (err) {
                console.log(err);
                toast.error('Failed order', {
                    autoClose: 1000,
                });
            }
        }
    },
}

</script>
<style src="../assets/styles/base.scss" lang="scss"></style>