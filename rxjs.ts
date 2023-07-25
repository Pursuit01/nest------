import { Observable } from 'rxjs'
// 观察者模式 + 迭代器模式
const observe = new Observable(subscribeOn => {
  subscribeOn.next(1)
  subscribeOn.next(2)
  subscribeOn.next(3)
  setTimeout(() => {
    subscribeOn.next(4)
  }, 3000)
})

observe.subscribe({
  next: (num) => {
    console.log(num);
  }
})