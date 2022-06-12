<template>
  <div>
    <ak-table :data="tableData" :columns="columns" :rowColSpan="rowColSpan">
      <template #control="scope">
        <a @click="delClick(scope)">删除</a>
      </template>
    </ak-table>
  </div>
</template>
<script setup>
  import tableData from '../packages/table/demoJs.json'

  const rowColSpan = [
    {
      row: 1,
      col: 2,
      colSpan: 2
    },
    {
      row: 2,
      col: 0,
      colSpan: 2,
      rowSpan: 2
    },
    {
      row: 3,
      col: 1,
      colSpan: 0
    }
  ]
  const columns = [
    {
      label: '日期',
      prop: 'dateTime',
      children: [
        {
          label: '年份',
          prop: 'date'
        },
        {
          label: '月份',
          prop: 'date'
        }
      ]
    },
    {
      prop: 'name',
      label: '姓名'
    },
    {
      label: '收化地址',
      prop: 'address2',
      children: [
        {
          label: '省份',
          prop: 'province'
        },
        {
          label: '城市',
          prop: 'city'
        },
        {
          label: '地址',
          prop: 'address'
        }
      ]
    },
    {
      prop: 'control',
      label: '操作'
    }
  ]
  const delClick = (item) => {
    alert(JSON.stringify(item))
  }
</script>
