<template>
  <div :class="`${prefixCls}-wrap`">
    <slot name="start"></slot>
    <div :class="{[`${prefixCls}-inner`]:true}">111</div>
    <slot name="end"></slot>
  </div>
</template>

<script>
import config from '../../_util/config'

export default {
  name: 'NProgress',
  computed: {
    prefixCls: () => `${config.prefixCls}-progress`
  }
}
</script>

<style lang="less">
@import './index.less';
</style>
