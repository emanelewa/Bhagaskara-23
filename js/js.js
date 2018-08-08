// header icons
var myIcon =  document.getElementsByClassName("icons");
function find() {
    myIcon.style.backgroundImage= "url(\"../images/header/icon_hader2.png\");";
    myIcon.style.marginTop= "30px";


}




// / slide menu
var myMenu = document.getElementById("x");
var myButton = document.getElementById("slide_menu");

function z() {
    if(myMenu.style.display === "none" ){
        myMenu.style.display = "block";
    }else{
        myMenu.style.display = "none";
    }
}



// team slider

jQuery(document).ready(function() {
    $('#bridgeSlide').bridgeSlide({
        width: 700,
        visibleItems: 3,
        itemMargin: 20
    });
});


//skills

$('#jq').LineProgressbar({
    percentage:90,
    radius: '3px',
    height: '20px',
    fillBackgroundColor: '#9f449b'
});
$('#html').LineProgressbar({
    percentage:80,
    radius: '3px',
    height: '20px',
    fillBackgroundColor: '#9f449b'
});
$('#css').LineProgressbar({
    percentage:70,
    radius: '3px',
    height: '20px',
    fillBackgroundColor: '#9f449b'
});

$('#ux').LineProgressbar({
    percentage:40,
    radius: '3px',
    height: '20px',
    fillBackgroundColor: '#9f449b'
});

//Statistics
$('.timer').countTo();


// portfolio

$(function(){
    $('#Container').mixItUp();
});
