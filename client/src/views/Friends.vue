<template>
    <div class="container">
        <div class="columns">
            
            <div class="column is-one-half">
                <FindFriends @search="findFriends" />
                <!-- display search results here -->
                
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
import FindFriends from "../components/FindFriends.vue";
export default {
  data: ()=> ({
      newFriends: [],
      friends: [],
  }),
  mounted() {
      this.friends = GetFriends();
  },
  components: {
    FriendsList,
    FindFriends
  },
  methods: {
      findFriends() {
          //this needs to pass the search name, and use the returned freinds
          FindNewFriends();
      }
  }

}
</script>

<style>
.container {
    margin-top: 10px;
}
</style>