const Mock = require('mockjs')
const data = Mock.mock({
// 'memberList|3': [
// {
// 'id': 1,
// 'name|1-6': '小梦',
// 'phone|5-50':'8',
// 'age|1-120':1,
// 'salary|6000-8000.1-3':0,
// 'status|1':true,
// 'open|2-6':true,
// 'order|2':{id:1,name:'订单1',price:68.8},
// 'order2|2-3':{id:1,name:'洗发水',price:68.8}

// }
"data": [
    {
      "id": 1,
      "name": "小梦小梦小梦小梦",
      "phone": "99999"
    },
    {
      "id": 2,
      "name": "小梦",
      "phone": "999999999"
    }
  ]
})
// stringify(数据, 数据转换函数，缩进空格数)
console.log(JSON.stringify(data, null, 2))
//查看效果，执行命令 node demo1.js