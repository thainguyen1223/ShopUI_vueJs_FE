<template>
    <div class="contactItem-wrap">
        <div class="container mx-auto mt-20">
            <div class="flex justify-center w-full flex-col mb-20">
                <div class="flex justify-center">
                    <div class="contact-map mb-6">
                        <iframe class="map-size"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.9300875096815!2d106.68530187389003!3d10.816662258452645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528e603b76523%3A0xbe6fed7960818fc6!2zMTIgTmd1eeG7hW4gQuG7iW5oIEtoacOqbSwgUGjGsOG7nW5nIDEsIEfDsiBW4bqlcCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2ssg!4v1681153576412!5m2!1sen!2ssg"
                            width="600" height="450" style="border:0;" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div class="flex justify-center gap-5">
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
                    <div class="contact-form">
                        <h2 class="mb-8 font-medium text-2xl mb-9">Get In Touch</h2>
                        <form class="contact-form-style">
                            <div class="flex flex-col">
                                <div class="flex justify-between">
                                    <div class="contact-touch">
                                        <input name="name" placeholder="Name*" type="text">
                                    </div>
                                    <div class="contact-touch">
                                        <input name="email" placeholder="Email*" type="email">
                                    </div>

                                </div>
                                <div class="contact-touch">
                                    <input name="subject" placeholder="Subject*" type="text" class="w-full">
                                </div>
                                <div class="contact-touch">
                                    <textarea name="message" placeholder="Your Message*" class="w-full"></textarea>
                                    <button class="submit" type="submit">SEND</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style src="../assets/styles/base.scss" lang="scss"></style>