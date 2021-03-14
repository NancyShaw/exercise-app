<template>
  <div class="container">
      
      <CurrentGoals :otherGoals="otherGoals" :daily="daily"/>
      
      <form class="box">
            <div class="field">
                <p>Update Total Daily Exercise Goal</p>
                <label class="label">Total Daily Exercise Goal</label>
                <div>
                    <input class="input" type="number" placeholder="45" />
                </div>
                <p class="help">Daily exercise goal in minutes</p>
            </div>
            <div class="field">
                <p>Add Goal</p>
                <label class="label">Goal</label>
                <div>
                    <input class="input" type="text" placeholder="Eat more veggies" />
                </div>
            </div>

            <button class="button is-info">Submit</button>
        </form>
  </div>
</template>

<script>
import CurrentGoals from "../components/CurrentGoals.vue";
import { GetOtherGoals, GetDailyGoal } from "../models/Goals";
import Vue from "vue";

export default Vue.extend( {
    data: ()=> ({ 
        otherGoals: [],
        daily: []
    }),
    mounted() {
        this.otherGoals = GetOtherGoals();
        this.daily = GetDailyGoal();
    },
    components: {
        CurrentGoals
    }
    
})
</script>

<style>
.container {
    margin-top: 10px;
}
</style>