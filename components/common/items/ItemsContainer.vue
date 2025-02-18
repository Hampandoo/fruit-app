<template>
  <section class="items-container">
    <slot />
  </section>
</template>

<script setup lang='ts'>

</script>

<style scoped>
.items-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(200px, auto);
  gap: 10px;
  padding: 10px;

  border: 1px solid var(--color-gray-800);
  border-radius: 12px;
  background: var(--color-gray-100);
}
</style>