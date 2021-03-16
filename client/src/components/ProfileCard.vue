<template>
    <div class="card">

     <!-- <div class="card-image">
        <figure class="image">
          <img :src="profileInfo.pic" :alt="profileInfo.nomedeplume" />
        </figure>
      </div>-->
      <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
    </figure>
  </div>
      <div class="card-content">
        <div class="content">
            <article class="panel is-info">
               <p class="panel-heading">
                    Friends
                </p>
                <p class="panel-block">
                    <span class="panel-icon">
                        <i class="fas fa-book" aria-hidden="true"></i>
                    </span>
                    {{profileInfo.nomedeplume}}
                </p>
                <p class="panel-block">
                    <span class="panel-icon">
                        <i class="fas fa-book" aria-hidden="true"></i>
                    </span>
                    {{profileInfo.email}}
                </p>
                <p class="panel-block">
                    <span class="panel-icon">
                        <i class="fas fa-book" aria-hidden="true"></i>
                    </span>
                    {{profileInfo.handle}}
                </p>
            </article>
            
        </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        profileInfo: Object
    }
}
</script>

<style>

</style>