<template>
  <div class="flexible-content">
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Home from './home/home.vue'
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>
