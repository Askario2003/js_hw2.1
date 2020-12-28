var num = +prompt('введите ваш возраст')

if (num > 0 && num <= 18){
    alert('вы еще молоды вам нужно учиться')
}
else if (num > 18 && num <= 50){
    alert('вам нужно работать')
}
else if (num > 50 && num <= 59){
    alert('вам скоро на пенсию')
}
else if (num > 59 && num <= 150){
     alert('вы пенсионер')
}
else if (isNaN(num)){
    alert('вы ввели не число. повторите попытку перезагрущив страницу')
}
else { alert('вы не человек')}

