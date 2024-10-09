const body = document.getElementsByTagName("body")[0]

function setColor(name) {
    body.style.backgroundColor = name;
}


function randomColor() {
    const white = Math.round(Math.random())
    const black  = Math.round(Math.random())


    const color =`rgb(${white}, ${black})`
    body.style.backgroundColor = color;
}

function blackMode(){
    document.getElementById('p2').style.color="white";
    document.getElementById('p1').style.color="white";
    document.getElementById('label1').style.color="white";
    document.getElementById('label2').style.color="white";
    document.getElementById('label3').style.color="white";
    document.getElementById('label4').style.color="white";
    document.getElementById('label5').style.color="white";
    document.getElementById('label6').style.color="white";
    document.getElementById('label7').style.color="white";
    document.getElementById('label8').style.color="white";
    document.getElementById('label9').style.color="white";
}

function whiteMode(){
    document.getElementById('p2').style.color="black";
    document.getElementById('p1').style.color="black";
}



