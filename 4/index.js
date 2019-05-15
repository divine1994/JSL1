
function foo (number) {
   let finish=number;

    function multi (x) {
        if (x === undefined) {
            return finish;
        }
        else {
            finish *= finish;
            console.log(finish);
            return multi;
        }
    }
    return multi;
}
let test1=foo(2)(3)(10)();
console.log(test1);

