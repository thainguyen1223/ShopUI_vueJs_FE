<template>
    <div class="contactItem-wrap mt-10">
        <div class="container mx-auto ">
            <div class="flex justify-center w-full flex-col mb-20">
                <div class="flex justify-center">
                    <div class="contact-map mb-6">
                        <iframe class="map-size"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.9300875096815!2d106.68530187389003!3d10.816662258452645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528e603b76523%3A0xbe6fed7960818fc6!2zMTIgTmd1eeG7hW4gQuG7iW5oIEtoacOqbSwgUGjGsOG7nW5nIDEsIEfDsiBW4bqlcCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2ssg!4v1681153576412!5m2!1sen!2ssg"
                            width="600" height="450" style="border:0;" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div class="contact-FeedBack flex justify-center gap-5">
                    <div class="contact-info-wrap">
                        <div class="single-contact-info">
                            <div class="contact-icon">
                                <i class='bx bxs-phone'></i>
                            </div>
                            <div class="contact-info-dec">
                                <p>+084 794 540 685 </p>
                                <p>+084 798 271 526</p>
                            </div>
                        </div>
                        <div class="single-contact-info">
                            <div class="contact-icon">
                                <i class='bx bx-globe'></i>
                            </div>
                            <div class="contact-info-dec">
                                <p><a href="#">duythai147258@email.com</a></p>
                            </div>
                        </div>
                        <div class="single-contact-info">
                            <div class="contact-icon">
                                <i class='bx bx-map'></i>
                            </div>
                            <div class="contact-info-dec">
                                <p>Address goes here, </p>
                                <p>12 Nguyen Binh Khiem TP.Ho Chi Minh.</p>
                            </div>
                        </div>
                        <div class="contact-social text-center mt-4">
                            <h3 class="font-medium text-2xl leading-none mb-8">Follow Us</h3>
                            <ul>
                                <li><a href="#"><i class='bx bxl-facebook-circle'></i></a></li>
                                <li><a href="#"><i class='bx bxl-telegram'></i></a></li>
                                <li><a href="#"><i class='bx bxl-instagram'></i></a></li>

                            </ul>
                        </div>
                    </div>
                    <div class="contact-form-wrap">
                        <h2 class=" font-medium text-2xl ">Get In FeedBack</h2>
                        <div class="contact-form-style flex-col mb-5 mt-10">
                            <div class="contact-flex flex justify-between mb-5 ">
                                <div class="contact-name">
                                    <input name="name" placeholder="Name*" type="text" v-model="feedback.name">
                                    <p v-if="feedback.errors.name" class="error ml-2">{{ feedback.errors.name }}</p>
                                </div>
                          
                                <div class="contact-email">
                                    <input name="email" placeholder="Email*" type="email" v-model="feedback.email">
                                    <p v-if="feedback.errors.email" class="error ml-2">{{ feedback.errors.email }}</p>
                                </div>
                            </div>

                            <div class="contact-subject mb-5">
                                <input name="subject" placeholder="Subject*" type="text" class="w-full outline-none"
                                    v-model="feedback.subject">
                                
                            </div>
                            <div class="contact-message">
                                <textarea name="message" placeholder="Your Message*" class="w-full"
                                    v-model="feedback.message"></textarea>
                                    <span v-if="feedback.errors.message" class="error ml-2">{{ feedback.errors.message }}</span>
                                <div class="submit" type="submit" @click="summitFeedBack">SEND</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style src="../assets/styles/base.scss" lang="scss"></style>


<script>
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
export default {
    data() {
        return {
            feedback: {
                name: "",
                email: "",
                subject: "",
                message: "",
                errors:{}
            }
        }
    },
    methods: {
        async summitFeedBack() {
            const feedback = { ...this.feedback }
            console.log(feedback);
            if (feedback.name || feedback.email|| feedback.message 
            ) {
                feedback.errors.name = ''
                feedback.errors.email = ''
                feedback.errors.message = ''
            
            }
            if (!feedback.name) {
                feedback.errors.name = 'Name is required.';
            }
            if (!feedback.email) {
                feedback.errors.email = 'Email is required.';
            }
            if (!feedback.message) {
                feedback.errors.message = 'Message is required.';
            }
      
            try {
                const res = await axios.post('https://shop-ui-vue-js-be.vercel.app/feedback',
                    feedback)
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
    }
}
</script>