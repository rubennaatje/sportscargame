<template>
  <div class="h-full w-full">
    <v-chart :options="polar" theme="dark_ruben" style="width: 100%; height: 100%" autoresize />
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
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      getTelemetry: 'team/getTelemetry',
      getDeltaTelemetry: 'team/getDeltaTelemetry',
      getLastLapTelemetry: 'team/getLastLapTelemetry',
    }),
    polar() {
      return {
        theme: 'dark_ruben',
        xAxis: {
          type: 'value',
          axisLine: {
            show: true,
          },
        },
        yAxis: [
          {
            type: 'value',
            name: 'km/h',
          },
          {
            type: 'value',
            name: 'delta',
            min: -1,
            max: 1,
            axisLine: {
              show: true,
            },
            splitLine: {
              show: true,
            },
          },
          {
            type: 'value',
            name: 'throttle',
            offset: 80,
          },
        ],
        series: [
          {
            data: this.getLastLapTelemetry(),
            type: 'line',
          },
          {
            data: this.getTelemetry(),
            type: 'line',
          },
          {
            data: this.getDeltaTelemetry(),
            yAxisIndex: 1,
            type: 'line',
          },
          {
            data: [
              [0, 0],
              [1000, 23],
              [2000, 36],
              [3000, 35],
              [3300, 23],
              [4000, 90],
              [4600, 80],
              [5000, 70],
              [5500, 80],
              [6250, 20],
              [6500, 40],
              [6750, 80],
              [7000, 100],
            ],
            yAxisIndex: 1,
            type: 'line',
          },
        ],
        animation: true,
        animationDuration: 200,
      };
    },
  },
  // mounted() {
  //   this.polar.series[0].data = ;
  //   this.polar.series[1].data = this.getTelemetry();
  // },
  methods: {
    testMethod() {
      this.polar.series[0].data.push([
        this.polar.series[0].data.length + 1,
        Math.random() * 500,
      ]);
      // this.polar.series[1].data.push([this.polar.series[1].data.length + 1, Math.random() * 500]);
    },
  },
};
</script>
