/* SLICK */
$(document).on('ready', function () {
    $(".slick_gallery").slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

/*  Horloge */
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor(t / (1000 * 60 * 60));
    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
  
    function updateClock() {
        var t = getTimeRemaining(endtime);
  
      
      hoursSpan.innerHTML = t.hours;
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  
  var deadline = new Date(Date.parse(new Date()) + 25 * 60 * 60 * 1000);

  initializeClock('clockdiv', deadline);

/*

var menu_check = document.getElementById('navbar_menu');

if(menu_check.addEventListener('click', remove_menu))
{
    alert("ok1");
}
if(menu_check.addEventListener('blur', add_menu))
{
    alert("ok2");
}        


var remove_menu = function(){
    alert('ok');
    var remove_menu_img = document.createElement("img");
    remove_menu_img.src = "images/menu.png";
    remove_menu_img.classList.add("img-fluid height-50");
    remove_menu_img.alt = "menu";

    document.getElementById('navbar_menu').appendChild(remove_menu_img); //Sur l'id "unknow" on greffe le nouveau élément comme enfant
};

var add_menu = function(){
    var remove_menu_img = document.createElement("img");
    remove_menu_img.src = "images/menu_close.png";
    remove_menu_img.classList.add("img-fluid height-50");
    remove_menu_img.alt = "menu";

    document.getElementById('navbar_menu').appendChild(remove_menu_img); //Sur l'id "unknow" on greffe le nouveau élément comme enfant
};*/

