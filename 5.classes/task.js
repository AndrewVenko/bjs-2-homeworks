'strict mode';
// Задание №1
class PrintEditionItem{
    // Задание конструктора
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    };
    // Создание методов
    fix(){
        this.state = this.state * 1.5;
    };
    get newState(){
        return this[state];
    };
    set newState(state){
        if(this[state] < 0){
            this[state] = 0;
        } else if(this[state] > 100){
            this[state] = 100;
        } else{
            this[state] = this[state]
        };
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
    addBook(book){
        if(this.state > 30){
            this.books.push(book)
        };
    };
    findBookBy(type, value){
        for(let i = 0; i < this.books.length; i = i + 1){
            let arr = [];
            for (let val of Object.entries(this.books[i])) {
                arr.push(val[1]);
            };
            let a = arr.some((element) => element === value);
            if(a === true){
                return a = this.books[i];
            };
        };
        return null;
    };
    giveBookByName(bookName){
        for(let i = 0; i < this.books.length; i += i){
            if(this.books[i].name === bookName) {
                return this.books.splice(i, 1);
            } else {
                return null;
            };
        };
    };
};