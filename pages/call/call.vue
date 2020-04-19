<template>
	<view class="content bgcf">
		<my-header :cheackeds="1"></my-header>
		<view class="bodys">
			联系
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
				title: '联系'
			}
		},
		onLoad() {

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
