var change = 1;
$(document).ready(function(){
  Accordion();
  Rotate();
  MenuInit();
  BasketInit();
  searchArticle();
  contactForm();
});

function Accordion(){
  $('dt').click(function(){
    $(this)
    .next()
    .slideDown()
    .siblings('dd')
    .slideUp();
        }); 
  $('dd').click(function(){
    $(this)
    .slideUp();  
  });
};
  
function Rotate(){
  var n= (jQuery(".box").width())/150;
  n = n - (n%1);
	
  jQuery(".rotate").jCarouselLite({
    auto: 10000,
    speed: 5000,
    visible: 1,
    start: 0,
    btnGo: [".0", ".1", ".2", ".3", ".4"]
  });
};

function   MenuInit(){
  Menu('.main-navigation');
};
var setVar = null;
function Menu(i){
  var list = $(i).find('> ul > li'),
  dropdowns = list.find('> div');
  list.each(function(){
      
    var element = $(this),
    dropdown = element.find('.drop-ul'),
    link = dropdown.prev('a');
   
     link.hover(
      function(){ 
        dropdowns.hide();
        dropdown.slideDown(); 
      },
      function(){
        setVar = setTimeout(function(){
          dropdown.slideUp();
        }, 10);
      }
      );
        dropdown.mouseover(function(){
            clearTimeout(setVar);
    });
    dropdown.mouseout(function(){
        setVar = setTimeout(function(){
        dropdown.slideUp();
      }, 10);

    });

  });
};

function BasketInit(){
 Basket('.menu-basket');
}; 
function Basket(c){
  var list = $(c).find('> ul > li');
  
  list.each(function(){
    var element = $(this),
    dropdownv = element.find('#drop-basket'),
    blockClick = dropdownv.parent('li');
      
    blockClick.click(function(){
      dropdownv.fadeToggle('fast');
    });
  });
};



function searchArticle(){
  $("#rechercher").focus (function() {
    $("#rechercher").change(function(){
      change = 0;
    });
    if(change){
      $("#rechercher").val('');
    };
  });
  $("#rechercher").blur (function() {
    if(change){
      $("#rechercher").val('Rechercher un article ou une référence');
    };
  });
};

function contactForm(){
  $(".mail-input").focus (function() {
    $(".mail-input").change(function(){
      change = 0;
    });
    if(change){
      $(".mail-input").val('');
    };
  });
  $(".mail-input").blur (function() {
    if(change){
      $(".mail-input").val('Saisissez votre adresse e-mail');
    };
  });
};












