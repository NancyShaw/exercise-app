<template>
  <nav class="navbar is-link" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
              
                  <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                  </a>
                </div>
              
                <div id="navbarBasicExample" class="navbar-menu">
                  <div class="navbar-start">
                    <router-link to="/home" class="navbar-item">
                      Home
                    </router-link>

                    <router-link to="/Profile" class="navbar-item">
                      Profile
                    </router-link>
              
                    <router-link to="/ActivityDetails" class="navbar-item">
                      Activity Details
                    </router-link>
              
                    <div class="navbar-item has-dropdown is-hoverable">
                      <a class="navbar-link">
                        More
                      </a>
              
                      <div class="navbar-dropdown">
                        <a class="navbar-item">
                          About
                        </a>
                        <router-link to="/Documentation" class="navbar-item">
                          Documentation
                        </router-link>
                        <a class="navbar-item">
                          Help/Contact
                        </a>
                        <router-link to="/Issue" class="navbar-item">
                          Report an issue
                        </router-link>
                        <hr class="navbar-divider">
                        <router-link to="/" class="navbar-item">
                          Sign Out
                        </router-link>
                      </div>
                    </div>
                  </div>
                  <div class="navbar-end">
                    <router-link to="/" class="navbar-item">
                      Sign Out
                    </router-link>
                  </div>
                </div>
              </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>