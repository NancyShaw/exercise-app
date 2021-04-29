<template>
        <form @submit.prevent="$emit('signup')" class="box">
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Name" v-model="newUser.name" />
                </div>
            </div>

            <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left has-icons-right">
                    <input class="input" type="email" placeholder="Email" v-model="newUser.email" />
                    <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                    <i class="fas fa-exclamation-triangle"></i>
                    </span>
                </div>
            </div>

            <div class="field">
                <label class="label">Handle</label>
                <div class="control has-icons-left has-icons-right">
                    <input class="input" type="text" placeholder="Handle" v-model="newUser.handle" />
                    <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                    </span>
                    <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                    </span>
                </div>
            </div>

            <div class="field">
                <label class="label has-icons-right">
                    Password
                  <!--  <span class="icon is-small is-right">
                        <i class="fas fa-info-circle"></i>
                    </span> commenting this out until I have time to create the toaster tool tip-->
                </label>
                <div class="control has-icons-left">
                    <input class="input" type="password" placeholder="Password" v-model="newUser.password" />
                    <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                    </span>
                </div>
            </div>
        <!--    <div class="field">
                <p>Re-type password</p>
                <div class="control has-icons-left">
                    <input class="input" type="password" placeholder="Password" />
                    <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                    </span>
                </div>
            </div>-->


        <!--    <div class="field">
                <div class="control">
                    <label class="checkbox">
                    <input type="checkbox">
                    I agree to the <a href="#">terms and conditions</a>
                    </label>
                </div>
            </div>-->

            <div class="field is-grouped">
                <button class="button is-info">Submit</button>
                <div class="control">
                    <router-link to="/" class="button is-link is-light">
                        Cancel
                    </router-link>
                </div>
            </div>
        </form>
</template>

<script>
export default {
    props: {
        newUser: Object
    }
}
</script>

<style>

</style>