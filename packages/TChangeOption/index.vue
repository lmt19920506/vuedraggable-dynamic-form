<template>
  <div>
    <el-row type="flex" v-for="(item, index) in value" :key="index" :gutter="5">
      <el-col :span="6">
        <el-input v-model="item.label"></el-input>
      </el-col>
      <el-col :span="6">
        <el-input v-model="item.value"></el-input>
      </el-col>
      <el-col>
        <i class="el-icon-delete" @click="dele(index)"></i>
      </el-col>
    </el-row>
    <el-button type="text" @click="add">Add</el-button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      default: () => []
    },
  },
  methods: {
    add() {
      const addData = [
        ...this.value,
        {
          value: this.value.length + 1,
          label: "选项" + (this.value.length + 1),
        },
      ]
      this.$emit('input', addData)
    },
    dele(deleteIndex) {
      this.$emit('input', this.value.filter((item, index) => index !== deleteIndex))
    }
  },
};
</script>

<style></style>
