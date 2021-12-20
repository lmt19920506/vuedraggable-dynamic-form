<template>
  <!-- <el-container class="box-container"> -->
    <el-row :gutter="30" type="flex">
      <el-col :span="5">
        <el-card>
            <left-menu-item :list="basicsArray" @start="handleStart"></left-menu-item>
          </el-card>
      </el-col>
      <el-col :span="14">
        <el-card>
          <form-component-panel :data="data"></form-component-panel>
        </el-card>
      </el-col>
      <el-col :span="5">
        <!-- <div style="width: 100%; height: 100%; background: red"></div> -->
        <el-card></el-card>
      </el-col>
    </el-row>
  <!-- </el-container> -->
</template>

<script>
import leftMenuItem from "./module/collapseItem";
import formComponentPanel from './module/formComponentPanel'
import {
  basicsList,
  customComponents,
  layoutList,
} from "./config/formItemConfig";
import FormComponentPanel from './module/formComponentPanel.vue';
export default {
  name: "TFormDesign",
  components: {
    leftMenuItem, formComponentPanel
  },
  data() {
    return {
      data: {
        list: [],
        show: 'hahah',
        config: {
          layout: "horizontal",
          labelCol: { xs: 4, sm: 4, md: 4, lg: 4, xl: 4, xxl: 4 },
          labelWidth: 100,
          labelLayout: "flex",
          wrapperCol: { xs: 18, sm: 18, md: 18, lg: 18, xl: 18, xxl: 18 },
          hideRequiredMark: false,
          customStyle: ""
        }
      },
    }
  },
  methods: {
    handleStart(data) {
      console.log('handleStart---', data)
    }
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

<style></style>
