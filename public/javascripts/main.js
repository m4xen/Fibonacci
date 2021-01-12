console.log("Fibonacci program");
console.log("Version 1.");
game();

function game(){
    var num1 = 0, num2 = 1, sum;

    console.log(num2);

    for (i = 0; i < 10; i++){
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        console.log(sum);
    }
}