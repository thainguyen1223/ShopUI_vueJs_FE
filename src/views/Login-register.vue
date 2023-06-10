<template>
    <Breadcrumb pageTitle="login-register" />

    <div class="login-register-wrap">
        <div class="container mx-auto mt-20 mb-20">
            <div class="login-register-tab-list flex justify-center mb-10">
                <button @click="Layout='Login'" :class="{ active: Layout === 'Login' }">
                    Login
                </button>
                <button  @click="Layout='Register'" :class="{ active: Layout === 'Register' }">
                    Register
                </button>
            </div>

            <div class="flex justify-center mt-5 ">
                <div class="login-register-size" v-if="Layout ==='Login'">
                    <Login/>
                </div>
                <div class="login-register-size" v-if="Layout ==='Register'">
                    <Register/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '../components/Breadcrumb.vue';
import Login from '../components/Login.vue';
import Register from "../components/Register.vue"
export default {
    components: {
        Breadcrumb: Breadcrumb,
        Login:Login,
        Register:Register,
    },
    data() {
            return {
                Layout: "Login",
            };
        },
}
</script>

<style src="../assets/styles/base.scss" lang="scss">

</style>