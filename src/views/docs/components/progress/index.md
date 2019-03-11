# 进度条 Progress

表示某个任务的进度。

## 代码演示

```html
<!-- *.vue -->
<template>
  <p-wing-blank size="10%">
    <p-flex-item>
      <p-white-space size="30px"></p-white-space>
      <p-progress :value="0" :bar-height="'3px'">
        <div slot="start">0%</div>
        <div slot="end">100%</div>
      </p-progress>
      <p-white-space size="30px"></p-white-space>
      <p-progress :value="40" :bar-height="'3px'">
        <div slot="start">40%</div>
        <div slot="end">100%</div>
      </p-progress>
      <p-white-space size="30px"></p-white-space>
      <p-progress :value="10" :bar-height="'5px'">
        <div slot="start">10%</div>
        <div slot="end">100%</div>
      </p-progress>
    </p-flex-item>
  </p-wing-blank>
</template>

<script>
export default {
  name: 'ProgressDemo'
}
</script>
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 进度条已进行的百分比 | Number | 0 |
| barHeight | 进度条高度 | String | 4px |

## slot

| 属性 | 说明 |
| --- | --- |
| start | 进度条左侧的DOM |
| end | 进度条右侧的DOM |