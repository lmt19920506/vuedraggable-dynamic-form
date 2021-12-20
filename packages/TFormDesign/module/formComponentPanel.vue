<template>
  <div class="form-panel">
    <!-- <el-empty v-if="!data.list.length"></el-empty> -->
    <el-form style="height: 100%" label-position="right" label-width="100px">
      <draggable
        tag="div"
        class="draggable-box"
        v-model="data.list"
        v-bind="{
          group: 'form-draggable',
          ghostClass: 'moving',
          animation: 180,
          handle: '.drag-move',
        }"
      >
        <!-- 一定要设置高度，才能承接从左边拖过来得form item -->
        <transition-group tag="div" name="fade" class="list-main">
          <layout-item
            v-for="(element, index) in data.list"
            :key="index"
            :index="index"
            :element="element"
            :formConfig="data.config"
            :selectItem="selectItem"
            @handleSelectItem="handleSelectItem"
            @handleDelete="handleDelete"
          ></layout-item>
        </transition-group>
      </draggable>
    </el-form>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import layoutItem from "./layoutItem";
import formItem from "./formItem";
export default {
  name: "formComponentPanel",
  components: {
    draggable,
    layoutItem,
    formItem,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
    selectItem: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      selectFormItem: this.selectItem
    }
  },
  watch: {
    selectItem(val) {
      this.selectFormItem = val
    },
    selectFormItem(val) {
      this.$emit('update:selectItem', val)
    }
  },
  methods: {
    handleSelectItem(data) {
      //  修改选择item
      this.$emit("handleSetSelectItem", data);
    },
    handleDelete(index) {
      console.log("dele---", index);
      if (this.data.list.length - 1 === index) {  // 点击时最后一项
        if (index === 0) {
          this.selectFormItem = {}
        } else {
          this.selectFormItem = this.data.list[index - 1]
        }
      } else {
        this.selectFormItem = this.data.list[index + 1]
      }
      this.data.list.splice(index, 1);
    },
  },
};
</script>

<style></style>
