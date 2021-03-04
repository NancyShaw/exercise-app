<template>
  <div class="container">
      
      <myGoals />
      
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
import myGoals from "../components/CurrentGoals"
export default {
    components: {
        myGoals
    }
}
</script>

<style>
.card {
    margin-top: 10px;
}
</style>