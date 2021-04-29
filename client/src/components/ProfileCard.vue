<template>
    <div class="card">

        <div class="card-image">
            <figure class="image is-square">
                <img :src="info.pic" :alt="info.name">
            </figure>
        </div>
        <div class="card-content">
            <div class="content">
                <article class="panel is-info">
                <p class="panel-heading">
                        Profile Info
                    </p>
                    <p class="panel-block">
                        <span class="panel-icon">
                            <i class="fas fa-book" aria-hidden="true"></i>
                        </span>
                        {{info.name}}
                    </p>
                    <p class="panel-block">
                        <span class="panel-icon">
                            <i class="fas fa-book" aria-hidden="true"></i>
                        </span>
                        {{info.email}}
                    </p>
                    <p class="panel-block">
                        <span class="panel-icon">
                            <i class="fas fa-book" aria-hidden="true"></i>
                        </span>
                        {{info.handle}}
                    </p>
                </article>
            
            </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        info: Object
    }
}
</script>

<style>

</style>