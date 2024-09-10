const nums = [];
var o = "";
const top_display = document.querySelector("#top_display");
const bottom_display = document.querySelector("#bottom_display");

operators_dict = {
    "add": " + ",
    "subtract": " - ",
    "multiply": " * ",
    "divide": " / "
};

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
    let tempo = o;

    if (tempo == "add") {
        return add(a, b);
    }
    else if (tempo == "subtract") {
        return subtract(a,b);
    }
    else if (tempo == "multiply") {
        return multiply(a,b);
    }
    else if (tempo == "divide") {
        return divide(a, b);
    }
    else {
        Error;
    }
}

function newDisplay(a){
    bottom_display.textContent = a;
    console.log(nums);
    console.log(o);
}

function topDisplay(){
    let text = "";
    text += nums[0];
    if (o != "") {
        text += operators_dict[o];
    }
    if (nums.length == 2) {
        text += nums[1];
    }
    top_display.textContent = text;
}

const numbers = Array.from(document.querySelectorAll(".number"));
numbers.forEach(num => {
    num.addEventListener("click", () => {
        temp = num.getAttribute("id");
        
        if (nums.length == 0){
            nums.push(parseInt(temp));
            newDisplay(temp);
            topDisplay();
        }
        else {
            if (o!="" && nums.length == 1){
                nums.push(0);
            }
            curr = nums.pop();
            curr = parseInt(temp) + curr * 10;
            nums.push(curr);
            newDisplay(curr.toString());
            topDisplay();
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
        topDisplay();
    })
});

function calculate(){
    res = operate(nums, o);
    o = "";
    nums.push(res);
    newDisplay(res.toString());
    topDisplay();
}
const equals = document.querySelector("#equals");
equals.addEventListener("click", calculate);

const clear = document.querySelector("#clear");
clear.addEventListener("click", ()=> {
    nums.length = 0;
    o = "";
    nums.push(0);
    newDisplay("0");
    topDisplay();
})

const del = document.querySelector("#del");
del.addEventListener("click", ()=> {
    if (nums.length == 1) {
        nums[0] = Math.floor(nums[0]/10);
        newDisplay(nums[0]);
    }
    if (nums.length == 2) {
        nums[1] = Math.floor(nums[1]/10);
        newDisplay(nums[1]);
    }
    topDisplay();
})