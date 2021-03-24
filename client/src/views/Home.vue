<template>
  <section class="section">
            <div class="columns is-mobile">
                <div class="column is-one-half">
                    <CurrentGoals :otherGoals="otherGoals" :daily="daily" />
                    <div class="box">
                        Placeholder for where graph showing daily exercise will go.
                    </div>
                </div>
                <div class="column is-one-half">
                    
                    <ActivitySummary :activities="activities" :total="total" />

                </div>
            </div>  
        </section>
</template>

<script>
import CurrentGoals from "../components/CurrentGoals"
import { GetOtherGoals, GetDailyGoal } from "../models/Goals";
import ActivitySummary from "../components/ActivitySummary.vue";
import { GetActivities } from "../models/Activities";

export default {
    data: ()=> ({ 
        otherGoals: [],
        daily: {},
        activities: [],
    }),
    mounted() {
        this.otherGoals = GetOtherGoals();
        this.daily = GetDailyGoal();
        this.activities = GetActivities();
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