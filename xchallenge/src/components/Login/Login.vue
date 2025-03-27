<script setup>
import { ref } from 'vue';
import Container from "../Container/Container.vue";

const email = ref('');
const senha = ref('');

</script>

<template>
    <section>
        <div class="container-login">
            <div id="col-1">
                <img src="../../assets/CarroseImagens/58.png" alt="">
            </div>
            <div id="col-2">
                <form action="">
                    <h1>Login</h1>

                    <input type="email" placeholder="email" v-model="email">
                    <input type="password" placeholder="password" v-model="senha">

                    <button>Entrar</button>
                </form>
            </div>
        </div>
    </section>
</template>

<style scoped>
.container-login {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.container-login h1 {
    font-family: TitilliumWebBold;
    color: #fff;
}

.col-1, .col-2 {
    width: 45%;
}

.col-2 {
    display: flex;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #010048;
    border-radius: 15px 0 0 15px;
    width: 700px;
    height: 440px;
    margin: 20% 0;
}

form input {
    width: 60%;
    height: 40px;
    margin: 20px 0;
    border-radius: 6px;
    outline: none;
    border: none;
    padding: 0 10px;
}

form button {
    width: 230px;
    height: 40px;
    background-color: #02FFD9;
    outline: none;
    border: none;
    border-radius: 6px;
}
</style>