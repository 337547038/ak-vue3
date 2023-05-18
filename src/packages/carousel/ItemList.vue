<script>
  import { h, renderSlot } from 'vue'

  export default {
    name: 'ItemList',
    props: {
      childItem: Object,
      styleCls: Object,
      className: String
    },
    render() {
      const cls = ['carousel-slide']
      const itemCls = this.childItem.className
      itemCls && cls.push(itemCls)
      this.className && cls.push(this.className)
      return h(
        'div',
        {
          class: cls.join(' '),
          style: this.styleCls
        },
        [renderSlot(this.childItem.slots, 'default')]
      )
    }
  }
</script>
