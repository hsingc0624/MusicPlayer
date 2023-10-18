<script>
import AppHeader from './components/Header.vue'
import AppAuth from './components/Auth.vue'
import { mapWritableState } from 'pinia'
import useUserStore from './stores/user'
import { auth } from './includes/firebase'
import AppPlayer from './components/Player.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppAuth,
    AppPlayer
  },
  computed: {
    ...mapWritableState(useUserStore, ['userLoggedin'])
  },
  created() {
    if (auth.currentUser) {
      this.userLoggedin = true
    }
  }
}
</script>

<template>
  <AppHeader />
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <div :key="route.name">
        <component :is="Component"></component>
      </div>
    </transition>
  </router-view>
  <AppPlayer />
  <AppAuth />
</template>

<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.5s linear;
}

.fade-leave-to {
  transition: all 0.5s linear;
  opacity: 0;
}
</style>
