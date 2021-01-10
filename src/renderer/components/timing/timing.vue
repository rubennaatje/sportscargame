<template>
  <table>
    <thead>
      <th>pos</th>
      <th>#</th>
      <th>category</th>
      <th>car</th>
      <th>driver</th>
      <th>current speed</th>
      <th>laps</th>
      <th>s2</th>
      <th>s3</th>
      <th>last lap</th>
    </thead>
    <tbody>
      <tr v-for="car in allCars" :key="car.carnumber">
        <td>{{ car.pos }}</td>
        <td class="action">{{ car.carnumber }}</td>
        <td :class="car.category + ' carclass ' + 'action'">
          {{ car.category }}
        </td>
        <td>{{ car.car2 }}</td>
        <td>{{ car.realdeal.drivers[0].name }}</td>
        <td>{{ car.speed }}</td>
        <td>{{ car.laps }}</td>
        <td>{{ car.percentage }}</td>
        <td>{{ Math.abs(car.gap).toFixed(1) }}</td>
        <td>{{ formatTime(car.fastestlap.laptime) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters } from 'vuex';
import dayjs from 'dayjs';

export default {
  computed: {
    ...mapGetters({
      allCars: 'cars/getStandings',
    }),
  },
  methods: {
    formatTime: (time) => (time ? dayjs(time).format('mm:ss') : '-'),
  },
};
</script>
<style>
.bar-chart {
  position: fixed;
  left: 10%;
  top: 10%;
  width: 80%;
  height: 80%;
}

tr:nth-child(even) {
  background-color: #2d2c2c;
}
table .action {
  white-space: nowrap;
}

td.action {
  text-align: center;
  width: 5px;
}

table .content {
  width: 100%;
}

.carclass {
  color: white;
}

td.LMP1 {
  background-color: red;
}
td.LMP2 {
  background-color: blue;
}
td.LMGTEPro {
  background-color: green;
}
td.LMGTEAm {
  background-color: orange;
}

table td,
table th {
  vertical-align: top;
  /* border: 1px solid var(--font-color); */
  border: none !important;
  line-height: 1px !important;
  padding: 10px;
  font-size: 1em;
  color: rgb(185, 194, 66);
}
</style>
