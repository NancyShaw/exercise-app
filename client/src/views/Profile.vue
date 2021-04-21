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
import { GetUser, UpdateUser } from "../models/Users";

export default {
  data: ()=> ({
    profileInfo: {},
    newInfo: {}
  }),
  async mounted() {
    this.profileInfo = await GetUser();
    console.log(this.profileInfo);
  },
  components: {
    ProfileCard,
    UpdateProfileInfo
  },
  methods: {
    async updateProfileInfo() {
        console.log(`inside updateProfileInfo method, newInfo equals ${this.newInfo}`);
        console.log(this.newInfo);
        const updatedUser = await UpdateUser(this.newInfo);
        this.profileInfo = updatedUser;
    }
  }

}
</script>

<style>
.container {
    margin-top: 10px;
}
</style>