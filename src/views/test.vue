<template>
  <div style="margin: 100px">
    <p>当前值{{value1}}</p>
    <div>
      <ak-cascader
        lazy
        :lazyLoad="lazyLoad"
        v-model="value1"
        placeholder="单选"
        :options="[]" />
    </div>
    <p>当前值：{{ value3 }}</p>
    <div>
      <ak-cascader
        multiple
        filterable
        collapseTags
        v-model="value3"
        placeholder="多选"
        :options="options" />
    </div>
    <!--    <div>
          <ak-cascader v-model="value1" placeholder="请选择" :options="options" />
        </div>-->
    <!--    <div>
          <ak-cascader v-model="value3" placeholder="请选择" :options="options" :multiple="true" />
        </div>-->

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
  setup(props) {
    const value1 = ref(['广东,广州,白云'])
    const value2 = ref([['component', 'form', 'checkbox'], ['guide', 'navigation', 'top nav']])
    const value3 = ref(['广东,广州,白云','上海,黄浦区'])
    // const value2 = ref([])
    const modelValue = ref([])
    const index = ref(0)
    const options = [
      {
        value: '广东',
        label: '广东',
        children: [
          {
            value: '广州',
            label: '广州',
            children: [
              {
                value: '天河',
                label: '天河'
              },
              {
                value: '白云',
                label: '白云'
              },
              {
                value: '越秀',
                label: '越秀'
              },
              {
                value: '海珠',
                label: '海珠'
              }
            ]
          },
          {
            value: '深圳',
            label: '深圳',
            children: [
              {
                value: '罗湖区',
                label: '罗湖区'
              },
              {
                value: '宝安区',
                label: '宝安区'
              },
              {
                value: '南山区',
                label: '南山区'
              },
              {
                value: '龙岗区',
                label: '龙岗区'
              },
              {
                value: '盐田区',
                label: '盐田区'
              }
            ]
          },
          {
            value: '东莞',
            label: '东莞',
            children: [
              {
                value: '长安',
                label: '长安'
              },
              {
                value: '虎门',
                label: '虎门'
              },
              {
                value: '茶山',
                label: '茶山'
              }
            ]
          }
        ]
      },
      {
        value: '北京',
        label: '北京',
        children: [
          {
            value: '西城区',
            label: '西城区'

          },
          {
            value: '崇文区',
            label: '崇文区'
          },
          {
            value: '宣武区',
            label: '宣武区'
          },
          {
            value: '朝阳区',
            label: '朝阳区'
          },
          {
            value: '丰台区',
            label: '丰台区'
          },
          {
            value: '海淀区',
            label: '海淀区'
          }
        ]
      },
      {
        value: '上海',
        label: '上海',
        children: [
          {
            value: '黄浦区',
            label: '黄浦区'
          },
          {
            value: '卢湾区',
            label: '卢湾区'
          },
          {
            value: '徐汇区',
            label: '徐汇区'
          },
          {
            value: '广州1',
            label: '广州'
          }
        ]
      }
    ]
    const options2 = ref([])
    const lazyLoad = (obj, resolve) => {
      console.log(obj)
      console.log('lazyload')
      index.value++
      if (index.value === 3) {
        resolve(false)
      } else {
        setTimeout(() => {
          resolve([
            {
              value: 'guide1' + index.value,
              label: 'GuideLabel' + index.value
            },
            {
              value: 'guide2' + index.value,
              label: 'GuideLabe2' + index.value
            }
          ])
        }, 1000)
      }
    }
    const filterOptions = () => {
      // {
      // label:['Guide','Disciplines','Consistency']
      // }
      const result = init(options, '')
      console.log(result)

      function init(obj, parent) {
        obj.forEach(item => {
          if (parent) {
            item.fullLabel = parent + ',' + item.label
          }
          //item.parent.push(item.label)
          if (item.children && item.children.length !== 0) {
            init(item.children, item.fullLabel || item.label)
          }
        })
        return obj
      }
    }
    const inputFocus=()=>{
      console.log('inputFocus')
    }
    // filterOptions()
    return {
      value1,
      value2,
      value3,
      options,
      options2,
      modelValue,
      lazyLoad,
      inputFocus
    }
  }
}
</script>
