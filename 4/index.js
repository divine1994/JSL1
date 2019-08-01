
function foo (number) {
    console.log("Start foo");
    let finish = number;


    function multi (x) {
        console.log("multi enter");
        console.log("multi number=" + x);
        if (x === undefined) {
            console.log("End multi");
            return finish;
        }
        else {
            console.log(x);
            console.log("finish=" + finish);
            finish *= x;
            console.log("Finish=" + finish);
            console.log("End multi");
            return multi;
        }

    }
    console.log("End foo");
    return multi;

}

let test1=foo(2)(3)(10)();
console.log("test1=" + test1);