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
}

let Birds = [];
for (i=0; i<11; ++i) {
    Birds[i] = new Bird("Bird"+(i+1));
    //console.log(Birds[i].name+ " ready to Fight!");
}


let aliveBirds = Birds.filter(function (readybird) {
    return readybird.wasEaten === false;
});

console.log(aliveBirds);

function RandomBird(arr) {
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

console.log(aliveBirds.length);
while (true){
    aliveBirds = Birds.filter(function (readybird) {
        return readybird.wasEaten === false;
    });
    console.log(aliveBirds.length);
    if (aliveBirds.length < 2 ) break;
let fighter1 = RandomBird(aliveBirds);
let fighter2 = RandomBird(aliveBirds);
while (fighter1.name === fighter2.name){ fighter2 = RandomBird(aliveBirds);}
console.log(fighter1.name + " prepare to eat!");
console.log(fighter2.name +" prepare to die!");
fighter1.points += 1;
fighter2.wasEaten = true;
console.log(fighter1.name +" points= "+fighter1.points);
console.log(fighter2.name +" "+ fighter2.wasEaten);}

//Fighter1.wasEaten = true;
for (i=0; i<11; ++i){
    console.log(Birds[i])};
//for (i=0; i<11; ++i) {
   //console.log(Birds[i].wasEaten);}
