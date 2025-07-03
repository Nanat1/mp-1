function Addition(){
    let x = document.getElementById("x").value;
    x = Number(x);

    let y = document.getElementById("y").value;
    y = Number(y);

    let result = x + y;
    document.getElementById("output").innerHTML = `<p> ${result} </p>`;
}

function Subtraction(){
    let x = document.getElementById("x").value;
    x = Number(x);

    let y = document.getElementById("y").value;
    y = Number(y);

    let result = x - y;
    document.getElementById("output").innerHTML = `<p> ${result} </p>`;
}

function Multiplication(){
    let x = document.getElementById("x").value;
    x = Number(x);

    let y = document.getElementById("y").value;
    y = Number(y);

    let result = x * y;
    document.getElementById("output").innerHTML = `<p> ${result} </p>`;
}

function Division(){
    let x = document.getElementById("x").value;
    x = Number(x);

    let y = document.getElementById("y").value;
    y = Number(y);

    let result = x / y;
    document.getElementById("output").innerHTML = `<p> ${result} </p>`;
}

function Power(){
    let x = document.getElementById("x").value;
    x = Number(x);

    let y = document.getElementById("y").value;
    y = Number(y);

    let result = x ** y;
    document.getElementById("output").innerHTML = `<p> ${result} </p>`;
}

function Clear(){
    document.getElementById("x").value = "";
    document.getElementById("y").value = "";
    document.getElementById("output").innerHTML = "";
}