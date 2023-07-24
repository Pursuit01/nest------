// 使用装饰器实现一个Axios的get请求
import axios from 'axios'


const Get = (url: string) => {
  return (target: any, key: any,descriptor: any) => {
    console.log(target, key, descriptor, url);
    const fnc = descriptor.value
    axios.get(url).then(res => {
      fnc(res, {
        status: 200,
        success: true
      })
    }).catch((e: any) => {
      fnc(e, {
        status: 500,
        success: false
      })
    })
  }
}


class Container {
  constructor() {
  }
  @Get('https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10')
  getList(res: any, status: any) {
    console.log(res.data.result.list, status);
  }
}
