console.log("Hello Word");
alert("This is an Alert Chào Các Bạn")
let name = "Dong" // khai báo 1 biến
let Name = "React Native" // biến cục bộ bên trong 1 khối

console.log("name :" + name + ", Name :" +Name)

let x =10 
console.log("x :" + x)

let y  // biến không xác định
console.log("y :" +y)
let a 
console.log(a+2) // NaN (Not a Number)không phải là 1 số

let d = 3
console.log(d * 3)
console.log(d ** 5) // Power mũ

if(1 == 1){
    //  let z =174
    //  console.log("z =" +z)
    var z =174
    console.log("z =" +z)
}
console.log("z =" +z)

console.log(x == '10')
//// khai báo const
const PI = 3.1416
console.log(PI)


confirm("Chuyển Trang")

var t ;
t=prompt("Nhập tên bạn ?")
alert(t);

var c = 12 ;
console.log(c++); //lấy giá trị tăng sau
console.log(c)
console.log(++c) // tăng giá trị luôn

console.log(c--)
console.log(c)
console.log(--c)

var t = 154;
var b = '12'

document.write(t == b)
document.write(t === b)


for(var i = 0; i < 10; i++){
    console.log('inside block scope with Var >>',i)
}
console.log('outside block scope with Var >>',i);
 // Bạn nghĩ điều gì xảy ra ở console này??

 //Lệnh if else trong javascript (dùng để rẻ nhánh chương trình)
    /**  
     * var a = 13;
    //Nếu a > 12
    if (a > 12)
    {
        // Khai báo biến b
        var b = 20;
        
        // Nếu a bằng b
        if (a == b)
        {
            alert(' a = b ');
        }
        else { // ngược lại a khác b
            alert(' a != b ');
        }
    }else{

    }
*/
//Lệnh switch case trong Javascript
    var number = parseInt(prompt("Nhập số cần kiểm tra"));
    
    var mod = (number % 2);
    
    switch (mod)
    {
        case 0 : {
            document.write(number + " là số chẵn");
            break;
        }
        case 1: {
            document.write(number + " là số lẽ");
            break;
        }
        default : {
            document.write("Ký tự bạn nhập không phải số");
        }
    }

let dong = {
    name :"Học Js",
    deptrai : true,
    age :22,
};
    document.write(dong.name+dong.deptrai)



var language = "JavaScript";

function foo() {

    var language = "Python";
    framework = "React";
    console.log(language);
}
 
foo(); // "Python"
console.log(language); // "JavaScript"
console.log(window.language); // "JavaScript"
console.log(window.framework); // "React"

var v =1;
var  n =2;
var result = v <n;
console.log('result ', result)
if(result){
    console.log('A < B')
}else{
    consloe.log('A > B ')
}
//Hello minh o day ne
