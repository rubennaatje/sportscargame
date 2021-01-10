<template>
  <div class="h-full lap-log">
    <div v-for="logItem in log" :key="logItem">
      {{ formatTime(logItem) }}
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';
export default {
  computed: {
    log() {
      return this.$store.state.team.laptimes;
    },
  },
  methods: {
    formatTime: (time) =>
      time ? dayjs(time).format('mm:ss.SSS') : '-',
  },
};
</script>

<style scoped>
.lap-log {
  overflow-y: auto;
}
</style>
