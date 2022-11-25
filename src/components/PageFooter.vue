<template>
  <footer>
  </footer>
  <div class="toast-container" v-if="this.$store.state.isLogin">
    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <img src="../assets/logo.png" class="rounded me-2" alt="이미지 없음..">
        <strong class="me-auto">로그인</strong>
        <small class="text-muted">방금</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="닫기"></button>
      </div>
      <div class="toast-body">
        <!-- Welcome To Dev Story -->
        <p class="mt-5 mb-3 text-center">&copy; 2022 Incheon Electronic Meister High School</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>

</style>