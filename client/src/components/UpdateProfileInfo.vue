<template>
    <div class="container">
        <form @submit.prevent="$emit('updateProfileInfo')" class="box">
            <p>Edit Profile info*</p>
            <div class="field">
                <label class="label">Change your profile Picture</label>
                <div>
                    <input class="input" type="text" placeholder="Picture URL" v-model="newInfo.pic" />
                </div>
            </div>

            <button class="button is-info" v-on:click="updateProfileInfo">Submit</button>

            <p> <br /> *At this time only the profile picture may be modified</p>
        </form>

    </div>
</template>

<script>
import { UpdateInfo } from "../models/ProfileInfo";
export default {
    data: ()=> ({
        newInfo: {}
    }),
    methods: {
        updateProfileInfo() { 
            UpdateInfo(this.newInfo);
            console.log(this.newInfo);
        }
    }
}
</script>

<style>

</style>