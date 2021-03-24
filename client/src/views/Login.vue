<template>
    <div class="container">
        <LoginForm :loginInfo="loginInfo" @login="login" />
    </div>
</template>

<script>
import { Login } from "../models/Session";
import LoginForm from "../components/LoginForm.vue";
export default {
    data: ()=> ({
        loginInfo: {}
    }),
    components: {
        LoginForm
    },
    methods: {
        login() {
            Login(this.loginInfo);
        }
    }
}
</script>

<style>
.container {
    margin-top: 10px;
}
</style>