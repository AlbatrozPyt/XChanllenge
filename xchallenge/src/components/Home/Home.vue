<script setup>
import { ref } from 'vue'
import Container from "../Container/Container.vue"

const state1 = ref(false);
const state2 = ref(false);
const state3 = ref(false);
</script>

<template>
    <section class="carrossel">
        <div :class="['background', state1 ? 'translate' : null]">
            <img src="../../assets/CarroseImagens/background1.jpg" alt="">
            <img src="../../assets/CarroseImagens/img1.png" alt="">
        </div>

        <div :class="['background', state1 ? 'translate' : null]">
            <img src="../../assets/CarroseImagens/background2.jpg" alt="">
            <img src="../../assets/CarroseImagens/img2.png" alt="">
        </div>

        <div :class="['background', state1 ? 'translate' : null]">
            <img src="../../assets/CarroseImagens/background3.jpg" alt="">
            <img src="../../assets/CarroseImagens/img3.png" alt="">
        </div>  

        <div id="slider">
            <input type="radio" name="slider" id="" @click="state1 = !state1" checked>
            <input type="radio" name="slider" id="" @click="state2 = !state2">
            <input type="radio" name="slider" id="" @click="state3 = !state3">
        </div>
    </section>

    <section>
        <Container></Container>
    </section>
</template>

<style scoped>
.carrossel {
    position: relative;
    display: flex;
    align-items: end;
    justify-content: center;
    width: 100%;
    height: 600px;
    overflow: hidden;
}

.carrossel .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: .5s;
}

.carrossel .background:nth-child(1) {
    translate: 2000px;
}

.carrossel .background:nth-child(2) img:last-child{
    left: 36%;
    background: none;
    backdrop-filter: none;
}

.carrossel .background:nth-child(3) {
    translate: -2000px;
}

.carrossel .background img:first-child {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 600px;
}

.carrossel .background img:last-child {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #00000040;
    backdrop-filter: blur(10px);
}

#slider {
    display: flex;
    gap: 50px;
    position: relative;
    z-index: 3;
    padding: 50px;
}

.translate {
    translate: 0 !important;
    transition: .5s;
}
</style>
