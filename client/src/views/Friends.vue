<template>
  <div class="container">
      <p>View for finding friends</p>
      <form class="box">
            <div class="field">
                <p>Find Friends!</p>
                <label class="label">Search by name</label>
                <div>
                    <input class="input" type="text" placeholder="Red Fraggle" />
                </div>
            </div>
            <div class="field">
                <label class="label">Search by email</label>
                <div>
                    <input class="input" type="email" placeholder="redfraggle@cavern.com" />
                </div>
            </div>

            <button class="button is-info">Submit</button>
        </form>
        <div class="card">
        <header class="card-header">
          <p class="card-header-title has-background-link has-text-link-light">
            My Friends
          </p>
        </header>
        <div class="card-content has-background-link-light has-text-link-dark">
          <div class="content">
            <div>Placeholder for list of friends</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>