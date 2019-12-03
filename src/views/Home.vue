<template>
  <div class="home">
    <div class="top">
      <h1>发放任务</h1>
      <router-link v-for="(item,index) in path" :key="index" :to="item.src" tag="span">{{item.name}}</router-link>
      <input type="text" placeholder="请输入工作名称进行查询"  />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data(){
    return {
      path:[
        {
          name:'全部任务',
          src:'/all'
        },{
          name:'进行中的任务',
          src:'/ing'
        },{
          name:'强制终止的任务',
          src:'/stop'
        },{
          name:'已完成的任务',
          src:'/over'
        }
      ],
      value:''
    }
  },
  name: 'home',
  components: {
    methods:{
      ...mapMutations(['cha']),
      
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  width: 100%;
  height: 500px;
  .top{
    width: 100%;
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: space-around;
    input{
      height: 30px;
      margin-top: 15px;
    }
  }
}
</style>