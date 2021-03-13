<template>
  <div class="container">
      <p>View for finding friends</p>
      <form class="box">
            <div class="field">
                <p>Find Friends!</p>
                <label class="label">Search by name</label>
                <div>
                    <input class="input" type="text" placeholder="Red Fraggle" />
                </div>
            </div>
            <div class="field">
                <label class="label">Search by email</label>
                <div>
                    <input class="input" type="email" placeholder="redfraggle@cavern.com" />
                </div>
            </div>

            <button class="button is-info">Submit</button>
        </form>
        
        <friends-list />
      
  </div>
</template>

<script>
import FriendsList from '../components/FriendsList.vue'
export default {
  components: {
    FriendsList
  }

}
</script>

<style>

</style>