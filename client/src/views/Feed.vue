<template>
  <div class="container">
    <div class="columns">
      <div class="column is-one-quarter">
          <FriendsList :friends="friends" />
      </div>
        
          <div class="content-item">
            
            <myContentCard />
          
          <div class="column is-one-quarter"></div>
        </div>
    </div>
  </div>
</template>

<script>
import myContentCard from "../components/ContentCard";
import FriendsList from '../components/FriendsList.vue';
export default {
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
        ]
    }),
  components: {
    myContentCard,
    FriendsList
  }  
}
</script>

<style>
.container {
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>