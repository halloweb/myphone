<template>
    <div class="footer-box">
		<div class="footer vux-1px-t" >
			<flexbox :gutter="0">
		      <flexbox-item>
		      <div class="footer-item">
		          <x-icon type="ios-heart" class="icon"></x-icon>
		          <p>主页</p>	
		      </div>
		      </flexbox-item>
		      <flexbox-item>
		      <div class="footer-item">
		      	<x-icon type="ios-heart" class="icon"></x-icon>
		          <p>设置</p>
		      </div>
		      </flexbox-item>
		      <flexbox-item>
		      <div class="footer-item">
		      	<x-icon type="ios-heart" class="icon"></x-icon>
		          <p>个人中心</p>
		      </div>
		      </flexbox-item>
		    </flexbox>
		</div>
	</div>
</template>
<style lang="less" scoped>
    .footer-box{
    	height:51px;
    }
	.footer{
		position:fixed;
		width:100%;
		left:0;
		z-index:105;
		bottom:0;
		border-top:1px solid #ddd;
		background-color:#F7F7FA;
		.footer-item{
               text-align: center;
               padding:.1rem 0;
               font-size:14px;
               line-height:1;
               .icon{
               	  fill:#F70968;
               }
		}
	}
</style>
<script>
import { Flexbox, FlexboxItem, Divider} from 'vux'
	export default{
        components: {
		    Flexbox,
		    FlexboxItem,
		    Divider
		   
		         }
	}
</script>