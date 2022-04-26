<!-- Created by 337547038 on 2021/9/29. -->
<script>
  import { defineComponent, h } from 'vue'

  export default defineComponent({
    name: 'HeaderSlot',
    props: {
      data: Object,
      index: Number
    },
    setup(props) {
      if (props.data.slots && props.data.slots.header) {
        return () => [
          h(
            'span',
            {},
            props.data.slots.header({
              column: props.data,
              index: props.index
            })
          )
        ]
      } else {
        return () => []
      }
    }
  })
</script>
