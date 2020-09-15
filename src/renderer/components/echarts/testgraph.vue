<template>
  <div class="bg-green-600 w-full">
    <echart :options="areaChart" autoresize />
  </div>
</template>

<script>
export default {
  props: {
    seriesName1: String,
    seriesName2: String,
    seriesName3: String,
    seriesName4: String,
    seriesName5: String,
    seriesName6: String,
    title: String,
    yAxisMin: Number,
    yAxisMax: Number,
    yAxisLabelFormatter: String,
  },
  data () {
    return {
      areaChart: {
        legend: {
          type: 'plain',
        },
        title: {
          text: this.Title,
        },
        grid: {
          show: false,
        },
        // width: '100%',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: 'shadowBlur',
            opacity: '1',
          },
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          splitLine: {
            show: true,
            lineStyle: {
              opacity: 0.1,
            },
          },
        },
        yAxis: {
          type: 'value',
          min: 0,
          // max: 100,
          splitLine: {
            show: true,
            lineStyle: {
              opacity: 0.1,
            },
          },
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {},
          },
        ],
      },
    };
  },
};
</script>

<style>

</style>
