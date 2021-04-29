<template>
  <div class="container">
      <AccountCreation :newUser="newUser" @signup="signup" />
  </div>
</template>

<script>
//import { AddUser } from "../models/Users";
import AccountCreation from "../components/AccountCreation.vue";
import { AddUser } from "../models/Session";

export default {
    data: ()=> ({
        newUser: {}
    }),
    components: {
        AccountCreation
    },
    methods: {
        async signup() {
            await AddUser(this.newUser);
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