var rightcolor;
var c1;
var c2;
var c3;
var streakpoints = 0
var divcolors = document.getElementsByClassName('color')
function newc() {
    for (let i = 0; i<=5; i++) {
        c1 = Math.round(Math.random()*260);
        c2 = Math.round(Math.random()*260);
        c3 = Math.round(Math.random()*260);
        console.log(`color${i}: ` + c1, c2, c3);
        divcolors[i].style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
        divcolors[i].style.cursor = "pointer";
        divcolors[i].innerHTML = "";
    }
    rightcolor = Math.round(Math.random()*5);
    console.log(rightcolor);
    document.getElementById('cod').innerHTML=divcolors[rightcolor].style.backgroundColor
    
}

function winnercheck(p) {
    if (divcolors[p].style.cursor == "pointer") {
        if (p == rightcolor) { 
            document.getElementById('cod').innerHTML="Você Acertou!";
            streakpoints++;
            document.getElementById('streak').innerHTML="Streak: " + streakpoints;
            for (let i = 0; i<=5; i++) {
                divcolors[i].style.cursor = "default";
            }
        } else {
            streakpoints = 0;
            document.getElementById('streak').innerHTML="Streak: " + streakpoints;
            divcolors[p].innerHTML="X";
            divcolors[p].style.cursor = "default";
        }
    }
}