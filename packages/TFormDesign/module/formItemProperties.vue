<template>
  <el-form class="p-5" :model="element" v-if="isShow" label-position="top">
    <el-form-item label="标签">
      <el-input v-model="element.label"></el-input>
    </el-form-item>
    <el-form-item label="数据字段">
      <el-input v-model="element.model"></el-input>
    </el-form-item>
    <el-form-item label="默认值" v-if="element.type !== 'checkbox'">
      <el-input v-model="element.options.defaultValue"></el-input>
    </el-form-item>
    <el-form-item label="宽度">
      <el-input v-model="element.options.width"></el-input>
    </el-form-item>
    <el-form-item label="placeholder">
      <el-input v-model="element.options.placeholder"></el-input>
    </el-form-item>
    <el-form-item label="是否清空" v-if="Object.keys(element.options).indexOf('clearable') > -1">
      <el-radio-group v-model="element.options.clearable">
        <el-radio-button label="true">是</el-radio-button>
        <el-radio-button label="false">否</el-radio-button>  
      </el-radio-group>
    </el-form-item>
    <el-form-item label="是否禁用" v-if="Object.keys(element.options).indexOf('disabled')">
      <el-radio-group v-model="element.options.disabled">
        <el-radio-button label="true">是</el-radio-button>
        <el-radio-button label="false">否</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="选项配置" v-if="element.type === 'checkbox'">
      <el-radio-group v-model="element.options.dynamic">
        <el-radio-button label="true">静态数据</el-radio-button>
        <el-radio-button label="false">动态数据</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <TChangeOption v-show="!element.dynamic" v-model="element.options.options"/>
    <!-- <t-change-option v-show="!element.dynamic" :optionsData="element.options.options"></t-change-option> -->
    <el-form-item label="默认值" v-if="element.type === 'checkbox'">
      <el-checkbox-group v-model="element.options.defaultValue">
        <el-checkbox v-for="(e, ide) in element.options.options" :key="ide" :label="e.label">{{e.label}}</el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="校验" v-if="element.hasOwnProperty('rules')">
      <!-- {{element.options.options}} -->
      <TCheckBox v-model="element.rules[0].required" label="必填" />
    </el-form-item>
    <el-form-item label="格式" v-if="['time', 'date'].includes(element.type)">
      <el-input v-model="element.options.format"></el-input>
    </el-form-item>
    <el-form-item label="显示类型" v-if="element.type === 'date'">
      <el-select v-model="element.options.type">
        <el-option v-for="item in element.options.typeSource" :key="item" :label="item" :value="item"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script>
import TChangeOption from '../../TChangeOption/index'
import TCheckBox from '../../TCheckBox/index'
export default {
  components: {
    TChangeOption, TCheckBox
  },
  props: {
    element: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    isShow() {
      if (this.element && Object.keys(this.element).length > 0) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style></style>
