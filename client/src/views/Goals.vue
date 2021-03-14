<template>
  <div class="container">
      
      <CurrentGoals :otherGoals="otherGoals" :daily="daily"/>
      
      <form @submit.prevent="$emit('update')" class="box">
            <div class="field">
                <p>Update Total Daily Exercise Goal</p>
                <label class="label">Total Daily Exercise Goal</label>
                <div>
                    <input class="input" type="number" placeholder="45" />
                </div>
                <p class="help">Daily exercise goal in minutes</p>
            </div>

            <button class="button is-info">Submit</button>
        </form>
        
        <AddGoal :newGoal="newGoal" @add="addGoal" />

  </div>
</template>

<script>
import CurrentGoals from "../components/CurrentGoals.vue";
import AddGoal from "../components/AddGoal.vue";
import { GetOtherGoals, GetDailyGoal } from "../models/Goals";
import Vue from "vue";

export default Vue.extend( {
    data: ()=> ({ 
        newGoal: {},
        otherGoals: [],
        daily: []
    }),
    mounted() {
        this.otherGoals = GetOtherGoals();
        this.daily = GetDailyGoal();
    },
    components: {
        CurrentGoals,
        AddGoal
    },
    methods: {
        addGoal(){
            this.otherGoals.unshift(this.newGoal);
            this.newGoal = {};
        }
    }
    
})
</script>

<style>
.container {
    margin-top: 10px;
}
</style>