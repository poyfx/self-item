import {
	http
} from '../utils/request/index.js'

export default{
	commentInfo({
		success,
		fail,
		complete,
	}={}){
		http.get('api/comments',{
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
	}
}