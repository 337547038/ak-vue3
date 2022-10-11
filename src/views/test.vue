<template>
  <ak-table :columns="columns" :data="tableData" />
</template>
<script setup>
  import { ref } from 'vue'

  const tableData = ref([
    {
      date: '2022-10-1',
      sex: '男',
      status: 1,
      type: '1'
    },
    {
      date: 1592751467000,
      sex: '女',
      status: '0',
      type: '2'
    },
    {
      date: '2019-01-29T16:00:00.000+0000',
      sex: '男',
      status: '0',
      type: '3'
    },
    {
      date: '',
      sex: '女',
      status: '1',
      type: '3'
    }
  ])
  const columns = [
    { type: 'index', label: '序号' },
    {
      label: '日期',
      prop: 'date',
      formatter: 'dateTime'
    },
    { label: '性别', prop: 'sex', tag: { dict: { 男: 'info', 女: 'danger' } } },
    { label: '状态', prop: 'status', dict: { 1: '启用', 0: '禁用' } },
    {
      label: '类型',
      prop: 'type',
      dict: { 1: '类型1', 2: '类型2', 3: '类型3' },
      tag: { dict: { 1: 'danger', 2: 'success' } }
    }
  ]
</script>
