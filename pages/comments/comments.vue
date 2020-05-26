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
							<view class="list_title">
							<text>{{item.title}} </text>
							<text>{{  new Date(+new Date(new Date(item.create_time).toJSON()) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '') }}</text>
							
							</view>
							<view class="list_content">
								<text>{{item.content}} </text>
							</view>
						</view>
						<view class="list_right flex">
							<view class="flex">
									<image src="../../static/img/good.png" mode="aspectFit"></image>
									({{item.like_count}})
							</view>
						<view class="flex">
							<image src="../../static/img/message.png" mode="aspectFit"></image>
							（{{item.comment_count}}）
						</view>
							
						</view>
					</view>
					<view class="comment_other" v-show="true">
						
					</view>
				</view>
				<view class="pages flex">
					<text>上一页</text>
					<text class="active" v-for="(i,index) in pages" :key="index">{{index}}</text>
					<text>下一页</text>
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
				prepage:2,//每页数量
				comment:'',//评论
				count:'',//总数量
				pages:'',//分页
			}
		},
		onLoad() {
			commentServer.commentInfo({
				success:res => {
					console.log(res)
					if(res.data.code == 0 && res.statusCode == 200){
						this.comment = res.data.data;
						this.count = res.data.count
						this.pages = Math.ceil( this.count/this.prepage);
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
						margin-bottom: 20px;
						padding: 10px;
						border-bottom: 1px solid #b5b5b5;
						.list_box{
							
							justify-content: space-between;
							.list_left{
								flex: 1;
								flex-direction: column;
								.list_title{
								
									margin-bottom: 8px;
									text{
										font-size: 12px;
										color: #b5b5b5;
										
									}
									& text:nth-child(1){
										font-size: 20px;
										font-weight: bold;
										color: #000;
										margin-right: 10px;
									}
								}
								.list_content{
									font-size: 14px;
									color: #666;
									padding-left: 15px;
									margin-bottom: 20px;
								}
							}
							.list_right{
								align-items: center;
								justify-content: flex-end;
								view{
									align-items: center;
									image{
										width: 12upx;
										height: 24upx;
									
									}
										margin: 0 10px;
								}
								
							}
						}
						
					
					}
					.pages{
						justify-content: center;
						align-items: center;
						
						text{
							margin: 0 5px;
							font-size: 14px;
							color: #b5b5b5;
						}
						text:hover{
							color: #000;
						}
						.active{
							color: #007AFF;
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
