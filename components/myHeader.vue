<template>
	<view>
		<view class="headers flex">
			<view class="left flex">
				<view class="list" :class="cheackeds == 0?'active':''" @click="cheack(0)">
					首页
				</view>
				<view class="list" :class="cheackeds == 1?'active':''" @click="cheack(1)">
					联系
				</view>
				<view class="list" :class="cheackeds == 2?'active':''" @click="cheack(2)">
					随笔
				</view>
				<view class="list" :class="cheackeds == 3?'active':''" @click="cheack(3)">
					留言
				</view>
			</view>
			<view class="right flex">
				<view class="login">
					<text>登录</text>
					<text>|</text>
					<text>注册</text>
				</view>
				<input type="text" value="" placeholder="请输入内容" />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			cheackeds:{
				default:0,
				type:String/Number
			},
		},
		data() {
			return {
				
			};
		},
		methods:{
			cheack(num){
				console.log(num)
				this.cheacked = num;
				if(num == 0){
					uni.navigateTo({
						url:'../index/index'
					})
				}else if(num == 1){
					uni.navigateTo({
						url:'../call/call'
					})
				}else if(num == 2){
					uni.navigateTo({
						url:'../contect/contect'
					})
					
				}else{
					uni.navigateTo({
						url:'../comments/comments'
					})
				}
			}
		},
	}
</script>

<style lang="scss">
	//pc
	@media screen and(min-width : 750px) {
		.headers{
			width: 100%;
			height: 49px;
			background-color: #336699;
			justify-content: space-around;
			.left{
				justify-content: flex-start;
				.list{
					width: 64px;
					align-self: center;
					color: #FFFFFF;
				}
				.active{
					color: #FFFFFF;
				}
			}
			.right{
				align-items: center;
				justify-content: flex-end;
				position: relative;
				.login{
					font-size: 14px;
					color: #fff;
					margin-right: 15px;
					text{
						margin: 0 5px;
					}
				}
				input{
					border: 1px solid #fff;
					padding:  4px 30px 4px 4px;
					border-radius: 4px;
					color: #FFFFFF;
				}
				input:after{
					content:'';
					display: block;
					width:24px;
					height: 24px;
					background: url(../static/img/search.png) no-repeat;
					background-size: 100%;
					position: absolute;
					right: 10px;
					top: 50%;
					margin-top: -12px;
					
				}
				
			}
			
		}
	}
	//移动
	@media screen and(max-width : 750px) {
		.headers{
			width: 100%;
			height: 49px;
			background-color: #163047;
			justify-content: center;
		
			.list{
				width: 64px;
				align-self: center;
				color: #FFFFFF;
			}
			.active{
				color: #DD524D;
			}
			
		}
	}

</style>
