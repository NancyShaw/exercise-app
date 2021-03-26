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

                    <router-link to="/Goals" class="navbar-item">
                      Goals
                    </router-link>
              
                    <router-link to="/ActivityDetails" class="navbar-item">
                      Activity Details
                    </router-link>

                    <router-link to="/Feed" class="navbar-item">
                      Feed
                    </router-link>

                    <router-link to="/Friends" class="navbar-item">
                      Friends
                    </router-link>
              
                    <div class="navbar-item has-dropdown is-hoverable">
                      <a class="navbar-link">
                        More
                      </a>
              
                      <div class="navbar-dropdown">
                      
                        <router-link to="/Documentation" class="navbar-item">
                          Documentation
                        </router-link>
                        
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
                    <router-link to="/Profile" class="navbar-item">
                      Profile
                    </router-link>
                    <router-link to="/Admin" class="navbar-item">
                      Admin
                    </router-link>
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