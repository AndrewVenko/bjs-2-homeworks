'user strict';
//Задача №1
function parseCount(value){
    const parsed = parseInt(value, 10);
    if(Number.isNaN(parsed)){
        throw new Error('Ошибка, невалидное значение числа');
    };
    return parsed;
};
function validateCount(value){
    try{
        return parseCount(value);
    } catch(error){
        return error;
    };
};

//Задача №2
class Triangle{
    constructor(a,b,c){
        if((a + b < c) || (a + c < b) || (b + c < a)){
            throw new Error('Треугольник с такими сторонами не существует')
        };
        this.a = a;
        this.b = b;
        this.c = c;
    };
    //  Методы
    getPerimeter(){
        return (this.a + this.b + this.c);
    };
    getArea(){
        const p = this.getPerimeter() / 2;
        return (Math.pow((p * (p - this.a) * (p - this.b) * (p - this.c)), 0.5)); 
    };
};
function getTriangle(a,b,c){
    try{
        return new Triangle(a,b,c);
    } catch(errorName){
        return {
            getPerimeter(){
                return new Error('Ошибка! Треугольник не существует');
            },
            getArea(){
                return new Error('Ошибка! Треугольник не существует');
            },
        };
    };
};