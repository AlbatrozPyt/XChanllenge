<script setup>
import { theme } from '../../utils/utils.js'
</script>

<template>
    <header>
        <nav>
            <RouterLink to="/">
                <img v-if="theme !== 'dark'" src="../../assets/icons/logoxchalange-light.svg" alt="">
                <img v-else src="../../assets/icons/logoxchalange-dark.svg" alt="">
            </RouterLink>

            <RouterLink to="/skills">Skills</RouterLink>

            <label for="">
                <input type="checkbox" name="" id="" @click="theme === 'dark' ? theme = 'light' : theme = 'dark'">
                {{ theme }}
            </label>

            <button>
                <RouterLink to="/login">
                    Login
                </RouterLink>
            </button>
        </nav>
    </header>
</template>

<style scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    height: 70px;
    background-color: #010048;
    color: #fff;
}

header nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    margin: auto 5%;
}

header nav img {
    width: 80px;
    height: fit-content;
}

header nav>a {
    font-family: Inter;
    text-decoration: none;
    color: #fff;
}


header nav button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 45px;
    background-color: #02FFD9;
    text-decoration: none;
    color: #010048;
    border-radius: 6px;
    font-family: TitilliumWebBold;
    font-size: 18px;
    border: none;
    outline: none;
}
</style>
