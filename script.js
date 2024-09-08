const nums = [];
var o = "";
const display = document.querySelector("#display");

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a,b) {
    return a/b;
}

function operate(nums, o) {
    if (nums.length == 0) {
        nums.push(0);
        return 0;
    };

    if (nums.length == 1) {
        return nums.pop();
    }

    b = nums.pop();
    a = nums.pop();
    nums.length = 0;

    if (o == "add") {
        return add(a, b);
    }
    else if (o == "subtract") {
        return subtract(a,b);
    }
    else if (o == "multiply") {
        return multiply(a,b);
    }
    else if (o == "divide") {
        return divide(a, b);
    }
    else {
        Error;
    }
}

function newDisplay(a){
    display.textContent = a;
}

const numbers = Array.from(document.querySelectorAll(".number"));
numbers.forEach(num => {
    num.addEventListener("click", () => {
        temp = num.getAttribute("id");
        
        if (nums.length == 0){
            newDisplay(temp);
            nums.push(parseInt(temp));
        }
        else {
            if (o!="" && nums.length == 1){
                nums.push(0);
            }
            curr = nums.pop();
            curr = parseInt(temp) + curr * 10;
            nums.push(curr);
            newDisplay(curr.toString());
        }
    });
});

const operators = Array.from(document.querySelectorAll(".operator"));
operators.forEach(op => {
    op.addEventListener("click", ()=> {
        if (o != "") {
            calculate();
        }
        o = op.getAttribute("id");
    })
});

function calculate(){
    res = operate(nums, o);
    newDisplay(res.toString());
    nums.push(res);
    o = "";
}
const equals = document.querySelector("#equals");
equals.addEventListener("click", calculate);

const clear = document.querySelector("#clear");
clear.addEventListener("click", ()=> {
    nums.length = 0;
    newDisplay("0");
    o = "";
    nums.push(0);
})