<template>
  <div class="stop">
      <div class="div" v-for="(item,index) in list" :key="index" v-if="item.flag==='stop'">
          <div class="img">{{item.img}}</div>
          <div class="ddd">
              <p>{{item.name}}</p>
              <p>
                  <span>{{item.start}}</span>  <span>{{item.people}}</span>
              </p>
              <p>
                  <span>{{item.startDate}}</span>  <span>{{item.stopDate}}</span>
              </p>

          </div>
          <button>{{item.type}}</button>
      </div>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    methods:{
        ...mapActions(['getList'])
    },
    created(){
        this.getList()
    },
    computed:{
        ...mapState(['list'])
    }
}
</script>
<style lang="scss" scoped>
.div{
    width: 100%;
    height: 80px;
    display: flex;
    .img{
        width: 80px;
        height: 100%;
    }
    .ddd{
        flex: 1;
        text-align: left;
        padding-left: 15px;
    }
    button{
        width: 30px;
        height: 100%;
    }
}
</style>