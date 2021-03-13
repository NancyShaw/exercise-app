<template>
    <article class="panel is-info">
        <p class="panel-heading">
            Friends
        </p>
        <div class="panel-block">
            <p class="control has-icons-left">
            <input class="input is-info" type="text" placeholder="Search">
            <span class="icon is-left">
                <i class="fas fa-search" aria-hidden="true"></i>
            </span>
            </p>
        </div>
        <p class="panel-block" v-for="(friend, i) in friends" :key="i">
            <span class="panel-icon">
            <img 
            :src="friend.src" 
            :alt="friend.alt">
            </span>
            {{friend.handle}}
        </p>
    </article>
</template>

<script>
export default {
    props: {
        friends: Object
    }

}
</script>

<style>

</style>