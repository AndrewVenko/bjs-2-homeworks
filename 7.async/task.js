'use strict';
class AlarmClock{
    constructor(){
        this.alarmCollection = [];
        this.timerId = undefined;
    };
    // методы
    // добавление звонков
    addClock(HHTMM, callback, id){
        if(id === undefined){ throw new Error('Ошибка! Параметр id не передан!')};
        if(!this.alarmCollection.some((element) => element.id === id)){
            try{
                return this.alarmCollection.push({
                    id: id,
                    time: HHTMM,
                    callback: callback,
                });
            } catch{
                console.error('Ошибка! Звонок с таким id уже существует!');
            };
        };
    };
    // удаление звонка
    removeClock(id){
        const lengthAlarm = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(element => element.id !== id);
        if(lengthAlarm !== this.alarmCollection.length){
            return true;
        } else{
            return false;
        };
    };
    // возвращает текущее время
    getCurrentFormattedTime(){
        let currentDate = new Date().toLocaleTimeString().slice(0,-3);;
        return currentDate;
    };
    // запускает все звонки
    start(){
        let time = this.getCurrentFormattedTime();
        function checkClock(clock){
            if(clock.HHTMM === time){
                clock.callback();
            };
        };
        if(this.timerId === undefined){
            this.timerId = setInterval(this.alarmCollection.some((element) => checkClock(element)), 1000);
        };
    };
    // остановить выполнение звонков
    stop(){
        if(this.timerId !== undefined){
            clearInterval();
            this.timerId = undefined;
        };
    };
    // печатает все звонки
    printAlarms(){
        this.alarmCollection.forEach(function(item, index, array) {
            console.log(item.id, item.time);
        });
    };
    // удаляет все звонки
    clearAlarms(){
        stop();
        this.alarmCollection = [];
    };
};