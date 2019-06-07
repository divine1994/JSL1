//1. Игра в выживание птичек. Цель игры: выяснить, какая птичка съест больше всего своих сородичей.
//    Алгоритм решения:
//    1. Создайте класс Bird.
//2. Добавьте птичке свойства name, points, wasEaten.
//3. Создайте 10 птичек с именами Bird 1, Bird 2, ..... Bird 3.
//4. Запустите цикл: до тех пор, пока не останется только одна живая птичка. Цикл должен выбирать случайным образом одну из живых птиц и скармливать ей любую другую (та, которая съедена, становится wasEaten=true, а та, которую покормили, — point++).

class Bird {
    constructor(name) {
        this.name=name;
        this.points = 0;
        this.wasEaten = false;
    }
    sayHi() {
        console.log(this.name + " ready to Fight!");
    }
}
let Birds = [];
for (i=0; i<11; ++i) {
    Birds[i] = new Bird("Bird"+(i+1));
    console.log(Birds[i].name+ " ready to Fight!");
}


aliveBirds = Birds.filter(function () {
    for (i=0; i<11; ++i){
    if (Birds[i].wasEaten === false) {
        return Birds;}
    }

});

function RandomBird(arr) {
    let rand = Math.floor(Math.random() * aliveBirds.length);
    return arr[rand];
}
    console.log(RandomBird(aliveBirds));


