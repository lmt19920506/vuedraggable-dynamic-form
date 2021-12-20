export const codeVueFront = `<template>
<div>
  <k-form-build
    :value="jsonData"
    ref="KFB"
    @submit="handleSubmit"
  />
  <button @click="getData">提交</button>
</div>
</template>
<script>
export default {
name: 'Demo',
data () {
  return {
    jsonData: `;
/* eslint-disable */
export const codeVueLast = `
  }
},
methods: {
  handleSubmit(p) {
     // 通过表单提交按钮触发，获取promise对象
     p().then(res => {
       // 获取数据成功
       alert(JSON.stringify(res))
     })
       .catch(err => {
         console.log(err, '校验失败')
       })
   },
   getData() {
     // 通过函数获取数据
     this.$refs.KFB.getData().then(res => {
       // 获取数据成功
       alert(JSON.stringify(res))
     })
       .catch(err => {
         console.log(err, '校验失败')
       })
   }
}
}
<\/script>`;

export const codeHtmlFront = `<!DOCTYPE html>
<html>

<head>
  <title>表单设计器kcz</title>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="http://unpkg.com/k-form-design/lib/k-form-design.css">
</head>

<body>
  <div class="app">
    <k-form-build ref="KFB" @submit="handleSubmit" :value="jsonData"></k-form-build>
    <button @click="getData">提交</button>
  </div>
  <script src="http://cdn.kcz66.com/vue.min.js"><\/script>
  <script src="http://unpkg.com/k-form-design/lib/k-form-design.umd.min.js"><\/script>
  <script>
    let jsonData = `;
    
  export const codeHtmlLast = `
    let vm = new Vue({
      el: '.app',
      data: {
        jsonData
      },
      methods: {
        handleSubmit(p) {
          // 通过表单提交按钮触发，获取promise对象
          p().then(res => {
            // 获取数据成功
            alert(JSON.stringify(res))
          })
            .catch(err => {
              console.log(err, '校验失败')
            })
        },
        getData() {
          // 通过函数获取数据
          this.$refs.KFB.getData().then(res => {
            // 获取数据成功
            alert(JSON.stringify(res))
          })
            .catch(err => {
              console.log(err, '校验失败')
            })
        }
      }
    })
  <\/script>
</body>

</html>`
