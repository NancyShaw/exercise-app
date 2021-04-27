<template>
    <div class="container">
        <div class="columns">
            
            <div class="column is-one-half">
                <div class="box">
                    <button class="button is-info" @click="findFriends">Find a Friend!</button>
                </div>
                <div>
                    <SuggestedFriends :friend="friendSug" :toggle="suggestionToggle" />
                </div>

                
            </div>
            
            <div class="column is-one-half">
                <FriendsList :friends="friends" />
            </div>
        
        </div>  
    </div>
</template>

<script>
import FriendsList from '../components/FriendsList.vue';
import { GetFriends, FindNewFriends } from "../models/Friends";
import SuggestedFriends from "../components/SuggestedFriends.vue";
export default {
  data: ()=> ({
      newFriends: [],
      friends: [],
      friendSug: {},
      suggestionToggle: false,
  }),
  async mounted() {
      const friends = await GetFriends();
      this.friends = friends;
      console.log(this.friends);
  },
  components: {
    FriendsList,
    SuggestedFriends
  },
  methods: {
      async findFriends() {
          const friendResp = await FindNewFriends();
          this.friendSug = friendResp;
          this.suggestionToggle = true;
          console.log(friendResp);
      }
  }

}
</script>

<style>
.container {
    margin-top: 10px;
}
</style>