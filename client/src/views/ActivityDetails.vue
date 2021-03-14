<template>
  <section class="section">
        <form class="box">
            <p>Record Daily Exercise</p>
            <div class="field">
                <label class="label">Type of Exercise</label>
                <div>
                    <input class="input" type="text" placeholder="Curling" />
                </div>
            </div>

            <div class="field">
                <label class="label">Number of Minutes Spent</label>
                <div>
                    <input class="input" type="number" placeholder="45" />
                </div>
            </div>

            <!-- I'm going to want a field for entering the date here as well -->

            <button class="button is-info">Submit</button>
        </form>
    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>