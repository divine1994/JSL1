function foo (number) {
   let finish=number;
    function multi (number) {
    if (number === undefined) {return finish}
    else {finish*=number;
    return multi;}
    }
return multi;
}
console.log(foo(2)(3)(10)());