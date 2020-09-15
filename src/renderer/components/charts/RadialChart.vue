<template>
  <div>
    <v-chart :options="polar" />
    <button class="btn-primary" @click="testMethod()">Send</button>
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
import ECharts from 'vue-echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/polar';

export default {
  components: {
    'v-chart': ECharts,
  },
  computed () {
    const data = [];

    for (let i = 0; i <= 360; i++) {
      const t = i / 180 * Math.PI;
      const r = Math.sin(2 * t) * Math.cos(2 * t);
      data.push([r, i]);
    }

    return {
      polar: {
        theme: 'dark',
        xAxis: {
          type: 'value',

        },
        yAxis: {
          type: 'value',
        },
        series: [{
          data: [[1, 820], [2, 932], [4, 901], [5, 934]],
          type: 'line',
        },
        {
          data: [[1, 500], [2, 922], [3, 901], [6, 934]],
          type: 'line',
        }],
        animation: true,
        animationDuration: 2000,
      },
    };
  },
  methods: {
    testMethod () {
      this.polar.series[0].data.push([this.polar.series[0].data.length + 1, Math.random() * 500]);
      // this.polar.series[1].data.push([this.polar.series[1].data.length + 1, Math.random() * 500]);
    },
  },
};
</script>
