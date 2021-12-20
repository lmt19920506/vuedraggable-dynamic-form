<template>
  <div>
    <el-input v-model="forms[element.key]" v-if="element.type === 'input'"></el-input>
  </div>
</template>

<script>
export default {
  props: ['element', 'config', 'form'],
  computed: {
    forms() {
      return this.form
    }
  },
  methods: {
    generateModel() {
      const data = {};
      this.element.list.forEach(e => {
        console.log('e---', e)
        data[e.model] = e.options.defaultValue;
        // data['key'] = e.key
      });
      console.log('data---', data)
    }
  }
};
</script>

<style></style>
