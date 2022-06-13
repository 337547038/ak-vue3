<template>
  <div>
    <ak-table :data="tableData" :columns="columns">
      <template #control="scope">
        <span @click="scope.extend()">{{
          scope.toggle ? '收起' : '展开'
        }}</span>
      </template>
      <template #extend="scope"> 返回当前行所有信息：{{ scope }} </template>
    </ak-table>
  </div>
</template>
<script setup>
  import tableData from '../packages/table/demoJs.json'

  const columns = [
    { type: 'selection' },
    { type: 'index', label: '序号' },
    { label: '日期', prop: 'date' },
    { label: '姓名', prop: 'name' },
    { label: '性别', prop: 'sex' },
    { label: '省份', prop: 'province' },
    { label: '城市', prop: 'city' },
    { label: '地址', prop: 'address' },
    { label: '操作', prop: 'control' },
    { type: 'extend', prop: 'extend' }
  ]
</script>
