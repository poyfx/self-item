<template>
	<view>
		<view class="headers flex">
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
</style>
