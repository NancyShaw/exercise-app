<template>
  <div class="container">
      
     <!-- <div class="card">
        <header class="card-header">
          <p class="card-header-title has-background-link has-text-link-light">
            Profile info
          </p>
        </header>
        <div class="card-content has-background-link-light has-text-link-dark">
          <div class="content">
            
            <div>Name</div>
            <div>Username</div>
            <div>Email</div>
            <div>Photo</div>
          </div>
        </div>
      </div>-->

      <ProfileCard :profileInfo="profileInfo" />

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
    profileInfo: []
  }),
  mounted() {
    this.profileInfo = GetProfileInfo();
  },
  components: {
    ProfileCard
  }

}
</script>

<style>

</style>