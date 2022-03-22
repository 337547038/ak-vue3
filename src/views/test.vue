<template>
  <ak-table :data="tableData">
    <ak-column label="日期" prop="date" />
    <ak-column label="姓名" prop="name" />
    <ak-column label="性别" prop="sex" :tag="{dict:{'男':'info','女':'danger'}}" />
    <ak-column label="省份" prop="province" />
    <ak-column label="城市" prop="city" />
    <ak-column label="地址" prop="address" />
    <ak-column label="邮编" prop="zip" />
    <ak-column label="操作">
      <template #default="scope">
        <a @click="delClick(scope)">删除</a>
      </template>
    </ak-column>
  </ak-table>
</template>
<script>
import tableData from '../packages/table/demoJs.json'

export default {
  setup() {
    const delClick = item => {
      alert(JSON.stringify(item))
    }
    return {
      tableData,
      delClick
    }
  }
}
</script>
