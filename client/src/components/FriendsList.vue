<template>
    <article class="panel is-info">
        <p class="panel-heading">
            Friends
        </p>
        <p class="panel-block" v-for="(friend, i) in friends" :key="i">
            <span class="panel-icon">
            <img 
            :src="friend.user.pic" 
            :alt="friend.user.name">
            </span>
            {{friend.user.handle}}
            
            <button class="delete is-pulled-right" @click.prevent="$emit('delete', friend)"></button>
            
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