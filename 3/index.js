/*Вывести все числа от 10 000 до 150 000, у которых сумма трех предыдущих элементов при делении на 100 дает остаток 52, вторая цифра — 2*/

for (let number = 1e4; number < 15e4; number++){
    /*Вторая цифра 2?*/
    let seconddigit = number.toString() [1];
    /*отсаток от деления 3 предыдущих на 100 ===52?*/
     let rod = (number-2)*3 % 100;
        if (seconddigit ==="2" && rod === 52) {
     console.log(number);
 }
}