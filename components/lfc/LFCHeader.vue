<template>
  <div uk-sticky>
    <nav class="uk-navbar-container uk-margin header uk-margin-remove-bottom" uk-navbar>
      <div class="uk-navbar-left">
        <a class="uk-navbar-toggle hamburger" href="#offscreen-menu" uk-navbar-toggle-icon uk-toggle></a>
      </div>

      <div class="uk-navbar-center">
        <img src="~assets/images/logo-liverpool-sweden.svg" class="logo">
      </div>

      <div 
        v-if="false"
        class="uk-navbar-right"
      >
        <LoginStatus></LoginStatus>
      </div>
    </nav>
  </div>
</template>

<script>
import LoginStatus from "./login/LoginStatus";

export default {
  components: {
    LoginStatus
  }
};
</script>

<style lang="scss">
@import "~scss/vars";

.header {
  background-color: $global-primary-background !important;
  height: 80px;
}

.logo {
  height: 70px;
}

.hamburger {
  color: rgba(255, 255, 255, 0.9);
}
.hamburger:hover {
  color: rgba(255, 255, 255, 0.5);
}
</style>
