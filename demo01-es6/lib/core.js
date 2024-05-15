//为什么用let不用var
//1-1 越域
{
    var a = 3;
    let b = 4;
}
//能访问到
console.log(a)
//无定义
//console.log(b)

//1-2 重复声明
{
    var a = 1;
    var a = "重复声明"

    let b = 2;
    //编译都过不了
    //let b = '重复声明';
    console.log(a)
}

//1-3 变量提升 编译阶段即时var声明语句在后面也会给提升到作用域顶部
{
    console.log(c)
    var c = "c定义在输出后面"

    //无法提升
    // console.log(d)
    let d = "d定义在输出后面"
}

//数组解构
let arr = [1,2,3]
const [x,y,z] = arr
console.log(x,y,z)

//对象解构
const person = {
    name:'张三',
    age:18,
    gender:'男'
}

const {name,age} = person
console.log(name,age)