$(document).ready(function(){ irArriba(); }); //Hacia arriba

function irArriba(){
//   $('.btn-top').click(function(){ $('body,html').animate({ scrollTop:'0px' },1000); });
  $('.btn-top').click(function(){ $('body,html').animate({ scrollTop:'0px' },1000); });
  $(window).scroll(function(){
    if($(this).scrollTop() > 0){ $('.btn-top').slideDown(600); }else{ $('.btn-top').slideUp(600); }
  });
  $('.ir-abajo').click(function(){ $('body,html').animate({ scrollTop:'1000px' },1000); });
}