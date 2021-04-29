<template>
    <form @submit.prevent="login" class="box">
        <div class="field">
            <div class="control has-icons-left has-icons-right">
                <input class="input" type="email" placeholder="Email" v-model="email" />
                <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
                </span>
            </div>
            </div>
            <div class="field">
            <div class="control has-icons-left">
                <input class="input" type="password" placeholder="Password" v-model="password" />
                <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
                </span>
            </div>
            </div>

            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-info">
                    Login
                    </button>
                </div>
                <div class="control">
                    <router-link to="/" class="button is-info is-light">
                    Cancel
                    </router-link>
                </div>
            </div>

    </form>
</template>

<script>
import { Login } from "../models/Session";

export default {
    data: ()=> ({
        email: null,
        password: null
    }),
    methods: {
        login() {
            Login(this.email, this.password);
        }
    }
}
</script>

<style>
.container {
    margin-top: 10px;
}
</style>