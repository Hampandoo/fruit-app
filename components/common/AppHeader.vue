<template>
  <header class="app-header">
    <div class="app-header-content">
      <h2 class="app-header-title" @click="goToMainPage">Fruits</h2>
    </div>
  </header>
</template>

<script setup lang='ts'>
function goToMainPage() {
  useRouter().push("/");
}
</script>

<style scoped>
.app-header {
  width: 100%;
  padding: 20px 40px;
  border-bottom: 1px solid var(--color-gray-600);
}
.app-header-content {}
.app-header-title {
  font-size: var(--text-title-2);
  font-weight: 600;
  line-height: 1.25;
  color: var(--color-primary);

  cursor: pointer;
}
</style>