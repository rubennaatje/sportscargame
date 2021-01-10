<template>
  <div class="h-full event-log">
    <div v-for="logItem in log" :key="logItem">{{ logItem }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    log() {
      return this.$store.state.team.log;
    },
  },
};
</script>

<style scoped>
.event-log {
  overflow-y: auto;
}
</style>
