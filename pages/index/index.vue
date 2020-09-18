<template>
	<view class="index" style="padding-bottom: 49px;">
		<my-header :cheackeds="0"></my-header>
		<view class="contents bgcf">

			<view class="bodys">
				<!-- 听党话 跟党走 -->
				<view class="banners flex">
					<view class="banner">
						<swiper :indicator-dots="false" :autoplay="true" :interval="3000" :duration="1000">
							<swiper-item>
								<view class="swiper-item">
									<image src="../../static/img/1.jpg" mode=""></image>
								</view>
							</swiper-item>
							<swiper-item>
								<view class="swiper-item">
									<image src="../../static/img/banner2.jpg" mode=""></image>
								</view>
							</swiper-item>
							<swiper-item>
								<view class="swiper-item">
									<image src="../../static/img/banner3.jpg" mode="">
								</view>
							</swiper-item>
						</swiper>
					</view>
					<view class="tell">
						<text>中国人民武装警察部队，成立于1983年4月5日，前身是中国人民公安中央纵队，始建于1949年8月。中国人民武装警察部队是担负国家赋予的国家内部安全保卫任务的部队。
							自2018年1月1日零时起，中国人民武装警察部队由党中央、中央军委集中统一领导，实行中央军委－武警部队－部队领导指挥体制。武警部队职能属性不变，不列入解放军序列。
							按照军是军、警是警、民是民原则，将列武警部队序列、国务院部门领导管理的现役力量全部退出武警。将国家海洋局领导管理的海警队伍转隶武警部队，将武警部队担负民事属性任务的黄金、森林、水电部队整体移交国家相关职能部门并改编为非现役专业队伍，同时撤收武警部队海关执勤兵力，彻底理顺武警部队领导管理和指挥使用关系。</text>
					</view>
				</view>




				<!-- 我的履历 -->
				<view class="content flex">
					<view class="items">
						<view class="itemTitle">
							项目经验
						</view>
						<view class="item flex">

							<text>item电子系统(后台系统)</text>
							<text>油e购(app)</text>
							<text>年度考核测评(h5)</text>
							<text>小鲸鱼公众号</text>
							<text>文章助手(公众号)</text>
						</view>
					</view>

					<!-- recommend start -->
					<view class="recommends">
						<view class="recommendTitle">
							推荐
						</view>
						<view class="recommend flex">

							<text>新闻博客什么什么什么没事没事没事吗</text>
							<text>新闻博客什么什么什么没事没事没事吗</text>
							<text>新闻博客什么什么什么没事没事没事吗</text>
							<text>新闻博客什么什么什么没事没事没事吗</text>
							<text>新闻博客什么什么什么没事没事没事吗</text>
						</view>
					</view>

					<!-- recommend end -->
					<view class="userinfos">
						<view class="userinfoTitle">
							个人信息
						</view>
						<view class="userinfo flex">
							<view class="">
								<text>姓名：</text>
								<view>皮宇轩</view>
							</view>
							<view><text>职业：</text>
								<view>web前端开发</view>
							</view>
							<view><text>籍贯：</text>
								<view>湖南</view>
							</view>
							<view><text>email：</text>
								<view>1035576231@qq.com</view>
							</view>
							<view> <text>爱好：</text>
								<view>运动相关的所有活动、打游戏</view>
							</view>




						</view>
					</view>

				</view>

				<!-- 我的生活 -->
				<view class="history flex">



				</view>
			</view>

		</view>


		<view class="life">
			<uni-calendar></uni-calendar>
		</view>
		<!-- 底部 -->
		<my-foot></my-foot>
	</view>

</template>

<script>
	import myHeader from '../../components/myHeader.vue'
	import myFoot from '../../components/myFoot.vue'
	import uniCalendar from '@/components/c-calendar/c-calendar.vue'
	export default {
		components: {
			myHeader,
			myFoot,
			uniCalendar
		},
		data() {
			return {
				title: '首页'
			}
		},
		onLoad() {

			// uniCloud.callFunction({
			// 		name: 'poyfx',
			// 		data:{a:1}
			// 	})
			// 	.then(res => {
			// 		console.log(res)
			// 	});
			uniCloud.callFunction({
				name: 'poyfx',
				data: {
					a: 1
				},
				success: res => {
					console.log(res)
				},
				fail() {},
				complete() {}
			});


		},
		methods: {

		},

	}
</script>

<style lang="scss">
	.index {
		height: 100vh;
	}

	@media screen and(min-width : 750px) {
		.contents {
			background-color: $text-content-bg;
			min-height: 95%;

			.bodys {
				width: 100%;

				.banners {

					.banner {

						width: 60%;

						padding: 1px 0 0 1px;

						swiper {
							min-height: 250px;

							image {
								width: 100%;
							}
						}
					}

					.tell {
						width: 45%;
						margin: 0 10px 0 15px;
						padding: 2px 0;

						text {
							font-size: 12px;
						}
					}
				}


				.content {
					width: 100%;
					margin: 15px 0;
					padding: 10px;
					background-color: #fff;
					font-size: 16px;

					.items {
						width: 25%;

						.item {

							flex-direction: column;
							margin-right: 5px;
							padding: 15px;
							font-size: 14px;

							.itemTitle {
								font-size: 18px;
							}
						}
					}

					.recommends {
						width: 35%;

						.recommend {

							margin-right: 5px;
							padding: 15px;
							font-size: 14px;
							color: #333333;
							flex-direction: column;

							text {
								margin-bottom: 3px;
								overflow: hidden;
								white-space: nowrap;
								text-overflow: ellipsis;
							}
						}
					}

					.userinfos {
						width: 20%;
						flex-grow: 1;

						.userinfo {

							margin-right: 5px;
							padding: 15px;
							font-size: 14px;
							flex-direction: column;
							
							view{
								align-items: center;
								display: flex;
								text {
									min-width: 60px;
									margin-bottom: 3px;
								}
							}
							
							
						}
					}

				}

				.history {
					width: 100%;
					min-height: 300px;



					.hobby {
						width: 60%;
						flex-direction: column;

						text {
							margin-bottom: 8px;
						}
					}
				}
			}

		}

		.life {
			position: absolute;
			top: 45px;
			left: 1000px;
			width: 30%;
			margin: 0 15px;
		}

	}
</style>
