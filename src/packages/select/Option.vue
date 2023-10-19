<script lang="ts">
  import prefixCls from '../prefix'
  import { inject, defineComponent, onMounted } from 'vue'
  export default defineComponent({
    props: {
      value: String,
      label: String,
      disabled: Boolean,
      className: String
    },
    setup(props: { label: any; value: any; disabled: any; className: any }) {
      const getChildOption: any = inject(`${prefixCls}GetChildOption`, '')
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
