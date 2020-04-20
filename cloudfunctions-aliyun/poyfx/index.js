'use strict';
//const db = uniCloud.database('poyfx')
exports.main = async (event, context) => {
    //event为客户端上传的参数
   // const collection = db.collection('unicloud-test') // 获取表'unicloud-test'的集合对象
   // const res = await collection.limit(10).get() // 获取表中的10条数据，结果为json格式
   const res = await uniCloud.httpclient.request('user', {
       method: 'POST',
       data: {
         test: 'testValue'
       },
       dataType: 'json'
     })
   
};

// exports.main = async (event, context) => {
// 	//event为客户端上传的参数

// 		console.log('--------------')
// 		console.log('event:'+JSON.stringify(event))
// 		console.log('--------------')
// 	return event;// 返回json给客户端
	
// 	//返回数据给客户端
// };
