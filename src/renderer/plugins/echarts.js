import Vue from 'vue';
import ECharts from 'vue-echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/polar';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/gauge';
import { theme } from './theme';

export default () => {
  // const obj = JSON.parse(theme);
  ECharts.registerTheme('dark_ruben', theme);
  Vue.component('v-chart', ECharts);
};
