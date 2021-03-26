<template>
    <article class="panel is-info">
        <p class="panel-heading">
            Friends
        </p>
        <p class="panel-block" v-for="(friend, i) in friends" :key="i">
            <span class="panel-icon">
            <img 
            :src="friend.friend.src" 
            :alt="friend.friend.alt">
            </span>
            {{friend.friend.handle}}
        </p>
    </article>
</template>

<script>
export default {
    props: {
        friends: Array
    }

}
</script>

<style>

</style>