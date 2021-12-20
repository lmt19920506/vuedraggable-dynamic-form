<template>
  <el-form :label-position="formConfig.labelPosition" label-width="120px">
    <el-form-item :label="element.label" v-if="['input', 'textarea', 'number', 'select', 'checkbox', 'radio', 'date', 'time', 'rate', 'slide'].includes(element.type)">
      <template v-if="element.type === 'input'">
        <el-input
          v-model="element.options.defaultValue"
          :placeholder="element.options.placeholder"
          :style="{ width: element.options.width }"
        ></el-input>
      </template>
      <template v-if="element.type === 'textarea'">
        <el-input
          type="textarea"
          v-model="element.options.defaultValue"
        ></el-input>
      </template>
      <template v-if="element.type === 'number'">
        <el-input-number
          :style="{ width: element.options.width }"
          v-model="element.options.defaultValue"
          :disabled="element.options.disable"
          :step="element.options.step"
          :min="element.options.min"
          :max="element.options.max"
          :controls="element.options.controls"
        ></el-input-number>
      </template>
      <template v-if="element.type === 'select'">
        <el-select
          v-model="element.options.defaultValue"
          :style="{ width: element.options.width }"
        >
          <el-option
            v-for="(optionItem, index) in element.options.options"
            :key="index"
            :label="optionItem.label"
            :value="optionItem.value"
          ></el-option>
        </el-select>
      </template>
      <template v-if="element.type === 'checkbox'">
        <el-checkbox-group v-model="element.options.defaultValue">
          <el-checkbox
            v-for="(item, idx) in element.options.options"
            :key="idx"
            :label="item.label"
            :value="item.value"
          ></el-checkbox>
        </el-checkbox-group>
      </template>
      <template v-if="element.type === 'radio'">
        <el-radio-group v-model="element.options.defaultValue">
          <el-radio
            v-for="(item, index) in element.options.options"
            :key="index"
            :label="item.value"
            >{{ item.label }}</el-radio
          >
        </el-radio-group>
      </template>
      <template v-if="element.type === 'date'">
        <el-date-picker
          v-model="element.options.defaultValue"
          :value-format="element.options.format"
          :clearable="element.options.clearable"
          :style="{ width: element.options.width }"
          :type="element.options.type"
        ></el-date-picker>
      </template>
      <template v-if="element.type === 'time'">
        <el-time-picker
          v-model="element.options.defaultValue"
          :clearable="element.options.clearable"
          :format="element.options.format"
          :value-format="element.options.format"
          :style="{ width: element.options.width }"
        ></el-time-picker>
      </template>
      <template v-if="element.type === 'rate'">
        <el-rate
          v-model="element.options.defaultValue"
          :allow-half="element.options.allowHalf"
          :disabled="element.options.disabled"
        ></el-rate>
      </template>
      <template v-if="element.type === 'slider'">
        <el-slider
          v-model="element.options.defaultValue"
          :disabled="element.options.disabled"
          :max="element.options.max"
          :min="element.options.max"
        ></el-slider>
      </template>
    </el-form-item>
    <el-form-item v-else-if="element.type === 'batch'">
      <component :is="componentItem" :record="element" :config="formConfig"></component>
    </el-form-item>
  </el-form>
</template>

<script>
import ComponentArr from '../core/components-use'
export default {
  name: "TFormItem",
  props: {
    element: {
      type: Object,
      default: () => {},
    },
    formConfig: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {};
  },
  methods: {
  },
  computed: {
    componentItem() {
      console.log('ComponentArr---', ComponentArr)
      return ComponentArr[this.element.type]
    }
  }
};
</script>

<style></style>
