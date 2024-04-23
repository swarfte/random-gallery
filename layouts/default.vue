<template>
  <div class="layout">
    <v-layout>
      <SideBar> </SideBar>
      <v-main>
        <slot />
      </v-main>
    </v-layout>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped></style>