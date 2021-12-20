<template>
  <el-form :model="formModel">
    <buildBlock
      v-for="(item, index) in value.list"
      :key="index"
      :element="item"
      :formConfig="value.config"
    />
  </el-form>
</template>

<script>
import buildBlock from "./buildBlock";
export default {
  name: "TFormBuild",
  components: {
    buildBlock,
  },
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formModel() {
      let obj = {};
      this.value.list.forEach((item) => {
        for (const key in item) {
          if (key === "model") {
            obj[item[key]] = item.options.defaultValue || "";
          }
        }
      });
      // console.log("formModel---", obj);
      return obj;
    },
  },
};
</script>

<style></style>
