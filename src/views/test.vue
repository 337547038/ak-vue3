<template>
  <div>
    <ak-table :data="tableData" height="200px" width="600px">
      <ak-column type="selection" width="50px" fixed="left" />
      <ak-column type="index" label="序号" width="50px" />
      <ak-column label="日期" prop="date" width="200px" />
      <ak-column label="姓名" prop="name" width="100px" />
      <ak-column label="省份" prop="province" width="100px" />
      <ak-column label="城市" prop="city" width="100px" />
      <ak-column label="地址" prop="address" width="300px" />
      <ak-column label="邮编" prop="zip" width="100px" fixed="right" />
    </ak-table>
  </div>
</template>
<script lang="ts" setup>
import tableData from '../packages/table/demoJs.json'
</script>
