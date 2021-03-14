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
          <ContentCard :post="posts" @delete="deletePost(i)" />
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
import { GetMyPosts } from "../models/Posts";

export default Vue.extend({
  data: ()=> ({
        friends: [
            {
                handle: "Alpha",
                src: "https://bulma.io/images/placeholders/128x128.png",
                alt: "Placeholder image"
            },
            {
                handle: "Beta",
                src: "https://bulma.io/images/placeholders/128x128.png",
                alt: "Placeholder image"
            },
            {
                handle: "Gamma",
                src: "https://bulma.io/images/placeholders/128x128.png",
                alt: "Placeholder image"
            },
            {
                handle: "Echo",
                src: "https://bulma.io/images/placeholders/128x128.png",
                alt: "Placeholder image"
            }
        ],
        newPost: {
            user: {
            }
        },
        posts: []
    }),
    mounted() {
        this.posts = GetMyPosts();
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