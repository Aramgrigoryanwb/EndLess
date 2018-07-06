//menu.onclick = function myFunction(){
//    var x = document.getElementById('myTopnav');
//    
//    if(x.className === "topnav"){
//        x.className += " responsive";
//    } else {
//        x.className = "topnav";
//    }
//}

$(document).ready(function(){
    $("#myTopnav").on("click","a", function (event) {
  event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);

    });
});

//$("#menu").on("click", function(){
//if ($("#myTopnav").hasClass("topnav")){
//$("#myTopnav").addClass(" responsive");
//}
//else{
//$("#myTopnav").hasClass("topnav");   
//}
//});

//$(document).ready(function(){
//    $("#menu").click(function(x) {
//  x.();
//    var x = $("#myTopnav");
//     if( $(x).hasClass("topnav"));{
//        
//        $(x).addClass("responsive");
//    
//     } else {
//                  
//          $(x).hasClass("topnav");
//     }
//});
//});
$("#menu").on("click", function(){
$("#myTopnav").toggleClass(" responsive");
});
