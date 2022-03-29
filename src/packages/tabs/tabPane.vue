<script lang="ts">
import {prefixCls} from '../prefix'
import {defineComponent} from 'vue'
import pType from '../util/pType'

export default defineComponent({
  name: `${prefixCls}TabPane`,
  props: {
    className: pType.string(),
    label: pType.string(),
    name: pType.string(),
    disabled: pType.bool()
  },
  setup(props, {slots}) {
  },
  render() {
    return null
  }
})
</script>
