<template>
  <!-- <div class="drag-move-box" @click="$emit('handleSelectItem', element)"> -->
  <div
    class="drag-move-box drag-move"
    @click="handleSelectItem"
    :class="element.key === selectItem.key ? 'active' : ''"
  >
    <!-- <section v-show="element.key === selectItem.key" class="action-icon-box"> -->
    <div
      class="delete"
      :class="element.key === selectItem.key ? 'active' : 'unactivated'"
      @click.stop.prevent="handleDelete"
    >
      <i class="el-icon-delete"></i>
    </div>
    <div
      class="copy"
      :class="element.key === selectItem.key ? 'active' : 'unactivated'"
    >
      <i class="el-icon-document-copy"></i>
    </div>
    <!-- </section> -->
    <section class="form-item-box">
      <div>
        <el-form :label-position="formConfig.labelPosition" :inline="formConfig.labelPosition === 'top' ? false : true" label-width="120px">
          <el-form-item :label="element.label" style="padding-top: 10px">
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
                :style="{ width: element.options.width }"
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
            <!-- 错误在这 -->
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
            <template v-if="element.type === 'batch'">
              <t-batch :record="element"></t-batch>
            </template>
          </el-form-item>
        </el-form>
      </div>
      <div
        class="show-key-box"
        :class="element.key === selectItem.key ? 'active' : ''"
        v-text="element.label + (element.model ? '/' + element.model : '')"
      ></div>
    </section>
  </div>
</template>

<script>
export default {
  // props: ['element', 'select', 'data', 'index'],
  props: {
    element: {
      type: Object,
      default: () => {},
    },
    formConfig: {
      type: Object,
      default: () => {},
    },
    selectItem: {
      type: Object,
      default: () => {},
    },
    index: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleSelectItem() {
      console.log("select-element---", this.element);
      this.$emit("handleSelectItem", this.element);
    },
    handleDelete() {
      console.log("dele---index", this.index);
      console.log("dele---element", this.element);
      this.$emit("handleDelete", this.index);
    },
  }
};
</script>

<style></style>
