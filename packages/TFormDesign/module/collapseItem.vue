<template>
  <draggable
    tag="ul"
    :list="list"
    v-bind="{
      group: { name: 'form-draggable', pull: 'clone', put: false },
      sort: false,
      animation: 180,
      ghostClass: 'moving',
    }"
    @start="handleStart($event, list)"
    @end="handleEnd($event, list)"
  >
    <template v-for="(item, index) in list">
      <li
        :key="index"
        class="form-edit-widget-label"
        :class="{ 'no-put': item.type == 'divider' }"
        @dragstart="$emit('generateKey', list, index)"
      >
        <a>
          <i class="icon iconfont" :class="item.icon"></i>
          <span>{{ item.name }}</span>
        </a>
      </li>
    </template>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
export default {
  props: ["list"],
  components: {
    draggable,
  },
  methods: {
    handleStart(e, list) {
      // console.log('e---', e)
      // console.log('list---', list)
      this.$emit('start', list[e.oldIndex].type)
    },
    handleEnd(e, list) {
      this.$emit('end', list[e.oldIndex])
    }
  }
};
</script>

<style lang="scss" scoped>
ul {
  // position: relative;
  // overflow: hidden;
  padding: 0 10px 10px;
  // margin: 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.form-edit-widget-label {
  text-align: center;
  font-size: 13px;
  display: block;
  width: 48%;
  line-height: 30px;
  position: relative;
  float: left;
  left: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 1px;
  color: #333;
  border: 1px solid #e0e0e0;
  &:hover {
    // color: #409eff;
    // border: 1px dashed #409eff;
    color: #13c2c2;
    border: 1px solid  #13c2c2;
    position: relative;
    z-index: 1;
    box-shadow: 0 2px 6px #13c2c2;
  }

  & > a {
    display: block;
    cursor: move;
    background: #f4f6fc;
    border: 1px solid #f4f6fc;

    .icon {
      margin-right: 6px;
      margin-left: 8px;
      font-size: 14px;
      display: inline-block;
      vertical-align: middle;
    }

    span {
      display: inline-block;
      vertical-align: middle;
    }
  }
}
</style>
