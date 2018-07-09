$(function(){
  //effect bounce
  $("#btn1").on("click", function(){
  	$(".div1").effect("bounce",{
  		times: 7,
  		distance: 100,
  		direction: "left"
  	}, 1000);
  });
  //effect explode
  $("#btn2").on("click", function(){
  	$(".div2").effect("explode",{
  		pieces: 9
  		
  	}, 2000, function(){
  		$(".div2").effect("explode", {
  			pieces: 9,
  			mode: 'show'
  		}, 2000);
  	});
  });
  //pulsate effect
  $("#btn3").on("click", function(){
  	$(".div3").effect("pulsate",{
  		times: 7,
  		mode: 'hide'
  	}, 1000, function(){
  		$(".div3").css({
  			backgroundColor: "white",
  			display: "block",
  			border: "none"
  		});
  	});
  });
  //show/hide
  $("#btnshow").on("click", function(){
  	$(".divshow").show("explode", 2000);
  });
  $("#btnhide").on("click", function(){
  	$(".divhide").hide("explode", 2000);
  });
  //add/remove class
  $("#btnadd").on("click", function(){
  	 $("#pic1").addClass("imgcircle",1000);
  });
  $("#btnremove").on("click", function(){
  	 $("#pic2").removeClass("imgcircle",1000);
  });
  //switch class
  $("#switchbtn").on("click", function(){
  	$(".divtext p").switchClass("abzac","newabzac",2000);
  });
  //color animate
  $("#animbtn").on("click", function(){
  	$(".anim").animate({
  		"backgroundColor": "yellow",
  		"width": "400",
  		"height": "400",
  		"color": "red"

  	},2000);
  });
  //widget accordion
  $("#accordeon").accordion({
    active: false,
    collapsible: true,
    heightStyle: 'content',
    icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }
  });
  //widget tabs
  $("#tabs").tabs({
    collapsible: true,
    heightStyle: 'auto',
    active: 1 
  });
  //menu
  $("ul.menu").menu();
  //datepicker
  $("#calendar").datepicker({
    changeYear: true,
    changeMonth: true,
    yearRange: '1940:2018',
    showWeek: true,
    showOn: 'both',
    showButtonPanel: true,
    showAnim: 'explode',
    numberOfMonths: [1,1],
    duration: 'slow',
    buttonText: 'Выбрать дату',
    //buttonImage: 'img/Desert.jpg'
  });
  //widget button
  $("#btn4, #link").button();
  //dialog
  $("#btn5").on("click", function(){
    $("#dialog").dialog({
      modal: true,
      buttons: {
        Cancel: function(){
          $(this).dialog("close");
        }
      },
      show: {effect: 'explode', duration: 800},
      hide: {effect: 'explode', duration: 800}
    });
  });
  $("#slider").slider({
    max:200,
    range: true,
    values: [10,50] ,//parametru polzynkov
    step:5,
    animate:true,
     slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider" ).slider( "values", 0 ) +
      " - $" + $( "#slider" ).slider( "values", 1 ) );


    //Draggable
$("#kart1, #kart2, #kart3").draggable({
  revert: true,
  helper:'clone', // создание клона
  opacity:0.5,    // прозрачность
  zIndex:100,
  cursor:'pointer', //появление руки
  reverDuration:1000// скорость возврата назад


});
//Drappable
$(".pics img").draggable({

  revert:"invalid",
  start: function(event,ui){
    ui.helper.css('transform', 'rotate(5deg)  scale(1.5)');
  },
  stop: function(event,ui){
    ui.helper.css('transform', 'rotate(0deg)  scale(0)');
  },
  zIndex:100
});
$("#trash").droppable({
  activeClass:'highlight',
  drop:function(event,ui){
ui.helper.hide('explode');
$(this).attr('src','img/trashcan-full-icon.png' )

  }
})
//Sortable
$(".spisok1").sortable({
  connectWith:'.spisok2',
  change: function(event, ui){
    ui.helper.css("backgroundColor","red");
  },
  stop: function(event, ui) {
    ui.item.css("backgroundColor", "grey");
  }
});

$(".spisok2").sortable({
  connectWith:'.spisok1',
    change: function(event, ui){
   ui.helper.css("backgroundColor","red");
  },
  stop: function(event, ui) {
    ui.item.css("backgroundColor", "grey");
  }
});
//resize
$("#resize").resizable();

//superfish
$("#menu1, #menu2, #menu3 ").superfish({
  delay:1000,
  animation:{opacity:'show'},
  animationOut:  {opacity:'hide'},
  speed:'show'
});
//galler

$(".gal").colorbox({
  rel:"gal",
  transition:'elastic',
  speed:500,
  width:500,
  height:400,
  innerWidtth:300,
  innerHeight:300,
  opacity:0.7,
  slideshow:true,
  slideshowSpeed:2500,
  slideshowAuto:true,
  current:"Фото {current} из {total}",
  slideshowStart:"запуск слайдшоу",
  slideshowStop: "Остановить слайдшоу",
});
$(".youtube").colorbox({
  iframe: true,
  width:500,
  height:400
})
$(".inline").colorbox({
  inline:true, //pokaz skrutui tekst
  width:"50%"
})


//slider
$(".slider").bxSlider({
auto:true,
autoControls:true,
stopAutoOnClick:true,
page:true,
mode: 'horizontal',
speed:700,
minSlider: 3,
maxSlides: 3,
slideWidth:200,
moveSlides: 1,
slideMargin:20,
captions:true,
video:true,
adaptiveHeight:true 

});

$ ( ".magnify  " ).jfMagnify ({
  center: true,
  scale:3,
  scaleGlass:false,
  containment:'magnify',
  magnifyGlass : '.magnify_glass',
  magnifiedElement: '.magnified_element',
  magnifiedZone:'.magnify_glass',
  elementToMagnify : '.element_to_magnify',

});



  });

//wowjs animate
let wow =  new WOW({
     boxClass:'wow' ,       // анимированный элемент css class (по умолчанию wow) 
    animateClass:'animated' , // animation css class (по умолчанию анимирован) 
    offset:0            // расстояние до элемента при запуске анимации (по умолчанию используется 0) 
    });
wow.init();