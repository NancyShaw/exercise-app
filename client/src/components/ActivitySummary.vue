<template>
    <div class="container">
      <article class="panel is-info">
        <p class="panel-heading">
            Activity Summary
        </p>
        <div class="panel-block">
            
            
            <span class="icon is-left">
                <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            {{total}}
        </div>
        <p class="panel-block" v-for="(item, i) in activities" :key="i">
            <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            {{item.activity}}
        </p>
    </article>
  </div>
</template>

<script>
export default {
    props: {
        activities: Array,
        total: Number
    }
}
</script>
    
<style>

</style>