<script>
  import { inject } from 'vue'
  import prefixCls from '../prefix'
  export default {
    name: 'NodeContent',
    props: {
      data: Object
    },
    render(ctx) {
      const treeSlots = inject(`${prefixCls}TreeSlots`)
      const propsData = inject(`${prefixCls}PropsData`)
      if (typeof treeSlots.default === 'function') {
        return treeSlots.default({ node: ctx.data, data: propsData.dataList })
      }
      // return h('span', ctx.data.label)
      return null
    }
  }
</script>
