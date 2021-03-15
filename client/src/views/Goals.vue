<template>
  <div class="container">
      
      <CurrentGoals :otherGoals="otherGoals" :daily="daily"/>
      
      <UpdateDailyGoal :newDaily="thing" />
        
        <AddGoal :newGoal="newGoal" @add="addGoal" />

  </div>
</template>

<script>
import CurrentGoals from "../components/CurrentGoals.vue";
import AddGoal from "../components/AddGoal.vue";
import UpdateDailyGoal from "../components/UpdateDailyGoal.vue";
import { GetOtherGoals, GetDailyGoal, UpdateDaily } from "../models/Goals";
import Vue from "vue";

export default Vue.extend( {
    data: ()=> ({
        thing: {}, 
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
        AddGoal,
        UpdateDailyGoal
    },
    methods: {
        addGoal(){
            this.otherGoals.unshift(this.newGoal);
            this.newGoal = {};
        },
        updateDailyGoal() {
            UpdateDaily(this.thing);
        }
       
    }
    
})
</script>

<style>
.container {
    margin-top: 10px;
}
</style>