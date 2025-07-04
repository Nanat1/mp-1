function Addition(){
    let x = document.getElementById("x").value;
    x = Number(x);

    let y = document.getElementById("y").value;
    y = Number(y);

    let result = x + y;
    document.getElementById("output").innerHTML = `<p> ${result} </p>`;
    document.getElementById("calc_sign").innerHTML = "+";
}

function Subtraction(){
    let x = document.getElementById("x").value;
    x = Number(x);

    let y = document.getElementById("y").value;
    y = Number(y);

    let result = x - y;
    document.getElementById("output").innerHTML = `<p> ${result} </p>`;
    document.getElementById("calc_sign").innerHTML = "-";
}

function Multiplication(){
    let x = document.getElementById("x").value;
    x = Number(x);

    let y = document.getElementById("y").value;
    y = Number(y);

    let result = x * y;
    document.getElementById("output").innerHTML = `<p> ${result} </p>`;
    document.getElementById("calc_sign").innerHTML = "×";
}

function Division(){
    let x = document.getElementById("x").value;
    x = Number(x);

    let y = document.getElementById("y").value;
    y = Number(y);

    let result = x / y;
    document.getElementById("output").innerHTML = `<p> ${result} </p>`;
    document.getElementById("calc_sign").innerHTML = "÷";
}

function Power(){
    let x = document.getElementById("x").value;
    x = Number(x);

    let y = document.getElementById("y").value;
    y = Number(y);

    let result = x ** y;
    document.getElementById("output").innerHTML = `<p> ${result} </p>`;
    document.getElementById("calc_sign").innerHTML = "**(x<sup>y</sup>)";
}

function Clear(){
    document.getElementById("x").value = "";
    document.getElementById("y").value = "";
    document.getElementById("output").innerHTML = "";
    document.getElementById("calc_sign").innerHTML = "";
}