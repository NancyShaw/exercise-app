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
import { GetUser } from "../models/Users";
import Session, { UpdateUser } from "../models/Session";

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
        const updatedUser = await UpdateUser(this.newInfo);
        this.profileInfo = updatedUser;
        Session.user = updatedUser;
    }
  }

}
</script>

<style>
.container {
    margin-top: 10px;
}
</style>