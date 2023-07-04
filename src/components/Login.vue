<template>
    <div class="login-form">
        <form class="flex flex-col">
            <input type="text" name="user-name" placeholder="Email" v-model="login.email"  >
            <input type="password" name="user-password" placeholder="Password" v-model="login.password">
   
                <div class="login-toggle-btn flex justify-between">
                    <div>

                        <input type="checkbox">
                        <label>Remember me</label>
                    </div>
                    <a href="#">Forgot Password?</a>
                </div>
  
            <div class="button-box mt-3" @click="fetchData" >Login</div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
       
            login: {
                email: "",
                password: ""
            }
        }
    },

    methods: {
        async fetchData() {
            this.login;
            try {
                const res = await axios.post('https://shop-ui-vue-js-be.vercel.app/auth/login/' ,{email:this.login.email , password:this.login.password});
                const token = res.data
                console.log(token);
                localStorage.setItem('token', JSON.stringify(token.access_token));
                if(token){
                    axios.get('https://shop-ui-vue-js-be.vercel.app/profile',{
                        headers:{
                            Authorization:`Bearer ${JSON.parse(token)}`
                        }
                    }).then((res)=>{
                        res.data;
                        axios.get(`https://shop-ui-vue-js-be.vercel.app/user/all/${res.data.sub}`).then((res) =>{
                          const profile =res.data
                          localStorage.setItem('profile' ,profile)
                        })
                    } 
                    )
                }
            } catch (err) {
                console.log(err);
            }
        },
    }
}
</script>