<template>
  <div>
    <el-dialog
      :visible.sync="visible"
      :close-on-click-modal="false"
      title="导入json"
    >
      <codemirror
        ref="codeMirror"
        v-model="jsonFormate"
        style="height: 100%"
      ></codemirror>
      <span slot="footer">
        <el-button type="primary" @click="isShowUploadDialog = true"
          >导入json文件</el-button
        >
        <el-button type="primary" @click="confirm">确定</el-button>
      </span>
    </el-dialog>
    <el-dialog :visible.sync="isShowUploadDialog" title="导入json文件" width="30%" :close-on-click-modal="false">
      <el-upload action="127.0.0.1" class="upload-demo" drag accept="application/json" :before-upload="beforeUpload">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传json文件</div>
      </el-upload>
    </el-dialog>
  </div>
</template>

<script>
import jsonFormate from "../config/jsonFormate";
import { codemirror } from "vue-codemirror-lite";
export default {
  components: {
    codemirror,
  },
  data() {
    return {
      visible: false,
      isShowUploadDialog: false,
      jsonFormate: jsonFormate,
      jsonData: {},
      action: '/abc',
      handleSetSelectItem: null
    };
  },
  mounted() {
    this.jsonFormate = jsonFormate;
  },
  methods: {
    confirm() {
      this.$emit("importJsonConfirm", this.jsonFormate);
      this.visible = false
    },
    beforeUpload(file) {
      console.log('beforeUpload---', file)
      // 通过json文件导入
      const _this = this;
      const reader = new FileReader();
      console.log("reader---", reader);
      reader.readAsText(file);
      reader.onload = function() {
        _this.jsonFormate = this.result;
        _this.handleImportJson();
      };
      return false;
    },
    handleImportJson() {  // 该函数是为了验证导入的格式是否正确
      // 导入JSON
      try {
        const editorJsonData = JSON.parse(this.jsonFormate);
        console.log('editorJsonData---', editorJsonData)
        this.jsonData.list = editorJsonData.list;
        this.jsonData.config = editorJsonData.config;
        this.jsonData.config.layout = editorJsonData.config.layout;
        this.handleCancel();
        // 导入之后，需要清除已选择key
        // this.handleSetSelectItem({ key: "" });

        this.$message.success("导入成功");
      } catch (error) {
        console.error(error);
        this.$message.error("导入失败，数据格式不对");
      }
    },
    handleCancel() {
      this.isShowUploadDialog = false
      this.confirm()
      this.visible = false
    }
  },
  watch: {
    visible(val) {
      if (val) {
        this.jsonFormate = jsonFormate;
      }
    },
  },
};
</script>

<style></style>
