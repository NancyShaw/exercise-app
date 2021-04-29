<template>
  <div id="my-wall">
    <div class="columns">
      <div class="column is-one-quarter">
          <div class="content-item">
              <FriendsList :friends="friends" />
          </div>
      </div>
      <div class="column">

        <div class="content-item">
            <ContentCreation :newPost="newPost" @add="addPost" />
        </div>

        <div class="content-item" v-for="(post, i) in posts" :key="i">
          <ContentCard :post="post" @delete="deletePost(i)" />
        </div>
      </div>
      <div class="column is-one-quarter">
          <div class="content-item">
            <ContentCard :post="newPost" />
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import ContentCard from "../components/ContentCard.vue";
import ContentCreation from "../components/ContentCreation.vue";
import FriendsList from '../components/FriendsList.vue';
import { AddShare, GetMyFeed, DeleteShare } from "../models/Posts";
import { GetFriends } from "../models/Friends";
import Session from "../models/Session";
import { IsNullOrEmptyObject } from "../models/MyErrors";

export default Vue.extend({
  data: ()=> ({
        friends: [],
        newPost: {
            user: Session.user
        },
        posts: []
    }),
    async mounted() {
        const friends = await GetFriends();
        this.friends = friends;
        this.posts = await GetMyFeed();
        console.log(this.posts);
    },
    components: {
      ContentCard,
      ContentCreation,
      FriendsList
    },
    methods: {
        async addPost() {
            const share = await AddShare(this.newPost);
            console.log(share);
            this.posts.unshift(share);
            this.newPost = { user: Session.user };
        },
        async deletePost(i) {
          console.log(`logging i`);
          console.log(i);
          
          const response = await DeleteShare(this.posts[i].id);
          //if the response was null or empty, an error was thrown by the server
          if (!IsNullOrEmptyObject(response)) {
              this.posts.splice(i, 1);
          }
        }
    }  
})
</script>

<style>
.content-item {
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>