<template>
    <div class="container">
        <form @submit.prevent="$emit('update')" class="box">
            <p>Edit Profile info*</p>
            <div class="field">
                <label class="label">Change your profile Picture</label>
                <div>
                    <input class="input" type="text" placeholder="Picture URL" v-model="newInfo.pic" />
                </div>
            </div>

            <div class="control">
                <button class="button is-info">Submit</button>
            </div>
            
            <p> <br /> *At this time only the profile picture may be modified</p>
        </form>

    </div>
</template>

<script>
export default {
    props:{
        newInfo: Object
    }
}
</script>

<style>

</style>