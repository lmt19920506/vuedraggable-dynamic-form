<template>
  <el-form
    :model="dynamicValidateForm"
    ref="dynamicValidateForm"
    label-width="0"
    style="width: 100%"
    highlight-current-row
  >
    <el-table :data="dynamicValidateForm.domains">
      <el-table-column type="index" width="50" align="center"></el-table-column>
      <!-- <el-table-column label="name" prop="name"></el-table-column> -->
      <el-table-column
        v-for="(item, index) in record.list"
        :key="'column' + index"
      >
        <template slot="header">
          <span style="color:#F56C6C" v-if='item.rules.length > 0 && item.rules[0].required'>*</span>
          <span>{{ item.label }}</span>
        </template>
        <template slot-scope="scope">
          <el-form-item
            :key="scope.$index"
            :prop="'domains' + scope.$index + item.key"
          >
            <FormModuleItem ref="formModuleItem" :element="item" :config="config" :form="scope.row" />
          </el-form-item>
        </template>
      </el-table-column>
      <el-table-column label="Action" width="80px" fixed="right">
        <template slot-scope="scope">
          <i class="el-icon-delete" @click="dele(scope.row, scope.$index)"></i>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" size="mini" @click="add">+添加</el-button>
  </el-form>
</template>

<script>
import FormModuleItem from './module/formModuleItem'
export default {
  name: "TBatch",
  components: {
    FormModuleItem
  },
  props: [
    "record", "config"
  ],
  mounted() {
    console.log('record---', this.record)
    // this.init()
  },
  data() {
    return {
      obj: {},
      dynamicValidateForm: {
        domains: [],
      },
    };
  },
  computed: {
    columns() {
      return this.record.list;
    },
  },
  methods: {
    // 初始化默认值
    init () {
      let obj = {}
      this.record.list.map(item => {
        if (item.type === 'Checkbox') {
          obj[item.key] = []
        }
      })
      this.obj = obj
      this.dynamicValidateForm.domains.push(obj)
    },
    add() {
      const data = {};
      this.record.list.forEach(item => {
        data[item.model] = item.options.defaultValue;
      });
      this.dynamicValidateForm.domains.push({
        ...data,
        key: Date.now()
      });
      // this.handleInput();
      // this.dynamicValidateForm.domains.push(JSON.parse(JSON.stringify(this.obj)))
      // this.$refs.formModuleItem.generateModel()
      console.log('dynamicValidateForm---', this.dynamicValidateForm.domains)
    },
    dele(row, index) {
      this.dynamicValidateForm.domains.splice(index, 1)
    }
  }
};
</script>

<style></style>
