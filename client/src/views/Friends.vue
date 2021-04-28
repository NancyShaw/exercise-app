<template>
    <div class="container">
        <div class="columns">
            
            <div class="column is-one-half">
                <div class="box">
                    <button class="button is-info" @click="findFriends">Find a Friend!</button>
                </div>
                <div>
                    <SuggestedFriends :friend="friendSug" :toggle="suggestionToggle" @add="addFriend" />
                </div>

                
            </div>
            
            <div class="column is-one-half">
                <FriendsList :friends="friends" :toggle="delFriendsToggle" @delete="deleteFriend" />
            </div>
        
        </div>  
    </div>
</template>

<script>
import FriendsList from '../components/FriendsList.vue';
import { GetFriends, FindNewFriends, AddFriend, DeleteFriend } from "../models/Friends";
import SuggestedFriends from "../components/SuggestedFriends.vue";
import { IsNullOrEmptyObject } from "../models/MyErrors";

export default {
  data: ()=> ({
      newFriends: [],
      friends: [],
      friendSug: {},
      suggestionToggle: false,
      delFriendsToggle: true,
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
         
          if (!IsNullOrEmptyObject(friendResp)) {
              this.friendSug = friendResp;
              this.suggestionToggle = true;
          }
      },
      async addFriend() {
          console.log(this.friendSug.user);
          const friend = await AddFriend({handle: this.friendSug.user.handle});
          console.log(`got response from AddFriend with newly added friend: ${friend}`);
          
          if (!IsNullOrEmptyObject(friend)) {
            this.friends.unshift(friend);
            console.log(`Friend should have been added correctly to friends list: ${this.friends}`);
          }
          this.suggestionToggle = false;
          this.friendSug = {};
      },
      async deleteFriend(i) {
          
          const handle = await DeleteFriend({handle: i.user.handle});
          //if response is ok, delete friend from list here too
          
          const toDel = this.friends.find(f=> f.user.handle == handle.handle);
          
          this.friends.splice(this.friends.indexOf(toDel), 1);
          console.log(`user with handle ${handle.handle} was removed from friends`);
      }


  }

}
</script>

<style>
.container {
    margin-top: 10px;
}
</style>