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
                <div>
                    <section>
                        <p class="content"><b>Selected:</b> {{ selected }}</p>
                        <b-field label="Find a JS framework">
                            <b-autocomplete
                                rounded
                                v-model="name"
                                :data="searchResp"
                                placeholder="e.g. jQuery"
                                icon="magnify"
                                clearable
                                @typing="searchFriends"
                                @select="option => selected = option">
                                <template #empty>No results found</template>
                            </b-autocomplete>
                        </b-field>
                    </section>
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
//import FriendSearch from "../components/FriendSearch.vue"
import { SearchUsers } from '../models/Users';

export default {
  data: ()=> ({
      newFriends: [],
      friends: [],
      friendSug: {},
      suggestionToggle: false,
      delFriendsToggle: true,
      searchResp: [],
      data: [],
                name: '',
                selected: null
            
  }),
  async mounted() {
      const friends = await GetFriends();
      this.friends = friends;
      console.log(this.friends);
  },
  components: {
    FriendsList,
    SuggestedFriends,
    //FriendSearch,
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
          const friend = await AddFriend({handle: this.friendSug.user.handle});
          
          if (!IsNullOrEmptyObject(friend)) {
            this.friends.unshift(friend);
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
      },
      async searchFriends(searchString) {
          const respList = await SearchUsers(searchString);
          console.log(respList);
          this.searchResp = []
          respList.forEach((user) => this.searchResp.push(user.user.handle));
          //this.searchResp.push(respList);
      },
     /* computed: {
            filteredDataArray() {
                this.data.filter((option) => {
                    return option
                        .toString()
                        .toLowerCase()
                        .indexOf(this.name.toLowerCase()) >= 0
                })
            }
        } */


  }

}
</script>

<style>
.container {
    margin-top: 10px;
}
</style>