<template>
  <div class="container">
    <div class="columns">
      <div class="column is-one-quarter">
      </div>
        
          <div class="content-item">
            
            <myContentCard />
          
          <div class="column is-one-quarter"></div>
        </div>
    </div>
  </div>
</template>

<script>
import myContentCard from "../components/ContentCard"
export default {
  components: {
    myContentCard
  }
}
</script>

<style>
.content-item {
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>