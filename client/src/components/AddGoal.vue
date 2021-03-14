<template>
    <form @submit.prevent="$emit('add')" class="box">
        <div class="field">
            <p>Add Goal</p>
            <label class="label">Goal</label>
            <div>
                <input class="input" type="text" placeholder="New Goal" v-model="newGoal.goal" />
            </div>
        </div>

        <button class="button is-info" >Submit</button>
    </form>
</template>

<script>
export default {
    props: {
        newGoal: Object
    }
}
</script>

<style>

</style>