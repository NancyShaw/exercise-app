<template>
    <div class="container">
        <h1 class="title is-h1">My super exciting exercise app!</h1>
        <h2 class="is-h2">Please be patient, WIP</h2>
        <div class="box">
            <form action="">
                <p>Already signed up?</p>
                <div class="field">
                    <div class="control">
                        <router-link to="/Login" class="button is-link">
                        Login
                        </router-link>
                    </div>
                </div>

                <p>Don't have an account yet?</p>
                <div class="field">
                    <div class="control">
                        <router-link to="/SignUp" class="button is-info">
                        Sign-up
                        </router-link>
                    </div>
                </div>
                    
            </form>
        </div>
        
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>