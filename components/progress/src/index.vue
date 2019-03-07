<template>
  <div :class="`${prefixCls}-wrap`">
    <div :class="{[`${prefixCls}-inner`]:true}">111</div>
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
