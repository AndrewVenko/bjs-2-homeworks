'use strict';
function cachingDecoratorNew(func) {
  let cache = []; // задаем кеш
  function wrapper(...args){
    const hash = args.join(','); // задаем хэш
    let objectInCache = cache.find((item) => item.hash === hash); // ищем индекс элемента по хэшу
    if(objectInCache){
      console.log("Из кэша: " + objectInCache.result);
      return "Из кэша: " + objectInCache.result;
    };
    let result = func(...args); // в кэше результата нет, вычисляем
    cache.push({hash, result});
    if(cache.length > 5){
      cache.shift(); // удаляем первый элемент
    };
    console.log("Вычисляем: " + result);
    return ("Вычисляем: " + result);
  };
  return wrapper;
};

function debounceDecoratorNew(func, time) {
  let timeoutId = null; // задаем интервал
  function wrapper(...args){
    wrapper.allCount++; // увеличиваем полный счетчик
    if(timeoutId){
      clearTimeout(timeoutId);
    } else if(timeoutId === null){
      wrapper.count++; // увеличиваем счетчик вызовов
      func(...args);
    };
    timeoutId = setTimeout(() => {
      wrapper.count++; // увеличиваем счетчик вызовов
      let result = func(...args);
      return result;
    }, time);
  };
  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
};