<template>
  <section class="section">
            <div class="columns is-mobile">
                <div class="column is-one-half">
                    <myGoals />
                    <div class="box">
                        Placeholder for where graph showing daily exercise will go.
                    </div>
                </div>
                <div class="column is-one-half">
                    <div class="box has-background-link-light has-text-link-dark">
                        <h2>My Activity Summary</h2>
                        <ul>
                            <li>Placeholders for now</li>
                            <li>Some Running</li>
                            <li>Some Lifting</li>
                            <li>Some Stretching</li>
                        </ul>
                    </div>
                </div>
            </div>  
        </section>
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

</style>