<template>
  <div :class="`${prefixCls}-wrap`">
    <slot name="start"></slot>
    <div :class="`${prefixCls}-main`">
      <div :class="{[`${prefixCls}-out`]:true}" :style="{ height: barHeight}">
        <div :class="{[`${prefixCls}-inner`]:true}" :style="{ width: value + '%', height: barHeight}"></div>
      </div>
    </div>
    <slot name="end"></slot>
  </div>
</template>

<script>
import config from '../_util/config'

export default {
  name: 'PProgress',
  props: {
    value: Number,
    barHeight: {
      type: String,
      default: '4px'
    }
  },
  computed: {
    prefixCls: () => `${config.prefixCls}-progress`
  }
}
</script>
