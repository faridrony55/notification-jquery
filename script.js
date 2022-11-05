
 
 $(document).ready(function(){

   
//   $(".CustomTerms").on('click',function(){
//     $(".cartNotfication").css({"visibility":"visible", "opacity":"1"})
//     console.log('huhaha');
    
// });
  $(".CustomTerms input").on('change',function(){ 
    if ($(this).is(':checked')) {
      $(".cartNotfication").css({"visibility":"visible", "opacity":"1"}) ;
    }   else {
      $('.btn.btn-checkout').attr('disabled','disabled');
      $(".cartNotficationBox input").prop("checked", false);
    } 
});
 
   
  $("#do").on('change',function(){
     if ($(this).is(':checked')) {
        $(".cartNotfication").css({"visibility":"hidden", "opacity":"0"})
        console.log('huhaha');
        $('.btn.btn-checkout').removeAttr('disabled');
    }    
});
$(".cartNotficationBox .close").on('click',function(){ 
        $(".cartNotfication").css({"visibility":"hidden", "opacity":"0"})
       $('.CustomTerms input').prop('checked', false);  
    
});

   
  $(".gotoCart input").on('change',function(){
     if ($(this).is(':checked')) {
       window.location.href = "https://bordermanage.com/cart";  
    }    
});


   
// const element = $(".sls-one-time-price .sls-price .money");
// const textToReplace = element.text();
// const newText = textToReplace.replace("$", "d");
// //const a  = parseInt(newText) ;
//  alert(textToReplace);
// console.log(newText);

  
//   var dec  = (10 / 100).toFixed(2);  
//      var mult = '44'; 
//    //const s=  $('').val((parseInt(textToReplace)) - (parseInt(10)));
 
// element.text(mult); 



   
});



 
