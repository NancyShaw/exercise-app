<template>
  <div class="container">

      <ProfileCard :info="profileInfo" />

      <form class="box">
            <div class="field">
                <p>Edit Profile info</p>
                <label class="label">Change email address for this account</label>
                <div>
                    <input class="input" type="email" placeholder="someone@somewhere.com" />
                </div>
                <p class="help">Must be a valid email address</p>
            </div>
            <div class="field">
                <label class="label">Change your profile Picture</label>
                <div>
                    <input class="input" type="text" placeholder="Picture URL" />
                </div>
            </div>

            <button class="button is-info">Submit</button>
        </form>

  </div>
</template>

<script>
import ProfileCard from "../components/ProfileCard.vue";
import { GetProfileInfo } from "../models/ProfileInfo";

export default {
  data: ()=> ({
    profileInfo: {}
  }),
  mounted() {
    this.profileInfo = GetProfileInfo();
    console.log(this.profileInfo);
  },
  components: {
    ProfileCard
  }

}
</script>

<style>

</style>