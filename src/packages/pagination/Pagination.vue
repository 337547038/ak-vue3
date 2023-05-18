<template>
  <div v-show="!hidePage" :class="`${prefixCls}-page`">
    <div v-if="showTotal" class="total">
      共<span>{{ formatValue }}</span
      >条
    </div>
    <p-select
      v-if="pageSizes.length > 0"
      v-model="state.selectChange"
      :options="selectOptions"
    />
    <div class="page-list">
      <ul>
        <li>
          <a
            title="上一页"
            class="prev"
            :class="{ disabled: state.active === 1 }"
            @click="goTo(state.active - 1, state.active === 1)"
            >&lt;</a
          >
        </li>
        <li>
          <a
            title="1"
            :class="{ active: state.active === 1 }"
            @click="goTo(1, state.active === 1)"
            >1</a
          >
        </li>

        <li v-if="pageStart > 2">
          <a
            :title="`向前${pagerCount}页`"
            class="jump-prev"
            @click="goTo(state.active - pagerCount)"
          ></a>
        </li>
        <li v-for="(page, index) in pages[0]" :key="index">
          <a
            :title="page.toString()"
            :class="{ active: page === state.active }"
            @click="goTo(page, page === state.active)"
            v-text="page"
          ></a>
        </li>
        <li v-if="pageCount > pageEnd + 1">
          <a
            :title="`向后${pagerCount}页`"
            class="jump-next"
            @click="goTo(state.active + pagerCount)"
          ></a>
        </li>

        <li v-if="pageCount > 1">
          <a
            :title="pageCount + ''"
            :class="{ active: state.active === pageCount }"
            @click="goTo(pageCount, state.active === pageCount)"
            >{{ pageCount }}</a
          >
        </li>
        <li>
          <a
            title="下一页"
            class="next"
            :class="{ disabled: pageCount <= state.active }"
            @click="goTo(state.active + 1, pageCount <= state.active)"
            >&gt;</a
          >
        </li>
      </ul>
    </div>
    <div v-if="showJumper" class="show-jumper">
      前往
      <p-input v-model.number="state.goToPage" maxlength="5" @blur="blur" />
      页
    </div>
  </div>
</template>
<script lang="ts" setup>
  import prefixCls from '../prefix'
  import { Input as pInput } from '../input'
  import { Select as pSelect } from '../select'
  import { computed, watch, reactive } from 'vue'

  const props = withDefaults(
    defineProps<{
      current?: number
      total: number
      pageSize?: number
      showJumper?: boolean // 显示快速切换到某一页
      pagerCount?: number // 点击折叠向前或向后跳多少页
      pageSizes?: number[]
      showTotal?: boolean
      hideSinglePage?: boolean // 当只有一页时，是否隐藏分页
      format?: boolean // 总记录数值转成千分制
    }>(),
    {
      current: 1,
      pageSize: 20,
      pagerCount: 5,
      pageSizes: () => []
    }
  )
  const emits = defineEmits<{
    (e: 'update:current', page: number): void
    (e: 'change', page: number): void
    (e: 'changePageSizes', page: number): void
  }>()
  const state = reactive({
    active: props.current, // 当前页
    goToPage: props.current, // 快速跳到第几页
    selectChange: props.pageSize
  })
  const pageCount = computed(() => {
    return Math.ceil(props.total / state.selectChange)
  })
  const hidePage = computed(() => {
    return props.hideSinglePage && pageCount.value <= 1
  })
  const pages = computed(() => {
    let start = 0
    let end = pageCount.value - 1
    const pagerCount2 = parseInt((props.pagerCount / 2).toString())
    if (state.active + pagerCount2 < pageCount.value) {
      end = state.active + pagerCount2
    }

    if (state.active >= props.pagerCount) {
      start = state.active - pagerCount2
    } else {
      // 当前页小于pagerCount时
      end =
        props.pagerCount > pageCount.value ? pageCount.value : props.pagerCount
    }
    // 接近尾页时
    if (pageCount.value - state.active < props.pagerCount) {
      const fixedStart = pageCount.value - props.pagerCount + 1
      start = fixedStart > start ? start : fixedStart
    }
    if (start < 2) {
      start = 2
    }
    if (end >= pageCount.value - 1) {
      end = pageCount.value - 1
    }
    // 如果只有一页时
    const showPages = []
    let forStart = start
    while (forStart <= end) {
      showPages.push(forStart)
      forStart++
    }
    return [showPages, start, end]
  })
  const pageEnd = computed(() => {
    return parseInt(pages.value[2].toString())
  })
  const pageStart = computed(() => {
    // 页码循环开始和结束，用来判断前后的三个点链接显示
    return parseInt(pages.value[1].toString())
  })
  const selectOptions = computed(() => {
    const options: any = []
    props.pageSizes.forEach(item => {
      options.push({ label: `每页${item}条`, value: item })
    })
    return options
  })
  const formatValue = computed(() => {
    let val = props.total.toString()
    if (props.format) {
      val = props.total
        .toString()
        .replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
    }
    return val
  })
  watch(
    () => state.selectChange,
    (val: number) => {
      // 改变每页显示条数后，更新当前页
      if (state.active > pageCount.value) {
        state.active = pageCount.value
      }
      emits('changePageSizes', val)
    }
  )
  const goTo = (page: number, disabled?: boolean) => {
    if (disabled) {
      return
    }
    let goToPage = page
    if (page > pageCount.value) {
      goToPage = pageCount.value
    }
    if (page < 1) {
      goToPage = 1
    }
    state.active = goToPage
    state.goToPage = goToPage
    emits('update:current', state.active)
    // this.$emit('update:pagerCount', this.selectChange)
    emits('change', state.active)
  }
  const blur = () => {
    const toPage = state.goToPage
    goTo(toPage)
  }
  // defineExpose({ changePageSizes,change })
</script>
