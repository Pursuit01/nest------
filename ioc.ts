class A {
  name: string
  constructor(name:string) {
    this.name = name
  }
}

class C {
  name: string
  constructor(name:string) {
    this.name = name
  }
}

// 通过Container容器，将 B 和 A C 进行解耦
// A C类如果更改了，只需修改容器Container代码即可，不会影响到使用到他的 B 类
// 这样代码只需修改一处即可。
class Container {
  mo: any
  constructor() {
    this.mo = {}
  }
  provide(key:string, mo: any) {
    // 收集函数，将类的引用注入到 mo 容器中
    this.mo[key] = mo
  }

  get(key: string) {
    return this.mo[key]
  }
}

const mo = new Container()

mo.provide('A', new A('xm1'))
mo.provide('C', new C('xm2'))

class B {
  a: A
  c: C
  constructor(mo: Container) {
    this.a = mo.get('a')
    this.c = mo.get('c')
    
  }
}

// class B {
//   name: string
//   constructor() {
//     this.name = new A().name  
//   }
// }

// class C {
//   name: string
//   constructor() {
//     this.name = new A().name
//   }
// }
