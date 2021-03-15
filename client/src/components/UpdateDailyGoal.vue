<template>
    <form @submit.prevent="$emit('update')" class="box">
        <div class="field">
            <p>Update Total Daily Exercise Goal</p>
            <label class="label">Total Daily Exercise Goal</label>
            <div>
                <input class="input" type="number" placeholder="45" v-model="newDaily" />
            </div>
            <p class="help">Daily exercise goal in minutes</p>
        </div>

        <button class="button is-info">Submit</button>
    </form>
</template>

<script>
export default {
    props: {
        newDaily: Object
    }
}
</script>

<style>

</style>