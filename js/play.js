$(document).ready(function(){
  var $header = $(".main_wrap");
      
      var menuPos = $header.offset().top;

    
      $(window).on("scroll",function(){
        var scrollY = window.pageYOffset;
        if(scrollY > 400){
          $header.addClass("fixed");
        }else{
          $header.removeClass("fixed");
        }

      

      });
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  $('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
	});
  $('.logo').on('click', function(){
    $('.navbar-collapse').collapse('hide');
	});

  var $sec = $(".makeup");
      var secPos = $sec.offset().top;

      $sec.css("opacity",0);
      $(window).on("scroll",function(){
        var scrollY = window.pageYOffset;
        if(scrollY > secPos - 600){
          $sec.stop().animate({left:100,opacity:1});
        }else{
          $sec.stop().animate({left:0});
        }

      });

});
