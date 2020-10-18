<template>
  <table>
    <thead>
      <th>
        #
      </th>
      <th>
        category
      </th>
      <th>
        car
      </th>
      <th>
        driver
      </th>
      <th>
        current speed
      </th>
      <th>
        laps
      </th>
      <th>
        s2
      </th>
      <th>
        s3
      </th>
      <th>
        last lap
      </th>
    </thead>
    <tbody>
      <tr v-for="todo in allSprints" :key="todo.carnumber">
        <td class="action">
          {{ todo.carnumber }}
        </td>
        <td :class="todo.category + ' carclass ' + 'action'">
          {{ todo.category }}
        </td>
        <td>
          {{ todo.car2 }}
        </td>
        <td>
          {{ todo.realdeal.drivers[0].name }}
        </td>
        <td>
          {{ todo.speed }}
        </td>
        <td>
          {{ todo.laps }}
        </td>
        <td>
          1
        </td>
        <td>
          21
        </td>
        <td>
          2:01
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      allLaps: "team/getlaps"
    })
  }
};
</script>
<style></style>
