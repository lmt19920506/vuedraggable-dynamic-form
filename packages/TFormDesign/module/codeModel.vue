<template>
  <section>
    <el-dialog :visible.sync="isShowDialog" :close-on-click-modal="false" title="生成代码">
      <el-tabs v-model="tabName" tab-position="left">
        <el-tab-pane label="Vue" name="vue">
          <previewCode :editorJson="editorVueJson" fileFormat="vue"/>
        </el-tab-pane>
        <el-tab-pane label="Html" name="html"></el-tab-pane>
      </el-tabs>
    </el-dialog>
  </section>
</template>

<script>
import { codeVueFront, codeHtmlFront, codeVueLast, codeHtmlLast } from '../config/vue-html-data'
import previewCode from '../../PreviewCode/index'
export default {
  components: {
    previewCode
  },
  data() {
    return {
      isShowDialog: false,
      tabName: 'vue',
      jsonData: {},
      editorVueJson: ''
    }
  },
  watch: {
    isShowDialog(val) {
      if (val) {
        this.editorVueJson = codeVueFront + JSON.stringify(this.jsonData, null, 2) + codeVueLast
      }
    }
  }
}
</script>

<style>

</style>