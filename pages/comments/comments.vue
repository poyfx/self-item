<template>
	<view class="content bgcf">
		<my-header :cheackeds="3"></my-header>
		<view class="bodys">
			<view class="comment">
				<textarea  placeholder="请说点想说的吧" />
				<text>0/200</text>
			</view>
			<view class="comments_list">
				<view class="list">
					
				</view>
			</view>
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
				comments:[
					{
						id:1,
						comment:'你好！',
					},
					{
						id:2,
						comment:'我来啦！',
					},
					{
						id:3,
						comment:'在吗！',
					},
					{
						id:4,
						comment:'不错哦！',
					},
				]
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
			min-height: 650px;
			.bodys{
				.comment{
					padding: 5px;
					position: relative;
					textarea{
						width: 100%;
						border: 1px solid #b5b5b5;
						border-radius: 4px;
						padding: 5px 10px;
						
					}
					text{
						position: absolute;
						bottom:	10px;
						right: 15px;
						font-size: 12px;
						color: #b5b5b5;
					}
				}
				.comments_list{
					padding: 15px 20px;
					.list{
						padding: 10px;
						border-bottom: 1px solid #b5b5b5;
					}
				}
			}
		}
	}
	
</style>
