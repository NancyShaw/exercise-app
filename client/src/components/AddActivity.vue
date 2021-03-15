<template>
    <form @submit.prevent="$emit('add')" class="box">
        <p>Record Daily Exercise</p>
        <div class="field">
            <label class="label">Type of Exercise</label>
            <div>
                <input class="input" type="text" placeholder="Curling" v-model="newActivity.activity" />
            </div>
        </div>

        <div class="field">
            <label class="label">Number of Minutes Spent</label>
            <div>
                <input class="input" type="number" placeholder="45" v-model="newActivity.timeMins" />
            </div>
        </div>

        <!-- I'm going to want a field for entering the date here as well -->

        <button class="button is-info">Submit</button>
    </form>
</template>

<script>
export default {
    props: {
        newActivity: Object
    }

}
</script>

<style>

</style>