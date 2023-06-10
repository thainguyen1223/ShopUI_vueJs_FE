<template>
    <div class="homeblog-wrap">
        <div class="container mx-auto ">
            <div>
                <div class="text-center text-4xl font-bold m-14">
                    <h2>LATEST BLOG</h2>
                </div>
                <div class="homeblog flex">
                    <div class="homeblog-img">
                        <img :src="require('../assets//images/JBL_Quantum400_Lifestyle1.png')" alt="">
                    </div>
                    <div class="homeblog-info p-12">
                        <div class="text-3xl mb-8">
                            Lorem ipsum dolor sit amet
                        </div>
                        <div class="text-justify mb-11">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, eligendi dolore. Sapiente omnis
                            numquam mollitia asperiores animi, veritatis sint illo magnam, voluptatum labore, quam ducimus!
                            Nisi doloremque praesentium laudantium repellat.
                        </div>
                        <RouterLink to="./Blogs">
                            <button class="btn-flat btn-hover">read more</button>
                        </RouterLink>
                    </div>
                </div>
                <div class="homeblog flex flex-row-reverse">
                    <div class="homeblog-img">
                        <img :src="require('../assets/images/JBL_TUNE220TWS_Lifestyle_black.png')" alt="">
                    </div>
                    <div class="homeblog-info p-12">
                        <div class="text-3xl mb-8">
                            Lorem ipsum dolor sit amet
                        </div>
                        <div class="text-justify mb-11">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, eligendi dolore. Sapiente omnis
                            numquam mollitia asperiores animi, veritatis sint illo magnam, voluptatum labore, quam ducimus!
                            Nisi doloremque praesentium laudantium repellat.
                        </div>
                        <RouterLink to="./Blogs">
                            <button class="btn-flat btn-hover">read more</button>
                        </RouterLink>
                    </div>
                </div>
                <div class="section-footer">
                    <RouterLink to="./Blogs" class="btn-flat btn-hover">view all</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.homeblog-img,
.homeblog-info {
    width: 50%;
}
</style>