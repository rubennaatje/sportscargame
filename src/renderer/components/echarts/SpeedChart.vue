<template>
  <div class="h-full w-full">
    <v-chart
      :options="polar"
      theme="dark_ruben"
      style="width: 100%; height: 100%;"
    />
    <!-- <button class="btn-primary" @click="testMethod()">Send</button> -->
  </div>
</template>

<style>
/**
 * The default size is 600px×400px, for responsive charts
 * you may need to set percentage values as follows (also
 * don't forget to provide a size for the container).
 */
.echarts {
  width: 100%;
  height: 100%;
}
</style>

<script>
import { mapGetters } from 'vuex';
export default {
  data () {
    return {
      polar: {
        theme: 'dark_ruben',
        xAxis: {
          type: 'value',
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [],
            type: 'line',
          },
          {
            data: [],
            type: 'line',
          },
          {
            data: [],
            type: 'line',
          },
        ],
        animation: true,
        animationDuration: 200,
      },
    };
  },
  computed: {
    ...mapGetters({
      getTelemetry: 'team/getTelemetry',
      getLastLapTelemetry: 'team/getLastLapTelemetry',
    }),
  },
  mounted () {
    this.polar.series[0].data = this.getTelemetry();
    this.polar.series[1].data = this.getLastLapTelemetry();
  },
  methods: {
    testMethod () {
      this.polar.series[0].data.push([
        this.polar.series[0].data.length + 1,
        Math.random() * 500,
      ]);
      // this.polar.series[1].data.push([this.polar.series[1].data.length + 1, Math.random() * 500]);
    },
  },
};
</script>
