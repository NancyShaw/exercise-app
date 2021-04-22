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
import { GetMyFeed } from "../models/Posts";
import { GetFriends } from "../models/Friends";

export default Vue.extend({
  data: ()=> ({
        friends: [],
        newPost: {
            user: {
            }
        },
        posts: []
    }),
    async mounted() {
        const friends = await GetFriends();
        this.friends = friends;
        this.posts = GetMyFeed();
    },
    components: {
      ContentCard,
      ContentCreation,
      FriendsList
    },
    methods: {
        addPost() {
            this.posts.unshift(this.newPost);
            this.newPost = { user: {} };
        },
        deletePost(i) {
          this.posts.splice(i, 1);
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