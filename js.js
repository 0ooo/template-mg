/*1. Напишите функцию is_number(str), которая будет определять, является ли заданное значение str числом. Возвращать функция должна Boolean тип (использовать оператор typeof)*/
/*function is_number(str){
    return result = typeof(str) == 'number' || false;
}
alert(is_number(500));*/

/*2. Напишите функцию is_string(str), которая будет определять, является ли заданное значение str строкой. Возвращать функция должна Boolean тип (использовать оператор typeof)*/
/*function is_string(str){
    return result = typeof(str) == 'string' || false;
}
alert(is_string('500'));*/

/*3. Напишите функцию is_object(obj), которая будет определять, является ли заданное значение obj объектом. Возвращать функция должна Boolean тип (использовать оператор typeof)*/
/*function is_object(str){
    return result = typeof(str) == 'object' || false;
}
var x = {};
alert(is_object(x));*/

/*4. Напишите функцию get_type(str), которая в качестве аргумента принимает переменную str и возвращает ее тип (использовать оператор typeof)*/
/*function get_type(str){
    return typeof(str);
}
alert(get_type(function(){}));*/

/*5. Напишите функцию get_string_length(str), которая в качестве аргумента принимает строку str и возвращает её длину, предварительно удалив из строки все пробелы (для решения данной задачи обязательно использовать цикл).*/
/*function get_string_length(str){
    var count = 0;
    for(var i = 0; i < str.length; i++){
        if (str[i] != ' ') count++;
        else continue;
    }
    return count;
}
alert(get_string_length('         st r    '));*/

/*6. Напишите функцию up_first(str), которая возвращает строку str с заглавным первым символом, остальные символы должны быть в нижнем регистре (пример: up_first("иванов"), должно вернуть "Иванов", up_first("ИВАНОВ"), должно вернуть "Иванов")*/
/*function up_first(str){
    str = str.toLowerCase();
    return str = str[0].toUpperCase() + str.slice(1);  
}
alert(up_first('ИВАНОВ'));*/

/*7. Напишите функцию search_string(search, string), которая будет проверять наличие подстроки search в строке string. Функция должна вернуть булев тип и быть регистронезависимой (использовать indexOf)*/
/*function search_string(search, string){
    string = string.toLowerCase();
    search = search.toLowerCase();
    return result = string.indexOf(search) != -1 || false;
}
alert(search_string('Hello', 'Hello, my name is Pavel'));*/

/*8. Написать функцию count_symbol( symbol, string ), которая подсчитает количество указанного символа symbol, в строке string. Функция должна быть регистронезависимой и вернуть число*/
/*function count_symbol(symbol, string){
    symbol = symbol.toLowerCase();
    string = string.toLowerCase();
    var count = 0;
    for(var i = 0; i < string.length; i++){
        if (string[i] == symbol) count++;
        else continue;
    }
    return count++;
}
alert(count_symbol('A', 'satar Ain aAgaa'));*/

/*9. Напишите функцию truncate(str, maxlength), которая проверяет длину строки str, и если она превосходит maxlength – заменяет конец str на "...", так чтобы ее длина стала равна maxlength.*/
/*function truncate(str, maxlength){
    if(str.length > maxlength) return str = str.slice(0, maxlength - 3) + '...';
    else return str;
}
alert(truncate('Hello my name is Pavel', 9));*/

/*10.Напишите функцию get_type_file( file_name ), которая получает расширение файла в заданном имени файла file_name (пример: get_type_file("readme.txt"), функция должна вернуть ".txt")*/
/*function get_type_file(file_name){
    point = file_name.indexOf('.');
    return typeFile = file_name.slice(point);
}
alert(get_type_file('.htaccess'));*/

/*11.Создайте функцию extractCurrencyValue(str), которая будет из строки выделять число-значение. Например,
extractCurrencyValue(‘$111’) должно вернуть число 111
extractCurrencyValue(‘$111р5’) должно вернуть число 1115
extractCurrencyValue(‘текст’) должно вернуть false*/
/*function extractCurrencyValue(str){
    var number = '';
    for (var i = 0; i < str.length; i++){
        if(typeof(+str[i]) == 'number' && !isNaN(+str[i])) number += str[i];
        else continue;
    }
    if (+number != '') return number;
    else return false;
}
alert(extractCurrencyValue('$111р5'));*/

/*12.Напишите функцию only_letters(str), которая из аргумента str удаляет все числа и оставляет только буквы. Функция должна вернуть текст. Например
only_letters(‘декабрь 2016’), должно вернуть «декабрь»*/
/*function only_letters(str){
    var string = '';
    for (var i = 0; i < str.length; i++){
        if(typeof(+str[i]) == 'number' && !isNaN(+str[i])) continue;
        else string += str[i];
    }
    return string
}
alert(only_letters('декабрь 2016'));*/

/*13.Напишите функцию replaceSymbol(str, symbol1, symbol2), которая заменяет в строке str символ или словосочетание symbol1 на символ или словосочетание symbol2*/
/*function replaceSymbol(str, symbol1, symbol2){
    while(str.indexOf(symbol1) != -1){
        str = str.replace(symbol1, symbol2);
    }
    return str;
}
alert(replaceSymbol('Hello my name is Pavel', 'Pavel', 'Paul'));*/

/*14.Напишите функцию get_short_fio(full_fio), которая преобразует полное ФИО full_fio в краткое. Например get_short_fio("Иванов Сергей Петрович"), функция должна вернуть "Иванов С.П."*/
/*function get_short_fio(full_fio){
    var arr = full_fio.split(' ');
    arr[1] = arr[1].charAt(0).toUpperCase() + '.';
    arr[2] = arr[2].charAt(0).toUpperCase() + '.';
    return str = arr.join(' ');
}
alert(get_short_fio('Гонтаренко Павел Олегович'));*/

/*15.Напишите функцию get_order(string), которая отсортирует все слова в заданном предложении string в алфавитном порядке. Например get_order("ноты акустика гитара"), функция должна вернуть "акустика гитара ноты"*/
/*function get_order(string){
    var arr = string.split(' ');
    arr.sort();
    return str = arr.join(' ');
}
alert(get_order('ноты акустика гитара'));*/

/*16.Напишите функцию get_random( arr ), которая вернет случайный элемент входящего массива arr.*/
/*function get_random(arr) {
    return result = arr[Math.round(Math.random() * (arr.length - 1))]
}
var arr = ['Слово1', 'Слово2', 'Слово3', 'Слово4', 'Слово5'];
alert(get_random(arr));*/

/*17.Напишите функцию get_max( arr ), которая находит максимальное значение в заданном массиве.*/
/*function get_max(arr){
    var count = arr[0];
    for(var i = 0;i<arr.length;i++){
       if(arr[i] > count) count = arr[i];
    }
    return count;
}
var arr = [5,40,81,12,40,5,150,70];
alert(get_max(arr));*/

/*18.Напишите функцию get_min( arr ), которая находит минимальное значение в заданном массиве.*/
/*function get_min(arr){
    var count = arr[0];
    for(var i = 0;i<arr.length;i++){
        if(arr[i] < count) count = arr[i];
    }
    return count;
}
var arr = [5,40,81,12,40,5,150,70];
alert(get_min(arr));*/

/*19.Создайте функцию is_empty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.*/
/*function is_empty(obj){
    for (var key in obj){
        return false;
    }
    return true;
}
var obj = {};
alert(is_empty(obj));*/

/*20.Напишите функцию get_uniq_arr( arr ), которая удаляет из заданного массива arr элементы, которые дублируются*/
/*function get_uniq_arr(arr){

}
arr1 = ['Понедельник','Вторник','Среда','Понедельник','Четверг','Вторник'];
alert(get_uniq_arr(arr1));*/

/*21.Напишите функцию get_min_max(arr), которая находит минимальное и максимальное число в заданном массиве, функция
возвращает строку ("мин: 5", "макс: 50")*/
/*function get_min_max(arr){
    var countMin = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < countMin) countMin = arr[i];
    }
    result1 = 'мин: ' + countMin;
    var countMax = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > countMax) countMax = arr[i];
    }
    result2 = 'макс: ' + countMax;

    return result1 + '' + result2;
}
var arr = [5,40,81,12,40,5,150,70];
alert(get_min_max(arr));*/

/*22.Напишите код, который запрашивает по очереди значения при помощи prompt и сохраняет их в массиве. Заканчивает ввод, как только посетитель введёт "exit". Из введенных значений отобрать только числа и просуммировать их.*/
/*var x; var arr = [];
var count = 0;
while (x != 'exit'){
    x = prompt('Сколько вам лет?','');
    arr.push(x);
}
for(var i = 0; i < arr.length; i++){
    if( typeof(+arr[i]) == 'number' && !isNaN(+arr[i])) count += (+arr[i]);  else continue;
}
alert(count);*/

/*23. Напишите функцию get_tomorrow(), которая возвращает завтрашнее число в формате 26 ноября 2016г*/
/*function get_tomorrow(){
    var mounts = ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'];
    var now = new Date();
    return ( now.getDate() + 1 + ' ' + mounts[now.getMonth()] + ' ' + now.getFullYear() + ' г.');
}
alert(get_tomorrow());*/

/*24.Напишите функцию get_yesterday(), которая возвращает вчерашнее число в формате 26 ноября 2016г*/
/*function get_yesterday(){
    var mounts = ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'];
    var now = new Date();
    return ( now.getDate() - 1 + ' ' + mounts[now.getMonth()] + ' ' + now.getFullYear() + ' г.');
}
alert(get_yesterday());*/

/*25.Напишите функцию get_count_work_days(date1, date2), которая будет считать количество рабочих дней между двумя заданными датами.*/
/*function get_count_work_days(date1, date2){

}
alert(get_count_work_days(date1, date2));*/

/*26.Напишите функцию get_count_days(date) , которая будет считать количество дней до Нового года от date, если оно задано, иначе посчитать количество дней от текущей даты*/
function get_count_days(date){
    newYear = new Date(2017,0,1);
    dateFixed = new Date(date);
    return daysLeft = 'До Нового Года осталось ' + Math.floor( (newYear - dateFixed) / (1000 * 60 * 60 * 24) ) + ' дней';
}
alert(get_count_days('2016,11,26'));


