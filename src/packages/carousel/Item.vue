<script lang="ts">
  import prefixCls from '../prefix'
  import { inject, defineComponent } from 'vue'
  export default defineComponent({
    name: `CarouselItem`,
    props: {
      className: String
    },
    setup(props: any, { slots }: any) {
      const childrenList: any = inject(`${prefixCls}ChildrenList`)
      childrenList.push({
        slots: slots,
        props: props
      })
      return {
        childrenList
      }
    },
    render() {
      return null
    }
  })
</script>
