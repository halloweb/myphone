<template>
  <div>
    
    <search
    v-model="searchVal"
    position="absolute"
    @on-submit="keySearch"
    ref="search"> 
    </search>
    <swiper loop auto :list="img_list"  ></swiper>
    
    <grid :cols="5" >
      <grid-item v-for="i in 10" :key="i">
        <span class="grid-center">{{i}}</span>
      </grid-item>
    </grid>
    <div class="info-swiper">
    <div class="info-title">热点关注：</div>
    <swiper loop auto height="30px" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false">
      <swiper-item><p>义务爱了 完成传奇世界H5-王者归来任务 获得20金币</p></swiper-item>
      <swiper-item><p>基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p></swiper-item>
      <swiper-item><p>零哥章魚 完成传奇世界H5-王者归来任务 获得30金币</p></swiper-item>
      <swiper-item><p>做迎而為 兑换【饿了么】畅享美食红包 消耗20金币</p></swiper-item>
      <swiper-item><p>只知道不知道 兑换【饿了么】畅享美食红包 消耗20金币</p></swiper-item>
      <swiper-item><p>基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p></swiper-item>
    </swiper>
    </div>
    <panel class="news-panel"  :footer="footer" :list="list" :type="type" ></panel>
    <card :header="{title:'商品详情'}" :footer="{title:'查看更多',link:'/component/panel'}">
      <p slot="content" class="card-padding">custom content</p>
    </card>
    <footer-bar ></footer-bar>
  </div>
</template>

<script>
import FooterBar from './commonParts/footer.vue'
import { Swiper,SwiperItem,Panel,Grid, GridItem,Card,Search} from 'vux'
const baseList = [{
  url: '/article',
  img: 'https://static.vux.li/demo/1.jpg',
  title: '送你一朵fua'
}, {
  url: '/article',
  img: 'https://static.vux.li/demo/2.jpg',
  title: '送你一辆车'
}, {
  url: '/article',
  img: 'https://static.vux.li/demo/5.jpg',
  title: '送你一次旅行',
  fallbackImg: 'https://static.vux.li/demo/3.jpg'
}]

export default {
  components: {
    FooterBar,
    Swiper,
    SwiperItem,
    Panel,
    Grid, 
    GridItem,
    Card,
    Search
    
  },
  data () {
    return {
      searchVal:'',
      img_list:baseList,
      type: '5',
      list: [{
        src: 'http://somedomain.somdomain/x.jpg',
        fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题一',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/component/cell'
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题二',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: {
          path: '/component/radio',
          replace: false
        },
        meta: {
          source: '来源信息',
          date: '时间',
          other: '其他信息'
        }
      }],
      footer: {
        title: '查看更多',
        url: 'http://vux.li'
      },
      
    }
  },
  methods:{
    keySearch(){
      alert('aa');
    }
  }
 
}
</script>

<style lang="less" scoped>
.grid-center {
  display: block;
  text-align: center;
  color: #666;
}
.weui-grid:before,.weui-grid:after{
  border:none;
}
 .info-swiper{
  display:flex;
  text-align: center;
  line-height: 30px;
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
  .info-title{
    width:80px;
    height:30px;
  }
  .text-scroll {
    flex:1;
    p{
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
      }
    }
}

.news-panel{
    margin-top:0;
}


</style>
