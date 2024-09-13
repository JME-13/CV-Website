<template>
  <div id="app">
    <router-view @error="handleError"></router-view>
    <div v-if="error" class="error-message">{{ error }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: null,
    };
  },
  methods: {
    handleError(err) {
      this.error = 'An error occurred: ' + err.message;
      console.error('Error captured:', err);
    },
  },
  errorCaptured(err, vm, info) {
    this.handleError(err);
    return false; // Prevents the error from propagating further
  },
};
</script>

<style>
.error-message {
  color: red;
  font-weight: bold;
}
</style>