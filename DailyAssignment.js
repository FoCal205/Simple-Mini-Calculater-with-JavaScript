function calculate(operator){
    const firstnumber = parseFloat(document.getElementById('firstnumber').value);
    const secondnuber = parseFloat(document.getElementById('secondnumber').value);

let Total;

if (isNaN(firstnumber) || isNaN(secondnuber)) {
    Total = "PLEASE ENTER A VALID NUMBDER!";
}
else{
    switch (operator){
        case '+': Total= firstnumber + secondnuber;
        break;
        case '*': Total= firstnumber * secondnuber;
        break;
        case '-': Total= firstnumber - secondnuber;
        break;
        case '/': Total= secondnuber !==0? firstnumber / secondnuber: "cannot divide by zero"
        break;

    }
}
document.getElementById('Total').textContent = " ANSWER IS:" + Total;
console.log("ANSWER IS:" +Total);
}