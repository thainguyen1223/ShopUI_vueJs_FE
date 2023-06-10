<template>
    <footer id="footer" class=" w-full py-4">
        <div class="container mx-auto h-full w-full">
            <div class="footer__wrap flex items-center justify-around">
        
                    <div class="footer-logo">
                        <img :src="require('@/assets/images/logo.svg')" alt="logo" class="w-full h-auto object-cover" />
                    </div>
                    
                    <div class="flex flex-col footer-widget">
                        <h3 class="my-3 text-lg uppercase">Contact</h3>
                        <ul class="footer-list">
                            <li class="py-2"><a href="https://www.facebook.com/duythai1472">Facebook</a></li>
                            <li class="py-2 w-72"><a href="#">Location: 148 Nguyen Huu Tho</a></li>
                            <li class="py-2"><a href="#">Phone: 0794540685</a></li>
                            <li class="py-2 w-72"><a href="#">Email: duythai147258@gmail.com</a></li>
                        </ul>
                    </div>
                    <div class="flex flex-col footer-widget">
                        <h3 class="my-3 text-lg uppercase">Newsletter</h3>
                        <div class="subscribe-style">
                            <p>Get E-mail updates about our latest shop and special offers.</p>
                            <div class="subscribe-form" @submit.prevent="onSubmit">
                                <form class="form-email flex flex-col">
                                    <input class="email-form" type="email" placeholder="Enter your email here.." name="email" required="email"   v-model="email" />
                                    <button class="button" name="subscribe">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
             
            </div>
        </div>
    </footer>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    const email = ref("");
    const onSubmit =()=>{
        console.log(email.value);
    }
    return {
      onSubmit,
      email,
    };
  },
};
</script>
<style src="../assets/styles/base.scss" lang="scss"></style>