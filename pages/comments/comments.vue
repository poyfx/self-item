<template>
	<view class="content bgcf">
		<my-header :cheackeds="3"></my-header>
		<view class="bodys">
			<view class="comment">
				<textarea  placeholder="请说点想说的吧" />
				<text>0/200</text>
			</view>
			<view class="comments_list">
				<view class="list" v-for="item in comment" :key="item.id">
					<view class="list_box flex">
						<view class="list_left flex">
							<text class="list_title">
								{{item.title}}
							</text>
							<view class="list_content">
								<text>{{item.content}}</text>
							</view>
						</view>
						<view class="list_right flex">
							<image src="../../static/img/good.png" mode="aspectFit"></image>
							<image src="../../static/img/message.png" mode="aspectFit"></image>
						</view>
					</view>
					<view class="comment_other" v-show="false">
						
					</view>
				</view>
				
				
			</view>
		</view>
		<my-foot></my-foot>
	</view>
</template>

<script>
	import myHeader from '../../components/myHeader.vue'
	import myFoot from '../../components/myFoot.vue'
	import commentServer from '../../api/index.js'
	export default {
		components:{
			myHeader,
			myFoot
		},
		data() {
			return {
				comment:'',//评论
				count:'',//数量
			}
		},
		onLoad() {
			commentServer.commentInfo({
				success:res => {
					console.log(res)
					if(res.data.code == 0 && res.statusCode == 200){
						this.comment = res.data.data;
						this.count = res.data.count;
						console.log(this.comment)
					}
					
				},
				fali: err =>{
					console.log(err)
				},
				complete:res => {
					console.log(res)
				}
			})
			
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
						.list_box{
							
							justify-content: space-between;
							.list_left{
								flex: 1;
								flex-direction: column;
								.list_title{
									font-size: 20px;
									font-weight: bold;
									margin-bottom: 8px;
								}
								.list_content{
									font-size: 14px;
									color: #666;
								}
							}
							.list_right{
								align-items: center;
								justify-content: flex-end;
								image{
									width: 12upx;
									height: 24upx;
									margin: 0 10px;
								}
							}
						}
						
					
					}
				}
				.comment_other{
					position: relative;
					background-color: #e7e7e7;
					width: 100%;
					height: 50px;
					
				}
			}
		}
	}
	
</style>
