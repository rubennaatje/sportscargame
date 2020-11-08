<template>
  <div class="h-full w-full">
    <v-chart
      :options="polar"
      theme="dark_ruben"
      style="width: 100%; height: 100%;"
      autoresize
    />
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
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
          feature: {
            restore: {},
            saveAsImage: {}
          }
        },
        series: [
          {
            name: "Oil",
            type: "gauge",
            radius: 110,
            min: 0,
            max: 2,
            startAngle: 135,
            endAngle: 45,
            splitNumber: 7,
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                width: 8
              }
            },
            axisTick: {
              // 坐标轴小标记
              length: 12, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: "auto"
              }
            },
            splitLine: {
              // 分隔线
              length: 20, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle（详见lineStyle）控制线条样式
                color: "auto"
              }
            },
            pointer: {
              width: 5
            },
            title: {
              offsetCenter: [0, "-30%"] // x, y，单位px
            },

            detail: { formatter: "{value}%", fontWeight: "bolder" },
            data: [{ value: 0.5, name: "a" }]
          }
        ]
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
