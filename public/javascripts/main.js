console.log("Fibonacci program");
console.log("Version 2.");
game();

function game(){
    var num1 = 0;
    var num2 = 1;
    var sum; 
    var amount = 10;

    console.log(num2);

    for (i = 0; i < amount; i++){
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        console.log(sum);
    }
}