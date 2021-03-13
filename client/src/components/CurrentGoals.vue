<template>
  <div class="container">
      <article class="panel is-info">
        <p class="panel-heading">
            Current Goals
        </p>
        <div class="panel-block">
            
            
            <span class="icon is-left">
                <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            {{daily}}
        </div>
        <p class="panel-block" v-for="(other, i) in otherGoals" :key="i">
            <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            {{other.goal}}
        </p>
    </article>
  </div>
</template>

<script>

export default {
  props: {
    otherGoals: Array,
    daily: Number
  }
  

}
</script>

<style>

</style>