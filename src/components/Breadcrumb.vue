<template>
    <div class="breadcrumb-wrap p-10">
        <div class="container mx-auto flex justify-center">
            <ul class="breadcrumb-content flex items-center">
                <RouterLink to="/">
                    <li class="p-2 uppercase ">Home</li>
                </RouterLink>
                <li class="text-xl mt-1"><i class='bx bx-chevrons-right'></i></li>
                <li class=" ml-2 uppercase ">{{ pageTitle }}</li>

            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props: ["pageTitle"]
}
</script>
<style lang="scss">
.breadcrumb-wrap {
    background-color: #f7f7f7;

}

@media only screen and (max-width: 992px) {
    .breadcrumb-wrap {
        height: 40px;
        display: flex;
    }

    .breadcrumb-content li {
        font-size: 0.7rem;
    }
}
</style>