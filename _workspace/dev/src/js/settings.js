// settings.js
/* ==========================================================
>> FUCTIONS
========================================================== */
  // =========================== */
  // ENABLE AND DISABLE SCROLL
  // =========================== */
  var keys = {37: 1, 38: 1, 39: 1, 40: 1};
  function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;  
  }
  function preventDefaultForScrollKeys(e) {
      if (keys[e.keyCode]) {
          preventDefault(e);
          return false;
      }
  }
  function disableScroll() {
    if (window.addEventListener)
        window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.onwheel = preventDefault;
    window.onmousewheel = document.onmousewheel = preventDefault;
    window.ontouchmove  = preventDefault;
    document.onkeydown  = preventDefaultForScrollKeys;
  }
  function enableScroll() {
      if (window.removeEventListener)
          window.removeEventListener('DOMMouseScroll', preventDefault, false);
      window.onmousewheel = document.onmousewheel = null; 
      window.onwheel = null; 
      window.ontouchmove = null;  
      document.onkeydown = null;  
  }
  // =========================== */
  // SMOOTH SCROLL
  // =========================== */
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        var header = $('header').outerHeight();
        $('html,body').animate({
          scrollTop: target.offset().top - header
        }, 1000, 'easeInOutCubic');
        return false;
      }
    }
    });
  });
  // =========================== */
  // SCROLL WATCHER
  // =========================== */
  function ScrollWatcher(){
    var scroll = $(window).scrollTop();
    if(scroll > 1){
      $('body').addClass('scrolled');
    } else {
      $('body').removeClass('scrolled');
    }
  }
  // =========================== */
  // OVERLAY TOGGLE
  // =========================== */
  function OverlayToggle(ClassName){
    var CheckClass = 0;
    var Classes = $("body").attr("class");
    if(Classes !== undefined){
      Classes = $("body").attr("class").split(' ');
      $.each(Classes, function(i, c) {
          if(c.indexOf(ClassName) === 0){
            CheckClass = 1;
            disableScroll();
          }
          if (c.indexOf("opened-") === 0) {
              $("body").removeClass(c);
              enableScroll();
          }
      });
    }
    if(CheckClass === 0){
      $("body").addClass(ClassName);
      disableScroll();
    }
    // ------------------------- */
    // GLOBAL CUSTOM CHECKS
    // ------------------------- */

    // ------------------------- */
    // GLOBAL CUSTOM CHECKS end
    // ------------------------- */
  }
  // =========================== */
  // FULL HEIGHT
  // =========================== */
  function fullHeight(){
    var wh = $(window).height();
    $('.fullHeight').css('height', wh);
  }
// FUNCTIONS end
/* ==========================================================
>> DOCUMENT READY
========================================================== */
$(document).ready(function(){

  console.log("     __     __ _                       __                                            __   \n    / /    / /(_)                     / _|                                           \ \  \n   / /    / /  _   ___   __ _  _ __  | |_  ___  _ __  _ __      ___  ___   _ __ ___   \ \ \n  < <    / /  | | / _ \ / _` || '_ \ |  _|/ _ \| '__|| '_ \    / __|/ _ \ | '_ ` _ \   > >\n   \ \  / /   | ||  __/| (_| || | | || | |  __/| |   | | | | _| (__| (_) || | | | | | / / \n    \_\/_/    | | \___| \__,_||_| |_||_|  \___||_|   |_| |_|(_)\___|\___/ |_| |_| |_|/_/  \n             _/ |                                                                         \n            |__/  ");  

 
  // =========================== */
  // FULL HEIGHT Start
  // =========================== */
  fullHeight();
  // =========================== */
  // WOW Start
  // =========================== */
  wow = new WOW({
    boxClass:     'wow',      
    animateClass: 'animated', 
    offset:       0,          
    mobile:       false,       
    live:         true        
  });
  wow.init();
  // =========================== */
  // Malihu Scroll Bar Start
  // =========================== */
  $(".add-scrollbar").mCustomScrollbar({
    theme:"light"
  });
  // =========================== */
  // Light Gallery Start
  // =========================== */
  $(".add-lightgallery").lightGallery({
      thumbnail:true,
      fullScreen:true
  });
}); // DOCUMENT READY end
/* ==========================================================
>> WINDOW LOAD
========================================================== */
$(window).load(function(){
  $('body').addClass('loaded');
}); // WINDOW LOAD end
/* ==========================================================
>> WINDOWS SCROLL
========================================================== */
$(window).scroll(function(){
	ScrollWatcher();
}); // WINDOWS SCROLL end
/* ==========================================================
>> WINDOW RESIZE
========================================================== */
$(window).resize(function(){
  fullHeight();
}); // WINDOW RESIZE end