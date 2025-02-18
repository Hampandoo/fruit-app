<template>
  <main class="main">
    <AppHeader class="header"></AppHeader>
    <article class="content">
      <slot />
    </article>
  </main>
</template>

<script setup lang="ts">
import AppHeader from "@/components/common/AppHeader.vue";

</script>

<style scoped>
.main {
  display: grid;
  grid-template-areas:
    "header"
    "content";
  grid-template-columns: auto;
  grid-template-rows: auto 1fr;

  height: 100vh;
  overflow: hidden;

  transition: all 0.5s ease;
}
.header {
  grid-area: header;
}
.content {
  padding: 24px 24px 48px;
  height: var(--content-container-size);
}
</style>
