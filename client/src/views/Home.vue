<template>
  <section class="section">
            <div class="columns is-mobile">
                <div class="column is-one-half">
                    <CurrentGoals :otherGoals="otherGoals" :daily="daily" />
                    
                </div>
                <div class="column is-one-half">
                    
                    <ActivitySummary :activities="activities" :total="total" />

                </div>
            </div>  
        </section>
</template>

<script>
import CurrentGoals from "../components/CurrentGoals"
import { GetGoals } from "../models/Goals";
import ActivitySummary from "../components/ActivitySummary.vue";
import { GetActivities } from "../models/Activities";

export default {
    data: ()=> ({ 
        otherGoals: [],
        daily: {},
        activities: [],
    }),
    async mounted() {
        const goals = await GetGoals();
        console.log(goals);
        this.daily = { goal: goals.daily };
        this.otherGoals = goals.otherGoals;
        
        this.activities = await GetActivities();
        console.log(this.activities);
    },
    components: {
        CurrentGoals,
        ActivitySummary
    },
    computed: {
        total () {
            return this.activities.reduce((total, a) => total + +a.timeMins, 0);
        }
    }

}
</script>

<style>

</style>