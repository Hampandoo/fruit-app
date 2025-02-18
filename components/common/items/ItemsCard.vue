<template>
  <div class="card-container">
    <slot></slot>
  </div>
</template>

<script setup lang='ts'>

</script>

<style scoped>
.card-container {
  border-radius: 6px;
  border: 1px solid var(--color-gray-800);
  background: var(--color-gray-400);
}
</style>