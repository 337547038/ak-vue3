import { defineComponent, h } from 'vue'

export default defineComponent({
  props: {
    slots: [Object, String]
  },
  // @ts-ignore
  setup(props) {
    // console.log(props.slots[0])
    // return () => [h('div', { props: props.slots?.props }, props.slots)]
    return () => [h('div', {}, props.slots)]
  }
})
