<template>
  <div>
    <ak-table
      ref="tableEl"
      :data="tableData"
      :columns="columns"
      height="200px"
    />
  </div>
</template>
<script setup>
  import tableData from '../packages/table/demoJs.json'

  const columns = [
    { type: 'selection', width: '50px',fixed:'left',className:'fixed-left'},
    { type: 'index', label: '序号', width: '50px',fixed:'left' },
    { label: '日期', prop: 'date', width: '50px' },
    { label: '姓名', prop: 'name', width: '200px' },
    { label: '省份', prop: 'province', width: '100px' },
    { label: '城市', prop: 'city', width: '100px' },
    { label: '地址', prop: 'address', width: '300px' },
    { label: '邮编', prop: 'zip', width: '100px',fixed:'right',className:'fixed-right' }
  ]
</script>
