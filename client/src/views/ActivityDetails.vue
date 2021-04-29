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
    async mounted() {
        this.activities = await GetActivities();
    },
    components: {
        ActivitySummary,
        AddActivity
    },
    methods: {
        async addActivity() {
            const newRecord = await AddActivities(this.newActivity);
            console.log(newRecord);
            this.activities.unshift(newRecord);
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