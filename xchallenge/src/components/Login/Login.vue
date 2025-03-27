<script setup>
import Container from "../Container/Container.vue"
</script>

<template>
    <section>
            <div class="container-login">
            <div id="col-1">

            </div>

            <div id="col-2">
                <form action="">
                    <input type="email">
                    <input type="password">

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

.col-2 {
    height: 100%;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #010048;
    height: 440px;
}
</style>