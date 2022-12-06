'use strict';
// Задание №1
class PrintEditionItem{
    // Задание конструктора
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    };
    // Создание методов
    fix(){
        this.state = this.state * 1.5;
    };
    set state(value){
        if(value < 0){
            this._state = 0;
        } else if(value > 100){
            this._state = 100;
        } else{
            this._state = value;
        };
    };
    get state(){
        return this._state;
    };
};
// Задание типов книг
class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    };
};
class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    };
};
class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    };
};
class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    };
};
class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    };
};

// Задание №2
class Library{
    // Задание конструктора
    constructor(name){
        this.name = name;
        this.books = [];
    };
    // Создание методов
    addBook(book, valueState){
        valueState = book.state;
        if(book.state > 30){
            this.books.push(book)
        };
    };
    findBookBy(type, value){
        for(let i = 0; i < this.books.length; i = i + 1){
            let arraysValues = [];
            for (let val of Object.entries(this.books[i])) {
                arraysValues.push(val[1]);
            };
            let foundBook = arraysValues.some((element) => element === value);
            if(foundBook === true){
                return foundBook = this.books[i];
            };
        };
        return null;
    };
    giveBookByName(bookName){
        for(let i = 0; i < this.books.length; i = i + 1){
            if(this.books[i].name === bookName) {
                return this.books.splice(i, 1)[0];
            };
        };
        return null;
    };
};

// Задание №3
class Student {
  constructor(name){
    this.name = name;
    this.subject = {};
  };
  // Методы
  addMark(mark, subjectName){
    if(Number.isNaN(mark) || Object.is(mark, Infinity) || Object.is(mark, -Infinity) || Object.is(mark, 0) || Object.is(mark, -0) || Object.is(mark, String) || Object.is(mark, undefined)){
        throw new Error('Ошибка, невалидное значение числа');
    }else if((mark !== 1) && (mark !== 2) && (mark !== 3) && (mark !== 4) && (mark !== 5)){
        throw new Error('Ошибка, оценка должна быть числом от 1 до 5');
    };
    if(this.subject[subjectName] === undefined){
        this.subject[subjectName] = [];
        this.subject[subjectName].push(mark);
    } else{
        this.subject[subjectName].push(mark);
    };
  };
  getAverageBySubject(subjectName){
    if(this.subject[subjectName] === undefined){
        throw new Error('Ошибка, несуществующий предмет');
    };
    let summ = 0;
    const arrSubject = this.subject[subjectName];
    arrSubject.forEach((item, index, arr) => summ = summ + arr[index]);
    return summ / arrSubject.length;
  };
  getAverage(){
    const arrAverage = Object.values(this.subject).reduce((acc, value) => acc.concat(value));
    let summ = 0;
    arrAverage.forEach((item, index, arr) => summ = summ + arr[index]);
    return summ / arrAverage.length;
  };
  exclude(reason){
    delete this.subject;
    this.exclude = reason;
  };
};