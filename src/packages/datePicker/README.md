<!-- Created by 337547038 on 2021/6/20. -->

# DatePicker 日期选择

### 基本使用

```vue demo
<template>
  <div>
    <p
      >选择的值：{{ value1 }}<br />
      <ak-date-picker v-model="value1" placeholder="请选择时间" />
    </p>
    <p
      >选择的值：{{ value2 }}<br />
      <ak-date-picker v-model="value2" placeholder="请选择时间" />
    </p>
    <p
      >选择的值：{{ value3 }}<br />
      <ak-date-picker
        v-model="value2"
        placeholder="请选择时间"
        :disabled="true"
      />
    </p>
  </div>
</template>
<script setup>
  import { ref } from 'vue'

  const value1 = ref('')
  const value2 = ref('2019-06-01')
  const value3 = ref('2019-06-01')
</script>

```

### 年份选择

```vue demo
<template>
  <div>
    <p
      >选择的值：{{ value1 }}<br />
      <ak-date-picker v-model="value1" placeholder="请选择时间" type="year" />
    </p>
    <p
      >选择的值：{{ value2 }}<br />
      <ak-date-picker v-model="value2" placeholder="请选择时间" type="year" />
    </p>
    <p
      >限制选择范围。选择的值：{{ value2 }}<br />
      <ak-date-picker
        v-model="value3"
        placeholder="请选择时间"
        type="year"
        :disabled-date="disabledDate"
      />
    </p>
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const current = new Date().getFullYear()
  const value1 = ref('')
  const value2 = ref(current.toString())
  const value3 = ref('')
  const disabledDate = (date) => {
    const day = date.getFullYear()
    console.log(day)
    return day < current - 2 || day > current + 3
  }
</script>



```

### 月份选择

```vue demo
<template>
  <div>
    <p>
      选择的值：{{ value1 }}<br />
      <ak-date-picker v-model="value1" placeholder="请选择时间" type="month" />
    </p>
    <p>
      选择的值：{{ value2 }}<br />
      <ak-date-picker v-model="value2" placeholder="请选择时间" type="month" />
    </p>
    <p>
      限制选择范围。选择的值：{{ value3 }}<br />
      <ak-date-picker
        v-model="value3"
        placeholder="请选择时间"
        type="month"
        :disabled-date="disabledDate"
      />
    </p>
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const current = new Date().getFullYear()
  const value1 = ref('')
  const value2 = ref(current + '/' + '10')
  const value3 = ref('')
  const disabledDate = (date, type) => {
    if (type === 'month') {
      const day = date.getMonth()
      return day < 2 || day > 6
    }
  }
</script>



```

### 年月日选择

```vue demo
<template>
  <div>
    <p>
      选择的值：{{ value1 }}<br />
      <ak-date-picker v-model="value1" placeholder="请选择时间" type="date" />
    </p>
    <p>
      选择的值：{{ value2 }}<br />
      <ak-date-picker v-model="value2" placeholder="请选择时间" type="date" />
    </p>
    <p>
      限制选择范围。选择的值：{{ value3 }}<br />
      <ak-date-picker
        v-model="value3"
        placeholder="请选择时间"
        type="date"
        :disabled-date="disabledDate"
      />
    </p>
  </div>
</template>
<script setup>
  import { ref } from 'vue'

  const value1 = ref('')
  const value2 = ref(new Date().getTime().toString())
  const value3 = ref('')
  const disabledDate = (date, type) => {
    if (type === 'day') {
      const day = date.getDay()
      return day === 0 || day === 6
    }
  }
</script>



```

### 年月日时分秒选择

```vue demo
<template>
  <div>
    <p>
      选择的值：{{ value1 }}<br />
      <ak-date-picker
        v-model="value1"
        placeholder="请选择时间"
        type="datetime"
      />
    </p>
    <p>
      选择的值：{{ value2 }}<br />
      <ak-date-picker
        v-model="value2"
        placeholder="请选择时间"
        type="datetime"
      />
    </p>
  </div>
</template>
<script setup>
  import { ref } from 'vue'

  const value1 = ref('')
  const value2 = ref(new Date().getTime().toString())
</script>



```

### 手动输入

```vue demo
<template>
  <div>
    <p>
      选择的值：{{ value1 }}<br />
      <ak-date-picker
        v-model="value1"
        placeholder="请选择时间"
        :readonly="false"
      />
    </p>
  </div>
</template>
<script setup>
  import { ref } from 'vue'

  const value1 = ref('2021-06-01')
</script>



```

### 自定显示特殊字符

```vue demo
<template>
  <ak-date-picker
    v-model="value1"
    placeholder="请选择时间"
    :innerText="innerText"
    :disabled-date="disabledDate"
    :readonly="false"
  />
  <!--  <ak-date-picker v-model="value2" placeholder="请选择时间" />-->
</template>
<script setup lang="ts">
  import { ref } from 'vue'
  const value1 = ref()
  const innerText = (time: Date) => {
    if ([14, 15, 16].includes(time.getDate())) {
      return '休'
    }
    if ([17, 18, 19].includes(time.getDate())) {
      return '班'
    }
    return ''
  }
  const disabledDate = (time: Date, paneType: string) => {
    const day = time.getDay()
    return day === 0 || day === 6
  }
</script>


```

### 时间格式化

使用`format`指定输出显示的类型，即输入框显示的值。可使用y(年)、M(月)、d(日)、h(时)、m(分)、s(秒)、w(星期)
、timestamp，MM表示使用两位表示月份，使用`format`应配合`value-format`一起使用，否则当`format`的格式转换成时间异常，会被认为是无效的时间

```vue demo
<template>
  <div>
    <p>
      月日小于10时，前面不加0。选择的值：{{ value1 }}<br />
      <ak-date-picker
        v-model="value1"
        placeholder="请选择时间"
        format="y-M-d"
      />
    </p>
    <p>
      显示年月日格式。选择的值：{{ value2 }}<br />
      <ak-date-picker
        v-model="value2"
        placeholder="请选择时间"
        format="y年MM月dd日 星期w"
        value-format="y-MM-dd"
      />
    </p>
    <p>
      显示时间戳。选择的值：{{ value3 }}<br />
      <ak-date-picker
        v-model="value3"
        placeholder="请选择时间"
        format="timestamp"
        value-format="y-MM-dd"
      />
    </p>
  </div>
</template>
<script setup>
  import { ref } from 'vue'

  const value1 = ref('2021-06-01')
  const value2 = ref('2021-06-01')
  const value3 = ref('2021-06-01')
</script>


```

### 区间选择

```vue demo
<template>
  <div>
    <p>
      选择的值：{{ value1 }}<br />
      <ak-date-picker
        v-model="value1"
        type="monthRange"
        placeholder="请选择月份"
        endPlaceholder="请选择月份"
      />
    </p>
    <p>
      显示年月日格式。选择的值：{{ value2 }}<br />
      <ak-date-picker
        v-model="value2"
        type="dateRange"
        placeholder="请选择时间"
        endPlaceholder="请选择时间"
      />
    </p>
    <p>
      选择的值：{{ value3 }}<br />
      <ak-date-picker
        v-model="value3"
        type="datetimeRange"
        placeholder="请选择时间"
        endPlaceholder="请选择时间"
      />
    </p>
  </div>
</template>
<script setup>
  import { ref } from 'vue'

  const value1 = ref([])
  const value2 = ref([])
  const value3 = ref([])
</script>

```
## API

### DatePicker

|参数|类型| 说明                                                                                                   |
|----------|--------------|------------------------------------------------------------------------------------------------------|
|v-model        | String         | 绑定的值                                                                                                 |
|placeholder    | String         | 输入框提示占位文本                                                                                            |
|clear          | Boolean｜true   | 显示清空                                                                                                 |
|disabledDate   | Function       | 禁用的时间，return true时将不能选择                                                                              |
|disabled       | Boolean｜true  | 是否禁用                                                                                                 |
|type           | String         | 面板日期类型，选择后将按此格式返回，年/年月/年月日/年月日时分秒。可选`year,month,date,datetime,monthRange,dateRange,datetimeRange` |
|format         | String         | 输入框显示的格式，为空时按type默认格式                                                                                |
|valueFormat    | String         | 绑定的值格式，即v-model的格式,必须要是合法的日期格式，为空则输入format的格式                                                        |
|innerText      | Function        | 可以将特殊提示的文本插入到指定的日期里                                                                                  |
|appendToBody   | Boolean｜true   | 是否将弹出日期面板插入到body中                                                                                    |
|downStyle      | Object          | 下拉面板样式，快速个性化设置单个日期下拉面板                                                                               |
|downClass      | string          | 下拉面板类名                                                                                               |
|readonly       | Boolean｜true   | 日期输入框只读模式                                                                                            |
|size           | string         | 添加的大小尺寸样式                                                                                            |

### DatePicker Event

|参数|说明|
|----------|--------------|
|change       |改变事件|
