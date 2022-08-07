$(function() {

    //Hide the preloader on page load
    setTimeout( ()=>{
        document.getElementById("coer").style.display="none";
    }, 2000);


//Going to profile card1 back
  $('#more').on("click",()=>{
    $('#profile-card').hide();
    $('#profile-card2').show();
    $('body').css("background","#185adb");
    write1();
});
//Going to profile card1 front
  $('#return').on("click",()=>{
    $('#profile-card').show();
    $('#profile-card2').hide();
    $('body').css("background","#ffc947");
});


//Going to profile card2 back
$('#more2').on('click',()=>{
    $('#profile-card-2').css('display', 'none');
    $('#profile-card2-2').css('display','block');
    $('body').css('background','#185adb');
    //change the about details
    words1 = "Cofounder at <b>Alphabet</b>.";
    words2 = "Co-invented Google's <b>PageRank algorithm</b>.";
    words3 = "<b>Master of Science</b> at Stanford University, <b>Bachelor of Arts/Science.</b>";
    words4 = "Lives in <b>Palo Alto, California</b> while from <b>Lansing, Michigan</b>.";
    //call the function to write the about details
    write1();
});
//returning back to profile card2 front
$('#return2').on('click',()=>{
    $('#profile-card2-2').hide();
    $('#profile-card-2').show();
    $('body').css('background','#ffc947');
});


//Going to profile card3 back
$('#more3').on('click',()=>{
    $('#profile-card-3').hide();
    $('#profile-card2-3').show();
    $('body').css('background','#185adb');
    //change the about details
    words1 = "Founded e-commerce giant <b>Amazon</b> 1994.";
    words2 = "Owns <b>The Washington Post</b> and <b>Blue Origin</b>.";
    words3 = "<b>Bachelor of Arts/Science</b> at Princeton University.";
    words4 = "Lives in <b>Seattle, Washington</b> while from <b>Albuquerque, New Mexico</b>.";
    //call the function to write the about details
    write1();
});
//returning back to profile card3 front
$('#return3').on('click',()=>{
    $('#profile-card2-3').hide();
    $('#profile-card-3').show();
    $('body').css('background','#ffc947');
});


//Going to profile card4 back
$('#more4').on('click',()=>{
    $('#profile-card-4').hide();
    $('#profile-card2-4').show();
    $('body').css('background','#185adb');
    //change the about details
    words1 = "CEO at <b>Tesla</b>.";
    words2 = "Cofounded six companies including <b>SpaceX</b> and <b>Boring Company</b>.";
    words3 = "<b>Bachelor of Arts/Science</b>, University of Pennsylvania.";
    words4 = "Lives in <b>Austin Texas</b> while from <b>Pretoria, South Africa</b>.";
    //call the function to write the about details
    write1();
});
//returning back to profile card4 front
$('#return4').on('click',()=>{
    $('#profile-card2-4').hide();
    $('#profile-card-4').show();
    $('body').css('background','#ffc947');
});



//declaring the words variable
let words1,words2,words3,words4;

//Opening the side bar
$('#openBtn').on('click', ()=>{
    $("#mySidebar").css({"bottom":"0", "transition":"1s"});
});
//Opening the side bar ends

//Closing the side bar
$('#closeBtn').on('click', ()=>{
    $("#mySidebar").css({"bottom":"-100%", "transition":"1s"});
});
//Closing the side bar ends


//Getting the boxes
let box1 = document.getElementById("box1"), 
box2 = document.getElementById("box2"),
box3 = document.getElementById("box3"),
box4 = document.getElementById("box4");

//Append words to the words variable
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