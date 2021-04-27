<template>
    <article class="panel is-info">
        <p class="panel-heading">
            Suggested Friend
        </p>
        <p class="panel-block" v-if="toggle">
            <span class="panel-icon">
            <img 
            :src="friend.user.pic" 
            :alt="friend.user.name">
            </span>
            {{friend.user.handle}}
        </p>
    </article>
</template>

<script>
export default {
    props: {
        friend: Object,
        toggle: Boolean
    }
}
</script>

<style>

</style>