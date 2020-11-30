<template>
  <section>
    <div class="container">
      <table>
        <thead>
          <th>#</th>
          <th>name</th>
          <th>distance</th>
          <th>entryspeed</th>
          <th>apex speed</th>
          <th>exit speed</th>
          <th>turn_in_point</th>
          <th>exit point</th>
          <th>risk 1</th>
          <th>risk 2</th>
          <th>risk 3</th>
        </thead>
        <tbody>
          <tr v-for="corner in getInfo.track.track.corners" :key="corner.num">
            <td>{{ corner.num }}</td>
            <td>{{ corner.name }}</td>
            <td>{{ corner.point }}</td>
            <td>{{ corner.entry_speed }}</td>
            <td>{{ corner.exit_speed }}</td>
            <td>{{ corner.exit_speed }}</td>
            <td>{{ corner.turn_in_point }}</td>
            <td>{{ corner.exit_point }}</td>
            <td>{{ corner.lose_control_risk_multiplier }}</td>
            <td>{{ corner.car_wear_multiplier }}</td>
            <td>{{ corner.tyre_wear_multiplier }}</td>
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <th>#</th>
          <th>name</th>
          <th>distance</th>
          <th>entryspeed</th>
          <th>apex speed</th>
          <th>exit speed</th>
          <th>turn_in_point</th>
          <th>exit point</th>
          <th>risk 1</th>
          <th>risk 2</th>
          <th>risk 3</th>
        </thead>
        <tbody>
          <tr v-for="car in getInfo.track.cars" :key="car.carnumber">
            <td>{{ car.carnumber }}</td>
            <!-- <td>{{ car.category }}</td> -->
            <!-- <td>{{ car.chassis.name }}</td> -->
            <td>{{ car.car.drivers[0].name }}</td>
            <td>{{ car.car.drivers[0].nationality }}</td>
            <td>{{ car.car.drivers[0].category }}</td>
            <td>{{ car.car.drivers[1].name }}</td>
            <td>{{ car.car.drivers[1].nationality }}</td>
            <td>{{ car.car.drivers[1].category }}</td>
            <td>{{ car.car.drivers[2].name }}</td>
            <td>{{ car.car.drivers[2].nationality }}</td>
            <td>{{ car.car.drivers[2].category }}</td>
          </tr>
        </tbody>
      </table>
      <h2 id="project-goals">Project Goals</h2>
      <p>
        Terminal CSS has no overhead and is lightweight
        <strong>(~ 3k gzip)</strong>. The source is written in
        <strong>pure css</strong> to be accessible for everybody and
        easy to contribute.
      </p>
    </div>
    <!-- <Battlevs /> -->
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      getInfo: 'staticInfo/getInfo',
    }),
    watch: {
      getInfo(newValue, oldValue) {
        console.log(newValue);
      },
    },
  },
};
</script>
