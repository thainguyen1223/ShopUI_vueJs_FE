<template>
    <div class="login-form">
        <form class="flex flex-col">
            <input type="text" name="user-name" placeholder="Username" v-model="login.email"  >
            <input type="password" name="user-password" placeholder="Password" v-model="login.password">
            <div class="button-box">
                <div class="login-toggle-btn">
                    <input type="checkbox">
                    <label>Remember me</label>
                    <a href="#">Forgot Password?</a>
                </div>
                <div @click="fetchData" >Login</div>
            </div>
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
                const res = await axios.post('http://localhost:3000/auth/login/' ,{email:this.login.email , password:this.login.password});
                const token = res.data
                console.log(token);
                localStorage.setItem('token', token);
                if(token){
                    axios.get('http://localhost:3000/profile',{
                        headers:{
                            Authorization:`Bearer ${JSON.parse(token)}`
                        }
                    }).then((res)=>{
                        res.data;
                        axios.get(`http://localhost:3000/user/all/${res.data.sub}`).then((res) =>{
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