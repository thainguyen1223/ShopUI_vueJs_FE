<template>
    <div class="register-form">
        <form class="flex flex-col">
            <input type="text" name="user-name" placeholder="Username" v-model="Register.name">
            <input type="password" name="user-password" placeholder="Password" v-model="Register.password">
            <input name="user-email" placeholder="Email" type="email" v-model="Register.email">
            <div class="button-box" @click="createUser">
                Register
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
       
            Register: {
                name:"",
                password: "",
                email: "",
            }
        }
    },

    methods: {
        async createUser() {
            const Register ={...this.Register}
            console.log(Register);
            try {
                const res = await axios.post('https://shop-ui-vue-js-be.vercel.app/user' ,Register );
                res.data
                console.log(res.data);
                
  
            } catch (err) {
                console.log(err);
            }
        },
    }
}
</script>