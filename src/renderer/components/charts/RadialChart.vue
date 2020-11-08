<template>
  <div class="h-full w-full">
    <v-chart
      :options="polar"
      theme="dark_ruben"
      style="width: 100%; height: 100%;"
      autoresize
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
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      getTelemetry: "team/getTelemetry",
      getLastLapTelemetry: "team/getLastLapTelemetry"
    }),
    polar() {
      return {
        theme: "dark_ruben",
        xAxis: {
          type: "value"
        },
        yAxis: [
          {
            type: "value",
            name: "km/h"
          },
          {
            type: "value",
            name: "braking"
            // offset: 80
          },
          {
            type: "value",
            name: "throttle"
          }
        ],
        series: [
          {
            data: this.getLastLapTelemetry(),
            type: "line"
          },
          {
            data: this.getTelemetry(),
            type: "line"
          },
          {
            data: [
              2.0,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3
            ],
            yAxisIndex: 1,
            type: "line"
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
              [7000, 100]
            ],
            yAxisIndex: 1,
            type: "line"
          }
        ],
        animation: true,
        animationDuration: 200
      };
    }
  },
  // mounted() {
  //   this.polar.series[0].data = ;
  //   this.polar.series[1].data = this.getTelemetry();
  // },
  methods: {
    testMethod() {
      this.polar.series[0].data.push([
        this.polar.series[0].data.length + 1,
        Math.random() * 500
      ]);
      // this.polar.series[1].data.push([this.polar.series[1].data.length + 1, Math.random() * 500]);
    }
  }
};
</script>
