document.getElementById("o1").addEventListener('click', red1);
document.getElementById("o2").addEventListener('click', red2);
document.getElementById("o3").addEventListener('click', red3);
document.getElementById("o4").addEventListener('click', red4);
document.getElementById("o5").addEventListener('click', red5);
document.getElementById("o6").addEventListener('click', red6);
document.getElementById("o7").addEventListener('click', red7);
document.getElementById("o8").addEventListener('click', red8);
let a1 = 0;
let a2 = 0;
let a3 = 0;
let a4 = 0;
let a5 = 0;
let a6 = 0;
let a7 = 0;
let a8 = 0;

function red1() {
    if(a1==0){
        document.getElementById("o1").classList.remove('button');
        document.getElementById("o1").classList.add('bg-red');
        a1=1;
    }
    else{
        document.getElementById("o1").classList.remove('bg-red');
        document.getElementById("o1").classList.add('button');
        a1=0;
    }
}
function red2() {
    if(a2==0){
        document.getElementById("o2").classList.remove('button');
        document.getElementById("o2").classList.add('bg-red');
        a2=1;
    }
    else{
        document.getElementById("o2").classList.remove('bg-red');
        document.getElementById("o2").classList.add('button');
        a2=0;
    }
}
function red2() {
    if(a2==0){
        document.getElementById("o2").classList.remove('button');
        document.getElementById("o2").classList.add('bg-red');
        a2=1;
    }
    else{
        document.getElementById("o2").classList.remove('bg-red');
        document.getElementById("o2").classList.add('button');
        a2=0;
    }
}
function red3() {
    if(a3==0){
        document.getElementById("o3").classList.remove('button');
        document.getElementById("o3").classList.add('bg-red');
        a3=1;
    }
    else{
        document.getElementById("o3").classList.remove('bg-red');
        document.getElementById("o3").classList.add('button');
        a3=0;
    }
}
function red4() {
    if(a4==0){
        document.getElementById("o4").classList.remove('button');
        document.getElementById("o4").classList.add('bg-red');
        a4=1;
    }
    else{
        document.getElementById("o4").classList.remove('bg-red');
        document.getElementById("o4").classList.add('button');
        a4=0;
    }
}
function red5() {
    if(a5==0){
        document.getElementById("o5").classList.remove('button');
        document.getElementById("o5").classList.add('bg-red');
        a5=1;
    }
    else{
        document.getElementById("o5").classList.remove('bg-red');
        document.getElementById("o5").classList.add('button');
        a5=0;
    }
}
function red6() {
    if(a6==0){
        document.getElementById("o6").classList.remove('button');
        document.getElementById("o6").classList.add('bg-red');
        a6=1;
    }
    else{
        document.getElementById("o6").classList.remove('bg-red');
        document.getElementById("o6").classList.add('button');
        a6=0;
    }
}
function red7() {
    if(a7==0){
        document.getElementById("o7").classList.remove('button');
        document.getElementById("o7").classList.add('bg-red');
        a7=1;
    }
    else{
        document.getElementById("o7").classList.remove('bg-red');
        document.getElementById("o7").classList.add('button');
        a7=0;
    }
}
function red8() {
    if(a8==0){
        document.getElementById("o8").classList.remove('button');
        document.getElementById("o8").classList.add('bg-red');
        a8=1;
    }
    else{
        document.getElementById("o8").classList.remove('bg-red');
        document.getElementById("o8").classList.add('button');
        a8=0;
    }
}