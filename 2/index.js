let fedorPoints=10;
let petrPoints=22;
let winner="";

if (fedorPoints>21)
{
    winner= (petrPoints>21 ? "Оба проиграли!":"Победил Пётр!");}
else {
    winner="Победил Федор!";
}
if(fedorPoints<=21 && petrPoints<=21) {
    if (fedorPoints===petrPoints){
        winner="У нас Ничья!";
    }
    else {
        winner=(petrPoints>fedorPoints ? "Победил Пётр!":"Победил Федор!");
    }
}
console.log(winner);