<script setup>
import Container from "../Container/Container.vue"
import { theme } from '../../utils/utils.js'
</script>

<template>
    <footer>
        <Container>
            <div class="container-footer">
                <div class="col-1">
                    <h2>WSTowers</h2>
                    <RouterLink>Skills</RouterLink>
                    <RouterLink>Parceiros</RouterLink>
                    <RouterLink>Visitantes</RouterLink>
                </div>

                <div class="col-2">
                    <h2>Redes Sociais</h2>
                    <a>Facebook</a>
                    <a>Twitter</a>
                    <a>YouTube</a>
                </div>


                <img v-if="theme !== 'dark'" src="../../assets/icons/logoxchalange-light.svg" alt="">
                <img v-else src="../../assets/icons/logoxchalange-dark.svg" alt="">
            </div>

        </Container>
    </footer>
</template>

<style scoped>
footer {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 285px;
    background-color: #010048;
}

.container-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
}

.container-footer img {
    width: 20%;
    height: fit-content;
}

.container-footer .col-1,
.col-2 {
    display: flex;
    flex-direction: column;
}

.container-footer>div {
    display: flex;
}
</style>