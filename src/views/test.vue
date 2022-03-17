<template>
  <div style="height: 400px;overflow-y: auto" class="scroll-table">
    <ak-table :data="tableData" ref="singleTable" fixedBottomScroll=".scroll-table">
      <ak-column prop="date" label="Date" width="180" />
      <ak-column prop="name" label="Name1" width="180" />
      <ak-column prop="name" label="Name2" width="180" />
      <ak-column prop="name" label="Name3" width="180" />
      <ak-column prop="name" label="Name4" width="280" />
      <ak-column prop="name" label="Name5" width="280" />
      <ak-column prop="address" label="Address6" width="380"/>
      <ak-column prop="address" label="Address7" width="280"/>
      <ak-column prop="address" label="Address8" width="280" />
    </ak-table>
  </div>
</template>
<script setup>
import {ref} from 'vue'
const tableData =ref([
  {name: 'Tom',},{name: 'Tom',},{name: 'Tom',},{name: 'Tom',},{name: 'Tom',},{name: 'Tom',},{name: 'Tom',},{name: 'Tom',},{name: 'Tom',},{name: 'Tom',},{name: 'Tom',},{name: 'Tom',},{name: 'Tom',},{name: 'Tom',},
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
])
</script>
