<template>
  <div>
    <el-dialog :visible.sync="visible" :close-on-click-modal="false" title="预览">
      <t-form-build :value="jsonData"></t-form-build>
      <span slot="footer">
        <el-button size="mini" type="primary" @click="getJson"
          >获取数据</el-button
        >
      </span>
    </el-dialog>
    <el-dialog :visible.sync="isShowGetJsonDialog">
      <previewCode :editorJson="jsonString" />
    </el-dialog>
  </div>
</template>

<script>
import previewCode from "../../PreviewCode/index";
export default {
  components: {
    previewCode,
  },
  props: {
    editorJson: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      visible: false,
      isShowGetJsonDialog: false,
      jsonData: {},
      jsonString: ''
    };
  },
  methods: {
    getJson() {
      this.isShowGetJsonDialog = true;
      this.generationJson()
    },
    generationJson() {
      let obj = {};
      this.jsonData.list.forEach((item) => {
        for (const key in item) {
          if (key === "model") {
            obj[item[key]] = item.options.defaultValue || "";
          }
        }
      });
      console.log("formModel---", obj);
      this.jsonString = JSON.stringify(obj, null, 2)
    }
  },
  // computed: {
  //   formModel() {
      
  //   },
  // },
};
</script>

<style></style>
