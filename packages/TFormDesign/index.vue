<template>
  <div class="box-container">
    <el-container style="height: 100%">
      <el-aside width="300px">
        <el-collapse v-model="activeName">
          <el-collapse-item name="basic">
            <template slot="title">
              <span class="collapse-title">基础组件</span>
            </template>
            <left-menu-item
              :list="basicsArray"
              @start="handleStart"
              @end="handleEnd"
              @generateKey="generateKey"
            ></left-menu-item>
          </el-collapse-item>
        </el-collapse>
      </el-aside>
      <el-container class="center-container">
        <el-header class="btn-bar" height="45px">
          <div>
            <operate-area
              @handleOpenCodeModel="handleOpenCodeModel"
              @handleOpenJsonModel="handleOpenJsonModel"
              @handlePreview="handlePreview"
              @handleOpenImportJsonModal="handleOpenImportJsonModal"
            ></operate-area>
          </div>
        </el-header>
        <el-main>
          <form-component-panel
            :data="data"
            @handleSetSelectItem="handleSetSelectItem"
            :selectItem.sync="selectItem"
          ></form-component-panel>
        </el-main>
      </el-container>
      <el-aside width="450px">
        <el-tabs v-model="tabValue">
          <el-tab-pane label="表单属性设置" name="1">
            <formProperties :formConfig="data" />
          </el-tab-pane>
          <el-tab-pane label="控件属性设置" name="2">
            <formItemProperties :element="selectItem" />
          </el-tab-pane>
        </el-tabs>
      </el-aside>
    </el-container>
    <codeModel ref="codeModel" />
    <jsonModel ref="jsonModel" />
    <previewModel ref="previewModel" />
    <importJsonModel
      ref="importJsonModel"
      @importJsonConfirm="importJsonConfirm"
    />
  </div>
</template>

<script>
import leftMenuItem from "./module/collapseItem";
import operationArea from "./module/operateArea";
import formComponentPanel from "./module/formComponentPanel";
import formProperties from "./module/formProperties";
import formItemProperties from "./module/formItemProperties";
import codeModel from "./module/codeModel";
import jsonModel from "./module/jsonModal";
import previewModel from "./module/previewModel";
import importJsonModel from "./module/importJsonModel";
import {
  basicsList,
  customComponents,
  layoutList,
} from "./config/formItemConfig";
import FormComponentPanel from "./module/formComponentPanel.vue";
import OperateArea from "./module/operateArea.vue";
export default {
  name: "TFormDesign",
  components: {
    leftMenuItem,
    formComponentPanel,
    OperateArea,
    formProperties,
    formItemProperties,
    codeModel,
    jsonModel,
    previewModel,
    importJsonModel,
  },
  data() {
    return {
      tabValue: "2",
      updateTime: 0,
      activeName: 'basic',
      data: {
        list: [],
        show: "hahah",
        config: {
          labelPosition: "top",
          labelCol: { xs: 4, sm: 4, md: 4, lg: 4, xl: 4, xxl: 4 },
          labelWidth: 100,
          labelLayout: "flex",
          wrapperCol: { xs: 18, sm: 18, md: 18, lg: 18, xl: 18, xxl: 18 },
          hideRequiredMark: false,
          customStyle: "",
        },
      },
      selectItem: {
        // key: ''
      },
      startType: "",
    };
  },
  methods: {
    generateKey(list, index) {
      // 生成key
      const key = list[index].type + "_" + new Date().getTime();
      console.log("generateKey---", list, index);
      // this.$set(list[index], "model", key);
      this.$set(list, index, {
        ...list[index],
        key,
        model: key,
      });
      // const key =
    },
    handleStart(type) {
      console.log("handleStart---", type);
      this.startType = type;
    },
    handleEnd(data) {
      this.selectItem = data;
    },
    handleSetSelectItem(data) {
      console.log("handleSetSelectItem---", data);
      // 操作时间不能低于100毫秒
      // const newTime = new Date().getTime()
      // if (newTime - this.updateTime < 100) {
      //   return false
      // }
      // this.updateTime = newTime
      this.selectItem = data;
    },
    handleOpenCodeModel() {
      this.$refs.codeModel.jsonData = this.data;
      this.$refs.codeModel.isShowDialog = true;
    },
    handleOpenJsonModel() {
      this.$refs.jsonModel.jsonData = this.data;
      this.$refs.jsonModel.isShowDialog = true;
    },
    handlePreview() {
      this.$refs.previewModel.jsonData = this.data;
      this.$refs.previewModel.visible = true;
    },
    handleOpenImportJsonModal() {
      this.$refs.importJsonModel.visible = true;
    },
    importJsonConfirm(jsonData) {
      this.data = JSON.parse(jsonData);
    },
  },
  computed: {
    basicsArray() {
      return basicsList.map((item) => {
        return {
          name: item.type,
          ...item,
        };
      });
    },
  },
};
</script>

<style lang="scss">
.collapse-title {
  flex: 1 0 90%;
  order: 1;
  font-weight: 600;
}
</style>
