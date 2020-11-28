<template>
  <div class="h-full w-full">
    <v-chart
      :options="polar"
      theme="dark_ruben"
      style="width: 100%; height: 100%"
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
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      polar: {
        legend: {},
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)',
        },
        dataset: {
          source: [
            ['tyrewear', 'LF', 'RF', 'LR', 'RR'],
            ['left', 41.1, 30.4, 65.1, 53.3],
            ['worn', 60, 70, 35, 47],
          ],
        },
        series: [
          {
            type: 'pie',
            radius: ['20%', '30%'],
            center: ['25%', '30%'],
            // No encode specified, by default, it is '2012'.
          },
          {
            type: 'pie',
            radius: ['20%', '30%'],
            center: ['75%', '30%'],
            encode: {
              itemName: 'tyrewear',
              value: 'RR',
            },
          },
          {
            type: 'pie',
            radius: ['20%', '30%'],
            center: ['25%', '75%'],
            encode: {
              itemName: 'tyrewear',
              value: 'LR',
            },
          },
          {
            type: 'pie',
            radius: ['20%', '30%'],
            center: ['75%', '75%'],
            encode: {
              itemName: 'tyrewear',
              value: 'RR',
            },
          },
        ],
      },
    };
  },
  computed: {
    ...mapGetters({
      getTelemetry: 'team/getTelemetry',
      getLastLapTelemetry: 'team/getLastLapTelemetry',
    }),
  },
  mounted() {
    this.polar.series[0].data = this.getLastLapTelemetry();
    this.polar.series[1].data = this.getTelemetry();
  },
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
