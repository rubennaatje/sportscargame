import Vue from 'vue';
import ECharts from 'vue-echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/polar';
export default () => {
  ECharts.registerTheme('dark_ruben', {
    'seriesCnt': '3',
    'backgroundColor': 'rgba(51,51,51,1)',
    'titleColor': '#eeeeee',
    'subtitleColor': '#aaaaaa',
    'textColorShow': false,
    'textColor': '#333',
    'markTextColor': '#eeeeee',
    'color': [
      '#00FF00',
      '#FF0000',
      '#0000FF',
      '#8dc1a9',
      '#ea7e53',
      '#eedd78',
      '#73a373',
      '#73b9bc',
      '#7289ab',
      '#91ca8c',
      '#f49f42',
    ],
    'borderColor': '#ccc',
    'borderWidth': 0,
    'visualMapColor': [
      '#000cff',
    ],
    'legendTextColor': '#eeeeee',
    'kColor': '#fd1050',
    'kColor0': '#0cf49b',
    'kBorderColor': '#fd1050',
    'kBorderColor0': '#0cf49b',
    'kBorderWidth': 1,
    'lineWidth': '1',
    'symbolSize': '0',
    'symbol': 'circle',
    'symbolBorderWidth': '1',
    'lineSmooth': true,
    'graphLineWidth': 1,
    'graphLineColor': '#aaa',
    'mapLabelColor': '#000',
    'mapLabelColorE': 'rgb(100,0,0)',
    'mapBorderColor': '#444',
    'mapBorderColorE': '#444',
    'mapBorderWidth': 0.5,
    'mapBorderWidthE': 1,
    'mapAreaColor': '#eee',
    'mapAreaColorE': 'rgba(255,215,0,0.8)',
    'axes': [
      {
        'type': 'all',
        'name': '通用坐标轴',
        'axisLineShow': false,
        'axisLineColor': '#eeeeee',
        'axisTickShow': false,
        'axisTickColor': '#eeeeee',
        'axisLabelShow': false,
        'axisLabelColor': '#eeeeee',
        'splitLineShow': false,
        'splitLineColor': [
          '#aaaaaa',
        ],
        'splitAreaShow': false,
        'splitAreaColor': [
          '#eeeeee',
        ],
      },
      {
        'type': 'category',
        'name': '类目坐标轴',
        'axisLineShow': true,
        'axisLineColor': '#333',
        'axisTickShow': true,
        'axisTickColor': '#333',
        'axisLabelShow': true,
        'axisLabelColor': '#333',
        'splitLineShow': false,
        'splitLineColor': [
          '#ccc',
        ],
        'splitAreaShow': false,
        'splitAreaColor': [
          'rgba(250,250,250,0.3)',
          'rgba(200,200,200,0.3)',
        ],
      },
      {
        'type': 'value',
        'name': '数值坐标轴',
        'axisLineShow': true,
        'axisLineColor': '#333',
        'axisTickShow': true,
        'axisTickColor': '#333',
        'axisLabelShow': true,
        'axisLabelColor': '#333',
        'splitLineShow': true,
        'splitLineColor': [
          '#ccc',
        ],
        'splitAreaShow': false,
        'splitAreaColor': [
          'rgba(250,250,250,0.3)',
          'rgba(200,200,200,0.3)',
        ],
      },
      {
        'type': 'log',
        'name': '对数坐标轴',
        'axisLineShow': true,
        'axisLineColor': '#333',
        'axisTickShow': true,
        'axisTickColor': '#333',
        'axisLabelShow': true,
        'axisLabelColor': '#333',
        'splitLineShow': true,
        'splitLineColor': [
          '#ccc',
        ],
        'splitAreaShow': false,
        'splitAreaColor': [
          'rgba(250,250,250,0.3)',
          'rgba(200,200,200,0.3)',
        ],
      },
      {
        'type': 'time',
        'name': '时间坐标轴',
        'axisLineShow': true,
        'axisLineColor': '#333',
        'axisTickShow': true,
        'axisTickColor': '#333',
        'axisLabelShow': true,
        'axisLabelColor': '#333',
        'splitLineShow': true,
        'splitLineColor': [
          '#ccc',
        ],
        'splitAreaShow': false,
        'splitAreaColor': [
          'rgba(250,250,250,0.3)',
          'rgba(200,200,200,0.3)',
        ],
      },
    ],
    'axisSeperateSetting': false,
    'toolboxColor': '#999',
    'toolboxEmphasisColor': '#666',
    'tooltipAxisColor': '#eeeeee',
    'tooltipAxisWidth': '1',
    'timelineLineColor': '#eeeeee',
    'timelineLineWidth': 1,
    'timelineItemColor': '#dd6b66',
    'timelineItemColorE': '#a9334c',
    'timelineCheckColor': '#e43c59',
    'timelineCheckBorderColor': 'rgba(194,53,49,0.5)',
    'timelineItemBorderWidth': 1,
    'timelineControlColor': '#eeeeee',
    'timelineControlBorderColor': '#eeeeee',
    'timelineControlBorderWidth': 0.5,
    'timelineLabelColor': '#eeeeee',
    'datazoomBackgroundColor': 'rgba(47,69,84,0)',
    'datazoomDataColor': 'rgba(255,255,255,0.3)',
    'datazoomFillColor': 'rgba(167,183,204,0.4)',
    'datazoomHandleColor': '#a7b7cc',
    'datazoomHandleWidth': '100',
    'datazoomLabelColor': '#eeeeee',
  });
  Vue.component('v-chart', ECharts);
};