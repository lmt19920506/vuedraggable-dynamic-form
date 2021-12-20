<template>
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
          <transition-group tag="div" name="list" class="list-main" style="display: flex">
            <t-form-item
              v-for="ele in element.list"
              :key="ele.key"
              class="drag-move"
            ></t-form-item>
          </transition-group>
        </draggable>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import TFormItem from "./formItem";
export default {
  components: {
    draggable,
    TFormItem,
  },
  props: ["element"],
};
</script>

<style lang="scss">
.batch-box {
  .list-main {
    display: flex!important;
  }
  .drag-move-box {
    width: 270px
  }
}

</style>
