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
import { GetActivities, AddActivities } from "../models/Activities";
import ActivitySummary from "../components/ActivitySummary.vue";
import AddActivity from "../components/AddActivity.vue";
import Vue from "vue";

export default Vue.extend( {
    data: ()=> ({
        newActivity: {},
        activities: [],
    }),
    mounted() {
        this.activities = GetActivities();
    },
    components: {
        ActivitySummary,
        AddActivity
    },
    methods: {
        addActivity() {
            AddActivities(this.newActivity);
        }
    },
    computed: {
        total () {
            return this.activities.reduce((total, a) => total + +a.timeMins, 0);
        }
    }


})
</script>

<style>

</style>