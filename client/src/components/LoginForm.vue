<template>
    <form @submit.prevent="$emit('login')" class="box">
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
                    <router-link to="/Home" class="button is-info">
                    Login
                    </router-link>
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
export default {
    props: {
        email: Object,
        password: Object
    }
}
</script>

<style>

</style>