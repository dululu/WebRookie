let a = [1, 2, "a", "yxc"];

let b = [
    1,  // 变量
    "yxc",  // 变量
    ['a', 'b', 3],  // 数组
    function () {  // 函数
        console.log("Hello World");
    },
    { name: "yxc", age: 18 }  // 对象
];

let main = function() {
    console.log(b[2][1])
    console.log(b[1])
    console.log(b[3]())

}

export {
    main
}
