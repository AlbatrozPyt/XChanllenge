<script setup>
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';
</script>

<template>
    <Header/>

    <div style="margin-top: 70px;">
        <RouterView/>
    </div>

    <Footer/>
</template>

<style scoped>

</style>
