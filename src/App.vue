<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <nav style="margin-bottom: 30px;"">
    <RouterLink to="/" style="margin-right: 10px;">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>

  <RouterView />
</template>
