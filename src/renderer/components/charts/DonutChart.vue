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
    return {
      polar: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: 10,
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center"
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold"
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 335, name: "Buemi" },
              { value: 310, name: "Nakajima" },
              { value: 234, name: "Hartley" }
            ]
          }
        ]
      }
    };
  },
  computed: {
    ...mapGetters({
      getTelemetry: "team/getTelemetry",
      getLastLapTelemetry: "team/getLastLapTelemetry"
    })
  }
};
</script>
