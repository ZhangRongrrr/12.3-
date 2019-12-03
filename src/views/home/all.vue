<template>
  <div class="all">
      <div class="div" v-for="(item,index) in list" :key="index">
          <div class="img"><Ings :item="item" /></div>
          
          <div class="ddd">
              <p>{{item.name}}</p>
              <p>
                  <span><Start :item="item" /></span>  <span>{{item.people}}</span>
              </p>
              <p>
                  <span>{{item.startDate}}</span>  <span>{{item.stopDate}}</span>
              </p>

          </div>
          <button><Work :item="item" /></button>
      </div>
  </div>
</template>

<script>
import Ings from '@/components/ings.vue'
import Start from '@/components/start.vue'
import Work from '@/components/work.vue'
import {mapState,mapActions} from 'vuex'
export default {
    components:{
        Ings,
        Start,
        Work
    },
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
    margin-top: 10px;
    .img{
        width: 80px;
        line-height: 80px;
        height: 100%;
        border: 1px solid #ccc;
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