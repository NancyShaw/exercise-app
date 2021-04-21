<template>
  <div class="container">
      
      <CurrentGoals :otherGoals="otherGoals" :daily="daily"/>
      
      <UpdateDailyGoal :newDaily="newDaily" @update="updateDailyGoal" />
        
        <AddGoal :newGoal="newGoal" @add="addGoal" />

  </div>
</template>

<script>
import CurrentGoals from "../components/CurrentGoals.vue";
import AddGoal from "../components/AddGoal.vue";
import UpdateDailyGoal from "../components/UpdateDailyGoal.vue";
import { UpdateDaily, GetGoals, AddOtherGoal } from "../models/Goals";
import Vue from "vue";

export default Vue.extend( {
    data: ()=> ({
        newGoal: {},
        otherGoals: [],
        daily: {},
        newDaily: {}
    }),
    async mounted() {
        const goals = await GetGoals();
        console.log(goals);
        this.daily = goals.daily;
        this.otherGoals = goals.otherGoals;
    },
    components: {
        CurrentGoals,
        AddGoal,
        UpdateDailyGoal
    },
    methods: {
        async addGoal(){
            const goal = await AddOtherGoal(this.newGoal);
            this.otherGoals.unshift(goal);
            this.newGoal = {};
        },
        async updateDailyGoal() {
            const mystery = await UpdateDaily(this.newDaily);
            console.log(mystery);
            //console.log(mystery.daily);
            this.daily = mystery;
        }  
    }
    
})
</script>

<style>
.container {
    margin-top: 10px;
}
</style>