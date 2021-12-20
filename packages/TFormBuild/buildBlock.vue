<template>
  <div>
    <t-form-item :element="element" :formConfig="formConfig"></t-form-item>
  </div>
</template>

<script>
export default {
  props: {
    element: {
      type: Object,
      default: () => {}
    },
    formConfig: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style>

</style>