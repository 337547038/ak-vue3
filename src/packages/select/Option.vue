<script lang="ts">
  import prefixCls from '../prefix'
  import { inject, defineComponent, onMounted } from 'vue'
  export default defineComponent({
    name: `${prefixCls}Option`,
    props: {
      value: String,
      label: String,
      disabled: Boolean,
      className: String
    },
    setup(props) {
      const getChildOption: any = inject(`${prefixCls.value}GetChildOption`, '')
      onMounted(() => {
        getChildOption &&
          getChildOption({
            label: props.label,
            value: props.value,
            disabled: props.disabled,
            className: props.className
          })
      })
    },
    render() {
      return null
    }
  })
</script>
