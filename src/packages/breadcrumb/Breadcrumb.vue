<!--Created by 337547038 on 2018/1/30.-->
<template>
  <div class="breadcrumb clearfix">
    <template v-for="(item, index) in data">
      <router-link
        v-if="item.href"
        :key="index"
        :class="{ 'last-child': data.length === index + 1 }"
        :to="item.href"
        >{{ item.title }}</router-link
      >
      <span v-else :key="`span${index}`" v-text="item.title"></span>
      <span
        v-if="data.length > index + 1"
        :key="index + 100"
        class="separator"
        >{{ separator }}</span
      >
    </template>
  </div>
</template>
<script lang="ts" setup>
  import type { BreadcrumbItem } from './type'

  withDefaults(
    defineProps<{
      data: BreadcrumbItem[]
      separator?: string
    }>(),
    {
      separator: '>'
    }
  )
</script>
