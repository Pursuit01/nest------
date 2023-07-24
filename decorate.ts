/**
 * 类装饰器
 * @param target 当前类的构造函数
 */
// const doc: ClassDecorator = (target: any) => {
//   console.log(target);
// }
// @doc
// class Person {
//   constructor() {
//   }
// }

/**
 * 方法装饰器
 * @param target 方法所在类的原型对象
 * @param key 方法名
 * @param descriptor 方法描述符，包含函数引用，是否可配置，是否可写，是否可枚举 
 */
// const doc: MethodDecorator = (target: any, key: string|symbol, descriptor: any) => {
//   console.log(target, key, descriptor);
// }
// class Person {
//   constructor() {
//   }
//   @doc
//   getData() {
//   }
// }

/**
 * 属性装饰器
 * @param target 方法所在类的原型对象
 * @param key 属性名
 */
// const doc: PropertyDecorator = (target: any, key: string|symbol) => {
//   console.log(target, key);
// }
// class Person {
//   @doc
//   public name: string
//   constructor(name: string) {
//     this.name = name
//   }
// }


/**
 * 参数装饰器
 * @param target 方法所在类的原型对象
 * @param key 参数所在方法名
 * @param value 参数在方法中的索引
 */
const doc: ParameterDecorator = (target: any, key: string|symbol|undefined, index: number) => {
  console.log(target, key, index);
}
class Person {
  public name: string
  constructor(@doc name: string) {
    this.name = name
  }
  getName(@doc name: string) {

  }
}