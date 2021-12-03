<template>
  <div>
    <p>当前值：{{ value1 }}</p>

    <ak-cascader v-model="value1" placeholder="请选择" :options="options" />
    <ak-cascader v-model="value2" placeholder="请选择" :options="options" :multiple="true" />
    <ak-cascader v-model="value3" placeholder="请选择" :options="options" :multiple="true" />


<!--    <div>
      <ak-select-down
        v-model="modelValue"
        :multiple="true"
        placeholder="placeholder">
        <p>21311</p>
        <p>21311</p>
      </ak-select-down>
    </div>-->
  </div>
</template>
<script>
import {ref} from 'vue'

export default {
  setup() {
    const value1 = ref(['component', 'form', 'checkbox'])
    const value2 = ref([['component', 'form', 'checkbox'],['guide', 'navigation', 'top nav']])
    const value3 = ref([])
    // const value2 = ref([])
    const modelValue = ref([])
    const options = [
      {
        value: 'guide',
        label: 'Guide',
        children: [
          {
            value: 'disciplines',
            label: 'Disciplines',
            children: [
              {
                value: 'consistency',
                label: 'Consistency'
              },
              {
                value: 'feedback',
                label: 'Feedback'
              },
              {
                value: 'efficiency',
                label: 'Efficiency'
              },
              {
                value: 'controllability',
                label: 'Controllability'
              }
            ]
          },
          {
            value: 'navigation',
            label: 'Navigation',
            children: [
              {
                value: 'side nav',
                label: 'Side Navigation'
              },
              {
                value: 'top nav',
                label: 'Top Navigation'
              }
            ]
          }
        ]
      },
      {
        value: 'component',
        label: 'Component',
        children: [
          {
            value: 'basic',
            label: 'Basic',
            children: [
              {
                value: 'layout',
                label: 'Layout'
              },
              {
                value: 'color',
                label: 'Color'
              },
              {
                value: 'typography',
                label: 'Typography'
              },
              {
                value: 'icon',
                label: 'Icon'
              },
              {
                value: 'button',
                label: 'Button'
              }
            ]
          },
          {
            value: 'form',
            label: 'Form',
            children: [
              {
                value: 'radio',
                label: 'Radio'
              },
              {
                value: 'checkbox',
                label: 'Checkbox'
              },
              {
                value: 'input',
                label: 'Input'
              },
              {
                value: 'input-number',
                label: 'InputNumber'
              },
              {
                value: 'select',
                label: 'Select'
              },
              {
                value: 'cascader',
                label: 'Cascader'
              },
              {
                value: 'switch',
                label: 'Switch'
              },
              {
                value: 'slider',
                label: 'Slider'
              },
              {
                value: 'time-picker',
                label: 'TimePicker'
              },
              {
                value: 'date-picker',
                label: 'DatePicker'
              },
              {
                value: 'datetime-picker',
                label: 'DateTimePicker'
              },
              {
                value: 'upload',
                label: 'Upload'
              },
              {
                value: 'rate',
                label: 'Rate'
              },
              {
                value: 'form',
                label: 'Form'
              }
            ]
          },
          {
            value: 'data',
            label: 'Data',
            children: [
              {
                value: 'table',
                label: 'Table'
              },
              {
                value: 'tag',
                label: 'Tag'
              },
              {
                value: 'progress',
                label: 'Progress'
              },
              {
                value: 'tree',
                label: 'Tree'
              },
              {
                value: 'pagination',
                label: 'Pagination'
              },
              {
                value: 'badge',
                label: 'Badge'
              }
            ]
          },
          {
            value: 'notice',
            label: 'Notice',
            children: [
              {
                value: 'alert',
                label: 'Alert'
              },
              {
                value: 'loading',
                label: 'Loading'
              },
              {
                value: 'message',
                label: 'Message'
              },
              {
                value: 'message-box',
                label: 'MessageBox'
              },
              {
                value: 'notification',
                label: 'Notification'
              }
            ]
          },
          {
            value: 'navigation',
            label: 'Navigation',
            children: [
              {
                value: 'menu',
                label: 'Menu'
              },
              {
                value: 'tabs',
                label: 'Tabs'
              },
              {
                value: 'breadcrumb',
                label: 'Breadcrumb'
              },
              {
                value: 'dropdown',
                label: 'Dropdown'
              },
              {
                value: 'steps',
                label: 'Steps'
              }
            ]
          },
          {
            value: 'others',
            label: 'Others',
            children: [
              {
                value: 'dialog',
                label: 'Dialog'
              },
              {
                value: 'tooltip',
                label: 'Tooltip'
              },
              {
                value: 'popover',
                label: 'Popover'
              },
              {
                value: 'card',
                label: 'Card'
              },
              {
                value: 'carousel',
                label: 'Carousel'
              },
              {
                value: 'collapse',
                label: 'Collapse'
              }
            ]
          }
        ]
      },
      {
        value: 'resource',
        label: 'Resource',
        children: [
          {
            value: 'axure',
            label: 'Axure Components'
          },
          {
            value: 'sketch',
            label: 'Sketch Templates'
          },
          {
            value: 'docs',
            label: 'Design Documentation'
          }
        ]
      }
    ]
    return {
      value1,
      value2,
      value3,
      options,
      modelValue
    }
  }
}
</script>
