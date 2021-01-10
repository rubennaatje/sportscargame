<template>
  <div
    class="h-full w-full delta-container"
    :style="styleWithBackgroundColor"
  >
    <p>
      {{ delta }}
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    delta() {
      return this.liveTelemetry
        ? this.liveTelemetry.delta
          ? this.liveTelemetry.delta.toFixed(3)
          : 0
        : 0;
    },
    backgroundColor() {
      const val = (this.delta + 1) / 2;

      return this.percentageToHsl(val);
    },
    styleWithBackgroundColor() {
      return { backgroundColor: this.backgroundColor };
    },
    ...mapGetters({
      liveTelemetry: 'team/getLiveTelemetry',
    }),
  },
  methods: {
    percentageToHsl(percentage) {
      const hue = percentage * (0 - 120) + 120;
      return 'hsl(' + hue + ', 100%, 50%)';
    },
  },
};
</script>
<style scoped>
.delta-container {
  /* background-color: green; */
  display: flex;
}

.delta-container p {
  margin: auto;
  font-size: 35px;
  font-weight: bolder;
  letter-spacing: 3px;
  color: white;
  padding: 10px;
  /* mix-blend-mode: difference; */
  background-color: inherit;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  filter: grayscale(1) contrast(9);
}
</style>
