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
