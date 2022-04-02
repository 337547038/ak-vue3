<!-- Created by 337547038 -->
<template>
  <div
    :class="[prefixCls + '-divider', direction]"
    :style="{ '--divider-border-style': borderStyle }"
  >
    <span v-if="$slots.default" class="divider-text" :class="[contentPosition]"
      ><slot></slot
    ></span>
  </div>
</template>

<script lang="ts" setup>
import prefixCls from "../prefix";

withDefaults(
  defineProps<{
    direction?: "vertical" | "";
    borderStyle?: "dashed" | "dashed" | "soild";
    contentPosition?: "left" | "right" | "center";
  }>(),
  {
    direction: "",
    borderStyle: "soild",
    contentPosition: "center",
  }
);
</script>
