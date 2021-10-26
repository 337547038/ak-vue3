<template>
  <div>
    <ak-table :data="tableData">
      <ak-column label="日期" prop="date" />
      <ak-column label="姓名" prop="name" />
      <ak-column label="省份" prop="province" />
      <ak-column label="城市" prop="city" />
      <ak-column label="地址" prop="address" />
      <ak-column label="邮编" prop="zip" />
      <ak-column label="操作">
        <template #header="scope">
          <a @click="delClick(scope)">操作删除</a>
        </template>
        <template #default="scope">
          <a @click="delClick(scope)">删除</a>
        </template>
      </ak-column>
    </ak-table>
    <hr>
    <ak-table :data="tableData" :columns="columns">
      <template #control="scope">
        <a @click="delClick(scope)">删除</a>
      </template>
      <template #control-header="scope">
        <a @click="delClick(scope)">删除</a>
      </template>
    </ak-table>
  </div>
</template>
<script>
import tableData from '@/packages/table/demoJs.json'

export default {
  setup() {
    const columns = [
      {
        type: 'selection'
      },
      {
        type: 'index',
        label: '序号'
      },
      {
        prop: 'date',
        label: '日期',
        sortBy: true
      },
      {
        prop: 'name',
        label: '姓名'
      },
      {
        prop: 'address',
        label: '地址',
        formatter: () => {
          return 'abc'
        }
      },
      {
        prop: 'control',
        label: '操作',
        sortBy: true
      }
    ]
    const delClick = item => {
      alert(JSON.stringify(item))
    }
    return {
      tableData,
      columns,
      delClick
    }
  }
}
</script>
