<template>
  <div>
    <template v-if="element.type === 'batch'">
      <div class="batch-box">
        <el-form>
          <el-form-item :label="element.options.hidden ? element.label : ''">
            <draggable
              tag="div"
              class="draggable-box"
              v-bind="{
                group: 'form-draggable',
                ghostClass: 'moving',
                animation: 180,
                handle: '.drag-move',
              }"
              v-model="element.list"
            >
              <transition-group tag="div" name="list" class="list-main">
                <t-form-item
                  v-for="(item, ind) in element.list"
                  :key="ind"
                  :element="item"
                  :formConfig="formConfig"
                  :selectItem="selectItem"
                  :index="index"
                  @handleSelectItem="handleSelectItem"
                  @handleDelete="$emit('handleDelete',item, ind)"
                ></t-form-item>
              </transition-group>
            </draggable>
          </el-form-item>
        </el-form>
      </div>
    </template>
    <template v-else>
      <t-form-item
        :element="element"
        :formConfig="formConfig"
        :selectItem="selectItem"
        :index="index"
        @handleSelectItem="handleSelectItem"
        @handleDelete="$emit('handleDelete', index)"
      ></t-form-item>
    </template>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import batchTable from "./batchTable";
import TFormItem from "./formItem";
export default {
  components: {
    draggable,
    TFormItem,
    batchTable,
  },
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
  methods: {
    handleSelectItem() {
      // console.log('select---', this.element)
      this.$emit("handleSelectItem", this.element);
    },
  },
};
</script>

<style></style>
