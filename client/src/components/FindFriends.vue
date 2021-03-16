<template>
    <form @submit.prevent="$emit('search')" class="box">
        <div class="field">
            <p>Find Friends!</p>
            <label class="label">Search by name</label>
            <div>
                <input class="input" type="text" placeholder="Red Fraggle" v-model="searchName" />
            </div>
        </div>

        <button class="button is-info">Submit</button>
    </form>
</template>

<script>
export default {
    data: ()=> ({
        searchName: String
    })
}
</script>

<style>

</style>