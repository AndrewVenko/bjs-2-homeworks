'use strict';
class AlarmClock{
    constructor(){
        this.alarmCollection = [];
        this.timerId = null;
    };
    // методы
    // добавление звонков
    addClock(hhtmm, callback, id){
        if(id === undefined){
            throw new Error('Ошибка! Параметр id не передан!');
        };
        if(!this.alarmCollection.some((element) => element.id === id)){
            return this.alarmCollection.push({
                id: id,
                time: hhtmm,
                callback: callback,
            });
        } else{
            console.error('Ошибка! Звонок с таким id уже существует!');
        };
    };
    // удаление звонка
    removeClock(id){
        const lengthAlarm = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(element => element.id !== id);
        return (lengthAlarm !== this.alarmCollection.length);
    };
    // возвращает текущее время
    getCurrentFormattedTime(){
        return new Date().toLocaleTimeString().slice(0,-3);
    };
    // запускает все звонки
    start(){
        let currentTime = this.getCurrentFormattedTime();
        if(this.timerId !== null){
        } else{
            this.timerId = setInterval(() => {this.alarmCollection.forEach(function checkClock(clock, index, arr) {
                if(clock.time === currentTime){
                    clock.callback('Пора вставать!');
                };
            })}, 1000);
        };
    };
    // остановить выполнение звонков
    stop(){
        if(this.timerId !== undefined){
            clearInterval(this.timerId);
            this.timerId = null;
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
        this.stop();
        this.alarmCollection = [];
    };
};