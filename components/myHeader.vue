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
				<view class="login" v-show="!isLogin">
					<text @click="logins">登录</text>
					<text>|</text>
					<text @click="registers">注册</text>
				</view>
				<view class="login" v-show="isLogin">
					<text >欢迎&nbsp;{{username}}</text>
					<text>|</text>
					<text >退出</text>
				</view>
				<input type="text" value="" placeholder="请输入内容" />
			</view>

			<view class="modal" v-show="showModal" @click.self="close">
				<view class="modal_body">
					<view class="modal_title flex">
						<text>{{title}}</text>
						<view class="close" @click="close">&times;</view>
					</view>
					<view class="modal_content" v-show="title == '登录'">
						<form>
							<label for="">
								<view>用户名</view><input type="text" v-model="login.username" placeholder="请输入用户名" />
							</label>
							<label for="">
								<view>密码</view><input type="password" v-model="login.password" placeholder="请输入密码" />
							</label>

							
						</form>
						<view class="modal_foot">
							<button class="btn" form-type="submit" @click="getlogin">{{title}}</button>
							<text @click="chooseType(0)">没有账号？去注册</text>
						</view>
					</view>


					<view class="modal_content" v-show="title == '注册'">
						<form>
							<label for="">
								<view>用户名</view><input type="text" v-model="register.username" placeholder="请输入用户名" />
							</label>
							<label for="">
								<view>密码</view><input type="password" v-model="register.password" placeholder="请输入密码" />
							</label>
							<label for="">
								<view>再次输入密码</view><input type="password" v-model="register.repassword" placeholder="再次输入密码" />
							</label>
					
						</form>
						<view class="modal_foot">
							<button class="btn" form-type="submit" @click="getregister">{{title}}</button>
							<text @click="chooseType(1)">已有账号？去登录</text>
						</view>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import commentServer from '@/api/index.js'
	export default {
		props: {
			cheackeds: {
				default: 0,
				type: String / Number
			},
		},
		data() {
			return {
				title: '',
				showModal: false,
				isLogin:false,
				username:'',
				login: {
					username: '',
					password: '',
				},
				register: {
					username: '',
					password: '',
					repassword: ''
				}
			};
		},
		methods: {
			logins() {
				this.showModal = true;
				this.title = '登录'

			},
			registers() {
				this.showModal = true;
				this.title = '注册'
			},
			close() {
				this.showModal = false;
			},
			chooseType(x){
				if(x == 0){
					this.title = "注册"
				}else{
					this.title = '登录'
				}
			},
			getregister() {

				 if (this.register.username != '') {
					if (this.register.password != '' && this.register.password.length >= 6) {
						if (this.register.password == this.register.repassword) {
							commentServer.register({
								username: this.register.username.trim(),
								password: this.register.password.trim(),
								repassword: this.register.repassword.trim(),
								success: res => {
									console.log(res)
									if (res.data.code == 0 && res.statusCode == 200) {
										this.title = '登录'
										this.login.username = this.register.username;
										this.login.password = this.register.password;
									}else{
										uni.showToast({
											title: res.data.msg,
											icon: 'none',
											duration: 3000
										})
									}
								},
								fali: err => {
									console.log(err)
								},
								complete: res => {
									console.log(res)
								}
							})
						} else {
							uni.showToast({
								title: '两次密码不一致',
								icon: 'none',
								duration: 3000
							})
						}
					} else {
						uni.showToast({
							title: '密码长度不得为空且长度大于等于6',
							icon: 'none',
							duration: 3000
						})
					}
				} else {
					uni.showToast({
						title: '用户名不能为空',
						icon: 'none',
						duration: 3000
					})
				}

			},
			getlogin(){
				commentServer.login({
					username: this.login.username.trim(),
					password: this.login.password.trim(),
					
					success: res => {
						console.log(res)
						if (res.data.code == 0 && res.statusCode == 200) {
							this.showModal = false;
							this.username = res.data.data.username;
						
							this.isLogin = true;
						}else{
							uni.showToast({
								title: res.data.msg,
								icon: 'none',
								duration: 3000
							})
						}
					},
					fali: err => {
						console.log(err)
					},
					complete: res => {
						console.log(res)
					}
				})
			},
			cheack(num) {
				console.log(num)
				this.cheacked = num;
				if (num == 0) {
					uni.navigateTo({
						url: '../index/index'
					})
				} else if (num == 1) {
					uni.navigateTo({
						url: '../call/call'
					})
				} else if (num == 2) {
					uni.navigateTo({
						url: '../contect/contect'
					})

				} else {
					uni.navigateTo({
						url: '../comments/comments'
					})
				}
			}
		},
	}
</script>

<style lang="scss">
	//pc
	@media screen and(min-width : 750px) {
		.headers {
			position: relative;
			width: 100%;
			height: 49px;
			background-color: #336699;
			justify-content: space-around;

			.left {
				justify-content: flex-start;

				.list {
					width: 64px;
					align-self: center;
					color: #FFFFFF;
				}

				.active {
					color: #FFFFFF;
				}
			}

			.right {
				align-items: center;
				justify-content: flex-end;
				position: relative;

				.login {
					font-size: 14px;
					color: #fff;
					margin-right: 15px;

					text {
						margin: 0 5px;
					}
				}

				input {
					border: 1px solid #fff;
					padding: 4px 30px 4px 4px;
					border-radius: 4px;
					color: #FFFFFF;
				}

				input:after {
					content: '';
					display: block;
					width: 24px;
					height: 24px;
					background: url(../static/img/search.png) no-repeat;
					background-size: 100%;
					position: absolute;
					right: 10px;
					top: 50%;
					margin-top: -12px;

				}

			}

			.modal {
				position: fixed;
				width: 100vw;
				height: 100vh;
				background-color: rgba($color: #000000, $alpha: 0.2);
				z-index: 999;

				.modal_body {
					width: 600px;
					position: absolute;
					top: 60px;
					left: 50%;
					margin-left: -300px;
					background-color: #fff;
					border-radius: 8px;
					padding-bottom: 30px;

					.modal_title {
						padding: 15px 30px;
						font-size: 18px;
						font-weight: 550;
						justify-content: center;
						align-items: center;
						border-bottom: 1px solid #e7e7e7;

						.close {
							position: absolute;
							right: 20px;
						}
					}

					.modal_content {
						padding: 15px 30px;
						font-size: 16px;
						color: #999;

						label {
							display: block;
							margin-bottom: 15px;
							border-bottom: 1px solid #e7e7e7;

							view {
								margin-bottom: 10px;
							}

							input {
								padding: 2px 5px;
							}
						}
					}
					.modal_foot{
						display: flex;
						flex-direction: column;
						text{
							align-self: flex-end;
							margin-top: 15px;
							font-size: 14px;
							margin-right: 10%;
						}
					}
				}

			}
		}
	}

	//移动
	@media screen and(max-width : 750px) {
		.headers {
			width: 100%;
			height: 49px;
			background-color: #163047;
			justify-content: center;

			.list {
				width: 64px;
				align-self: center;
				color: #FFFFFF;
			}

			.active {
				color: #DD524D;
			}

		}
	}
</style>
