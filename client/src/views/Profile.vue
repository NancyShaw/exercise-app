<template>
  <div class="container">
      <div class="columns">
          <div class="column is-one-half">
              <ProfileCard :info="profileInfo" />
          </div>
          <div class="column is-one-half">
              <UpdateProfileInfo />
          </div>
      </div>

  </div>
</template>

<script>
import ProfileCard from "../components/ProfileCard.vue";
import UpdateProfileInfo from "../components/UpdateProfileInfo.vue";
import { GetProfileInfo } from "../models/ProfileInfo";

export default {
  data: ()=> ({
    profileInfo: {},
    //newInfo: {}
  }),
  mounted() {
    this.profileInfo = GetProfileInfo();
    console.log(this.profileInfo);
  },
  components: {
    ProfileCard,
    UpdateProfileInfo
  },
 /* methods: {
    updateProfileInfo() {
      UpdateInfo(this.newInfo);
    }
  }*/

}
</script>

<style>

</style>