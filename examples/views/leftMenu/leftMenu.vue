<template>
  <div class="box-container leftMenuBox">
    <template v-if="basicComponentsData.length">
      <p>基础字段</p>
      <draggable
        tag="ul"
        :list="basicComponentsData"
        v-bind="{
          group: { name: 'people', pull: 'clone', put: false },
          sort: false,
          ghostClass: 'ghost',
        }"
      >
        <template v-for="(item, index) in basicComponentsData">
          <li
            :key="index"
            class="form-edit-widget-label"
            :class="{ 'no-put': item.type == 'divider' }"
          >
            <a>
              <i class="icon iconfont" :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </a>
          </li>
        </template>
      </draggable>
    </template>
    <template v-if="customComponentsData.length">
          <p>customComponentsData</p>
          <draggable tag="ul"
            :list="customComponentsData"
            v-bind="{
              group: {name: 'people', pull: 'clone', put: false},
              sort: false,
              ghostClass: 'ghost'
            }"
            >
            <template v-for="(item, index) in customComponentsData">
              <li :key="index" class="form-edit-widget-label" :class="{'no-put': item.type == 'divider'}">
                <a>
                  <i class="icon iconfont" :class="item.icon"></i>
                  <span>{{item.name}}</span>
                </a>
              </li>
            </template>
          </draggable>
        </template>
        <template v-if="layoutListData.length">
          <p>布局字段</p>
          <draggable tag="ul"
            :list="layoutListData"
            v-bind="{
              group: {name: 'people', pull: 'clone', put: false},
              sort: false,
              ghostClass: 'ghost'
            }"
          >
            <template v-for="(item, index) in layoutListData">
              <li :key="index" class="form-edit-widget-label" :class="{'no-put': item.type == 'divider'}">
                <a>
                  <i class="icon iconfont" :class="item.icon"></i>
                  <span>{{item.name}}</span>
                </a>
              </li>
            </template>
          </draggable>
        </template>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import { basicsList, customComponents, layoutList } from "./sourceData/leftMenuData";
export default {
  components: {
    draggable
  },
  data() {
    return {
      basicComponentsData: [],
      customComponentsData: [],
      layoutListData: []
    }
  },
  mounted() {
    this._loadComponents()
  },
  methods: {
    _loadComponents() {
      console.log('basicsList---', basicsList)
      this.basicComponentsData = basicsList.map(item => {
        return {
          ...item,
          name: item.type
        }
      })
      this.layoutListData = layoutList.map(item => {
        return {
          ...item,
          name: item.type
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.leftMenuBox {
  width: 100%;
  height: 100%;
  // background: red;
}
ul {
  position: relative;
  overflow: hidden;
  padding: 0 10px 10px;
  margin: 0;
}
.form-edit-widget-label {
  text-align: center;
  font-size: 12px;
  display: block;
  width: 48%;
  line-height: 26px;
  position: relative;
  float: left;
  left: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 1px;
  color: #333;
  border: 1px solid #f4f6fc;
  &:hover {
    color: #409eff;
    border: 1px dashed #409eff;
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
