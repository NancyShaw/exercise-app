<template>
  <div class="container">
      <div class="columns">
          <div class="column is-one-half">
              <ProfileCard :info="profileInfo" />
          </div>
          <div class="column is-one-half">
              <UpdateProfileInfo :newInfo="newInfo" @update="updateProfileInfo" />
          </div>
      </div>

  </div>
</template>

<script>
import ProfileCard from "../components/ProfileCard.vue";
import UpdateProfileInfo from "../components/UpdateProfileInfo.vue";
import { GetProfileInfo, UpdateInfo } from "../models/ProfileInfo";

export default {
  data: ()=> ({
    profileInfo: {},
    newInfo: {}
  }),
  mounted() {
    this.profileInfo = GetProfileInfo();
    console.log(this.profileInfo);
  },
  components: {
    ProfileCard,
    UpdateProfileInfo
  },
  methods: {
    updateProfileInfo() {
      UpdateInfo(this.newInfo);
      console.log(this.newInfo);
    }
  },
  watch: {
    profileInfo:function(val, oldVal) {
      console.log("profile data changed from " + oldVal.pic + " to " + val.pic);
      this.profileInfo = GetProfileInfo();
    },
    deep: true,
    immediate: true 
  }

}
</script>

<style>
.container {
    margin-top: 10px;
}
</style>