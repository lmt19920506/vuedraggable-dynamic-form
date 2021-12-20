<template>
  <div class="operationBox">
    <el-tooltip class="item" placement="top" content="保存">
      <i class="el-icon-check"></i>
    </el-tooltip>

    <el-tooltip class="item" placement="top" content="预览">
      <i class="el-icon-view ml-10" @click="$emit('handlePreview')"></i>
    </el-tooltip>

    <el-tooltip class="item" placement="top" content="导入">
      <i class="el-icon-upload2 ml-10" @click="$emit('handleOpenImportJsonModal')"></i>
    </el-tooltip>

    <el-tooltip class="item" placement="top" content="生成JSON">
      <i class="el-icon-s-finance ml-10" @click="$emit('handleOpenJsonModel')"></i>
    </el-tooltip>

    <el-tooltip class="item" placement="top" content="生成代码">
      <i class="el-icon-s-data ml-10" @click="$emit('handleOpenCodeModel')"></i>
    </el-tooltip>
    
    <el-tooltip class="item" placement="top" content="清空">
      <i class="el-icon-delete ml-10"></i>
    </el-tooltip>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .operationBox {
    width: 100%;
    text-align: left;
  }
</style>