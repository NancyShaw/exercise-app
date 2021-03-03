<template>
  <div class="container">
      <form id="login">
        <div class="field">
            <div class="control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="Username">
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
                <input class="input" type="password" placeholder="Password">
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
  </div>
</template>

<script>
export default {

}
</script>

<style>
#login {
    margin-top: 10px;
}
</style>