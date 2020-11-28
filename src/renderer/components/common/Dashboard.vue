<template>
  <grid-layout
    :layout="layout"
    :col-num="12"
    :row-height="30"
    :is-draggable="draggable"
    :is-resizable="resizable"
    :vertical-compact="true"
    :use-css-transforms="true"
  >
    <grid-item
      v-for="item in layout"
      :key="item.i"
      :static="item.static"
      :x="item.x"
      :y="item.y"
      :w="item.w"
      :h="item.h"
      :i="item.i"
    >
      <SContainer class="h-full w-full" :title="itemTitle(item)">
        <component :is="item.component" class="h-full w-full" />
      </SContainer>
    </grid-item>
  </grid-layout>
</template>

<script>
import { GridLayout, GridItem } from 'vue-grid-layout';
import DonutChart from '../echarts/SpeedChart';
import RadialChart from '../charts/RadialChart';
import BarChart from '../charts/BarChart';
import tv from '../pixijs/trackmap';
export default {
  components: {
    GridLayout,
    GridItem,
    DonutChart,
    RadialChart,
    BarChart,
    tv,
  },
  data() {
    return {
      currentTabComponent: 'SContainer',
      layout: [
        {
          x: 0,
          y: 0,
          w: 2,
          h: 2,
          i: '0',
          static: false,
          component: 'BarChart',
        },
        {
          x: 2,
          y: 0,
          w: 2,
          h: 4,
          i: '1',
          static: true,
          component: 'DonutChart',
        },
        {
          x: 4,
          y: 0,
          w: 2,
          h: 5,
          i: '2',
          static: false,
          component: 'RadialChart',
        },
        {
          x: 6,
          y: 0,
          w: 2,
          h: 3,
          i: '3',
          static: false,
          component: 'RadialChart',
        },
        {
          x: 8,
          y: 0,
          w: 2,
          h: 3,
          i: '4',
          static: false,
          component: 'RadialChart',
        },
        {
          x: 10,
          y: 0,
          w: 2,
          h: 3,
          i: '5',
          static: false,
          component: 'tv',
        },
        {
          x: 0,
          y: 5,
          w: 2,
          h: 5,
          i: '6',
          static: false,
          component: 'DonutChart',
        },
        {
          x: 2,
          y: 5,
          w: 2,
          h: 5,
          i: '7',
          static: false,
          component: 'BarChart',
        },
        {
          x: 4,
          y: 5,
          w: 2,
          h: 5,
          i: '8',
          static: false,
          component: 'DonutChart',
        },
        {
          x: 6,
          y: 3,
          w: 2,
          h: 4,
          i: '9',
          static: true,
          component: 'BarChart',
        },
        {
          x: 8,
          y: 4,
          w: 2,
          h: 4,
          i: '10',
          static: false,
          component: 'DonutChart',
        },
        {
          x: 10,
          y: 4,
          w: 2,
          h: 4,
          i: '11',
          static: false,
          component: 'DonutChart',
        },
        {
          x: 0,
          y: 10,
          w: 2,
          h: 5,
          i: '12',
          static: false,
          component: 'DonutChart',
        },
        {
          x: 2,
          y: 10,
          w: 2,
          h: 5,
          i: '13',
          static: false,
          component: 'DonutChart',
        },
        {
          x: 4,
          y: 8,
          w: 2,
          h: 4,
          i: '14',
          static: false,
          component: 'DonutChart',
        },
        {
          x: 6,
          y: 8,
          w: 2,
          h: 4,
          i: '15',
          static: false,
          component: 'DonutChart',
        },
        {
          x: 8,
          y: 10,
          w: 2,
          h: 5,
          i: '16',
          static: false,
          component: 'DonutChart',
        },
        {
          x: 10,
          y: 4,
          w: 2,
          h: 2,
          i: '17',
          static: false,
          component: 'DonutChart',
        },
        {
          x: 0,
          y: 9,
          w: 2,
          h: 3,
          i: '18',
          static: false,
          component: 'DonutChart',
        },
        {
          x: 2,
          y: 6,
          w: 2,
          h: 2,
          i: '19',
          static: false,
          component: 'DonutChart',
        },
      ],
      draggable: true,
      resizable: true,
      index: 0,
    };
  },
  methods: {
    itemTitle(item) {
      let result = item.i + ' ' + item.component;
      if (item.static) {
        result += ' - Static';
      }
      return result;
    },
  },
};
</script>

<style scoped>
.vue-grid-item:not(.vue-grid-placeholder) {
  border: 1px solid black;
}

.vue-grid-item .resizing {
  opacity: 0.9;
}

.vue-grid-item .text {
  font-size: 24px;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
  width: 100%;
}

.vue-grid-item .no-drag {
  height: 100%;
  width: 100%;
}

.vue-grid-item .minMax {
  font-size: 12px;
}

.vue-grid-item .add {
  cursor: pointer;
}

.vue-draggable-handle {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 0;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>")
    no-repeat;
  background-position: bottom right;
  padding: 0 8px 8px 0;
  background-repeat: no-repeat;
  background-origin: content-box;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
