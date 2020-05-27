import {
	http
} from '../utils/request/index.js'

export default{
	commentInfo({
		page,
		prepage,
		success,
		fail,
		complete,
	}={}){
		http.get('api/comments',{
			params:{
				page,
				prepage
			},
			success:res=>{
				success && success(res)
			},
			fail:err=>{
				fail && fail(err)
			},
			complete: res=>{
				complete && complete(res)
			}
		})
	},
	login({
		username,
		password,
		success,
		fail,
		complete,
	}){
		http.post('api/login',{
			username:username,
			password:password,
		},{
			success:res=>{
				success && success(res)
			},
			fail:err=>{
				fail && fail(err)
			},
			complete: res=>{
				complete && complete(res)
			}
		})
	},
	register({
		username,
		password,
		repassword,
		success,
		fail,
		complete,
	}){
		http.post('api/register',{
			username:username,
			password:password,
			repassword:repassword,
		},{
			success:res=>{
				success && success(res)
			},
			fail:err=>{
				fail && fail(err)
			},
			complete: res=>{
				complete && complete(res)
			}
		})
	},
}