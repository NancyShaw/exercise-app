<template>
  <div class="container">
      <AccountCreation :newUser="newUser" @signup="signup" />
  </div>
</template>

<script>
import { AddUser } from "../models/Users";
import AccountCreation from "../components/AccountCreation.vue";
export default {
    data: ()=> ({
        newUser: {}
    }),
    components: {
        AccountCreation
    },
    methods: {
        signup() {
            AddUser(this.newUser);
            this.$router.push('/');
        }
    }
}
</script>

<style>
.container {
    margin-top: 10px;
}
</style>