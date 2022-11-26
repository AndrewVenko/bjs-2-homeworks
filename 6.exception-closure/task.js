'user strict';
//Задача №1
function parseCount(value){
    const parsed = parseInt(value, 10);
    if(Number.isNaN(parsed)){
        throw new Error('Ошибка, невалидное значение числа');
    } else{
        return parsed;
    };
};
let errorName = new Error('Ошибка!');
function validateCount(value){
    try{
        return parseCount(value);
    } catch(errorName){
        console.log(errorName);
    };
};

//Задача №2
class Triangle{
    constructor(a,b,c){
        if((a + b > c) || (a + c > b) || (b + c > a)){
            throw new Error('Треугольник с такими сторонами не существует')
        };
        this.a = a;
        this.b = b;
        this.c = c;
    };
    //  Методы
    getPerimeter(){
        return this.P = this.a + this.b + this.c;
    };
    getArea(){
        let p = this.P / 2;
        return this.S = Math.pow((p(p - this.a)(p - this.b)(p - this.c)), 0.5); 
    };
};
function getTriangle(a,b,c){
    try{
        console.log('Внутри блока try');
        return new Triangle(a,b,c);
    } catch(errorName){
        console.log('Внутри блока catch');
        return getPerimeter(), getArea(), new Error('Ошибка! Треугольник не существует');
    } finally{
        console.log('Внутри блока finally');
    };
};