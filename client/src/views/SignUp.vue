<template>
  <div class="container">
      <form action="">
        <div class="field">
            <label class="label">Name</label>
            <div class="control">
                <input class="input" type="text" placeholder="Text input">
            </div>
        </div>

        <div class="field">
            <label class="label">Username</label>
            <div class="control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="Text input">
                <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
                </span>
                <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
                </span>
            </div>
        </div>

        <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
                <input class="input" type="email" placeholder="Email input">
                <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                <i class="fas fa-exclamation-triangle"></i>
                </span>
            </div>
        </div>

        <div class="field">
            <label class="label has-icons-right">
                Password
                <span class="icon is-small is-right">
                    <i class="fas fa-info-circle"></i>
                </span>
            </label>
            <div class="control has-icons-left">
                <input class="input" type="password" placeholder="Password">
                <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
                </span>
            </div>
        </div>
        <div class="field">
            <p>Re-type password</p>
            <div class="control has-icons-left">
                <input class="input" type="password" placeholder="Password">
                <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
                </span>
            </div>
        </div>


        <div class="field">
            <div class="control">
                <label class="checkbox">
                <input type="checkbox">
                I agree to the <a href="#">terms and conditions</a>
                </label>
            </div>
        </div>

        <div class="field is-grouped">
            <div class="control">
                <router-link to="/Home" class="button is-link">
                    Submit
                </router-link>
            </div>
            <div class="control">
                <router-link to="/" class="button is-link is-light">
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
</style>