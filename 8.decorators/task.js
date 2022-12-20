'use strict';
function cachingDecoratorNew(func) {
  let cache = []; // задаем кеш
  function wrapper(...args){
    const hash = args.join(','); // задаем хэш
    let objectInCache = cache.findIndex((item) => item.hash === hash); // ищем индекс элемента по хэшу
    if(objectInCache !== -1){
      console.log("Из кэша: " + cache[objectInCache].result);
      return "Из кэша: " + cache[objectInCache].result;
    };
    let result = func(...args); // в кэше результата нет вычисляем
    cache.push({hash: hash, result: result});
    if(cache.length > 5){
      cache.shift(); // удаляем первый элемент
    };
    console.log("Вычисляем: " + result);
    return ("Вычисляем: " + result);
  };
  return wrapper;
};

function debounceDecoratorNew(func, time) {
  let timeoutId = null; // 
  function wrapper(){
    wrapper.count = wrapper.count + 1;
    return function(){
      if(timeoutId){
        clearTimeout(timeoutId);
      };
      let differentDelay = time - delay;
      timeoutId = setTimeout(() => {
        wrapper.allCount = wrapper.allCount + 1;
        func(signalOrder, delay);
      }, differentDelay);
    };
  };
  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
};