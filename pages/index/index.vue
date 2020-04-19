<template>
	<view class="content bgcf">
		<my-header :cheackeds="0"></my-header>
		<view class="bodys">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item>
					<view class="swiper-item">1</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">2</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">3</view>
				</swiper-item>
			</swiper>
		</view>
		<my-foot></my-foot>
	</view>
</template>

<script>
	import myHeader from '../../components/myHeader.vue'
	import myFoot from '../../components/myFoot.vue'
	export default {
		components:{
			myHeader,
			myFoot
		},
		data() {
			return {
				title: '首页'
			}
		},
		onLoad() {
			uniCloud.callFunction({
			    name: 'poyfx',
			  })
			  .then(res => {
				  console.log(res)
			  });
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	@media screen and(min-width : 750px) {
		.content{
			font-size: 16px;
			
		}
	}
	
</style>
