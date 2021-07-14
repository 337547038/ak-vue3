<script>
import {inject} from 'vue'

export default {
  name: 'NodeContent',
  props: {
    data: Object
  },
  render(ctx) {
    const treeSlots = inject('treeSlots')
    const propsData = inject('propsData')
    if (typeof treeSlots.default === 'function') {
      return treeSlots.default({node: ctx.data, data: propsData.dataList})
    }
    // return h('span', ctx.data.label)
    return null
  }
}
</script>
