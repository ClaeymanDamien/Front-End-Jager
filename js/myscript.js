/* SLICK */
$(document).on('ready', function () {
    $(".slick_gallery").slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
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

