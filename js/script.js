/* Scroll nav section */
$(document).ready(function(){
  $(".overlay-content a").on('click', function(event) {

  $(".overlay").css("height", "0%");
  $(".menu-icon").toggleClass('change');

  if (this.hash !== "") {
    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, function(){
      
      window.location.hash = hash;
    });
  } // End if
});


/* Menu icon */
$(".menu-icon").click(function(){
    var $this = $(this);
    $this.toggleClass('change');
    $(".menu-icon").css("z-index", "10");
    if($this.hasClass('change')){
      $(".overlay").css("height", "100%");        
    } else {
      $(".overlay").css("height", "0%");
    }
});


  /* General slide animation up */
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 700) {
          $(this).addClass("slide");
        }
    });
  });


  /* Service slide left */
    $(".brand-nav").ready(function() {
      $(".slideanimleft").each(function(){
          $(this).addClass("slideleft");
      });
    });

	/* Scroll to Top */ 
	$(window).scroll(function() {
	    if ($(this).scrollTop() > 500) {        
	        $('.to-top').fadeIn(500);      // displaying icon
	    } else {
	        $('.to-top').fadeOut(500);   // hiding icon
	    }
	});

	$('.to-top').click(function(event) {
      event.preventDefault();      
	    $('.body,html').animate({
	        scrollTop : 0                       
	    }, 500);
	});


})

