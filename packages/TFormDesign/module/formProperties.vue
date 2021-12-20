<template>
  <div>
    <el-form>
      <el-form-item label="表单布局">
        <el-radio-group class="group" v-model="formConfig.config.labelPosition">
          <el-radio-button label="left">左</el-radio-button>
          <el-radio-button label="top">top</el-radio-button>
          <el-radio-button label="right">right</el-radio-button>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    formConfig: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style>

</style>