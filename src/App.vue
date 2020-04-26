<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <el-button @click="start">{{!fetchTask.loading ? '开始' : '稍等...'}}</el-button>
      <el-button @click="start1">{{!fetchTask1.loading ? '开始1' : '稍等1...'}}</el-button>
      <el-button @click="start2">{{!fetchTask2.loading ? '开始2' : '稍等2...'}}</el-button>
    </div>
    <div style="margin:30px;height:50px;">
      <h2 v-loading="fetchTask.loading">fetchTask:{{fetchTask.data}}</h2>
    </div>
    <div style="margin:30px;height:50px;">
      <h2 v-loading="fetchTask1.loading">fetchTask1:{{fetchTask1.data}}</h2>
    </div>
    <div style="margin:30px;height:50px;">
      <h2 v-loading="fetchTask2.loading">fetchTask2:{{fetchTask2.data || fetchTask2.message}}</h2>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import {extendFetchWidthLoading} from './util/index'

export default {
  name: 'app',
  components: {
  },
  data(){
    return {
      fetchTask:extendFetchWidthLoading(this.fetch()),
      fetchTask1:{},
      fetchTask2:{},
    }
  },
  methods:{
    start(){
      if(!this.fetchTask.loading){
        this.fetchTask = extendFetchWidthLoading(this.fetch())
      }
    },
    start1(){
      if(!this.fetchTask1.loading){
        this.fetchTask1 = extendFetchWidthLoading(this.fetch1())
      }
    },
    start2(){
      if(!this.fetchTask2.loading){
        this.fetchTask2 = extendFetchWidthLoading(this.fetch2())
      }
    },
    fetch(){
      return new Promise(resove => {
        setTimeout(() => {
          resove({
            code:0,
            message:'success',
            data:222222
          })
        },3000)
      })
    },
    fetch1(){
      return new Promise(resove => {
        setTimeout(() => {
          resove({
            code:0,
            message:'success',
            data:333333
          })
        },3000)
      })
    },
    fetch2(){
      return new Promise((resove,reject) => {
        setTimeout(() => {
          reject({
            code:0,
            message:'失败了',
            data:''
          })
        },3000)
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
