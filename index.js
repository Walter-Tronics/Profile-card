$(function() {
    setTimeout( ()=>{
        document.getElementById("coer").style.display="none";
    }, 2000);
let morebtn = document.getElementById("more");
let returnbtn = document.getElementById("return");
let card1 = document.getElementById("profile-card");
let card2 = document.getElementById("profile-card2");
let body = document.querySelector('body');
  morebtn.addEventListener("click",()=>{
    card1.style.display="none";
    card2.style.display="block";
    body.style.background= "#185adb";
    write1();
});
  returnbtn.addEventListener("click",()=>{
    card2.style.display="none";
    card1.style.display="block";
    body.style.background= "#ffc947";
});

//declaring the words variable
let words1,words2,words3,words4;

//Opening the side bar
$('#openBtn').on('click', ()=>{
    $("#mySidebar").css({"left":"0", "transition":"1s"});
});
//Opening the side bar ends

//Closing the side bar
$('#closeBtn').on('click', ()=>{
    $("#mySidebar").css({"left":"-100%", "transition":"1s"});
});
//Closing the side bar ends

let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
words1 = "Founder and CEO at <b>Meta</b>.";
words2 = "Works at <b>Chan Zuckerberg Initiative</b>.";
words3 = "Studied <b>Computer Science and Psychology</b> at Harvard University.";
words4 = "Lives in <b>Palo Alto, California</b> while from <b>Dobbs Ferry, New York</b>.";
    let word1 = '';
    let word2 = '';
    let word3 = '';
    let word4 = '';
    let num1 = -1;
    let num2 = -1;
    let num3 = -1;
    let num4 = -1;

//writing funcionality starts

function write1(){
    setTimeout( ()=>{
        setInterval( ()=>{
            num1++;
            word1+=words1.charAt(num1);
            box1.innerHTML = word1;
        },100);
        write2();
    },3000);
}

function write2(){
    setTimeout( ()=>{
        setInterval( ()=>{
            num2++;
            word2+=words2.charAt(num2);
            box2.innerHTML = word2;
        },100);
        write3();
    },5000);
}

function write3(){
    setTimeout( ()=>{
        setInterval( ()=>{
            num3++;
            word3+=words3.charAt(num3);
            box3.innerHTML = word3;
        },100);
        write4();
    },7000);
}

function write4(){
    setTimeout( ()=>{
        setInterval( ()=>{
            num4++;
            word4+=words4.charAt(num4);
            box4.innerHTML = word4;
        },100);
    },10000);
}
//Writing functionality
});