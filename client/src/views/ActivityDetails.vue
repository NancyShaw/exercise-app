<template>
    <section class="section">
        <div class="columns">
            <div class="column is-one-half">
                <AddActivity :newActivity="newActivity" @add="addActivity" />
            </div>

            <div class="column is-one-half">
                <ActivitySummary :activities="activities" :total="total" />
            </div>

        </div>
    </section>
</template>

<script>
import { GetActivities, GetTotalTime, AddActivities } from "../models/Activities";
import ActivitySummary from "../components/ActivitySummary.vue";
import AddActivity from "../components/AddActivity.vue";
import Vue from "vue";

export default Vue.extend( {
    data: ()=> ({
        newActivity: {},
        activities: [],
        total: []
    }),
    mounted() {
        this.activities = GetActivities();
        this.total = GetTotalTime();
    },
    components: {
        ActivitySummary,
        AddActivity
    },
    methods: {
        addActivity() {
            AddActivities(this.newActivity);
        }
    }


})
</script>

<style>

</style>