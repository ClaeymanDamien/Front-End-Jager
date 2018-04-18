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

/*Size*/

function elementSize(element) {
    return element.offsetHeight;
}

function addheight(element, size) {
    element.style.height = size + "px";

}

function addsize(element_size, element_add) {
    addheight(element_add, elementSize(element_size) + 45);
}

/* Display*/

function displayNone(element) {
    if (element !== null) {
        element.style.display = 'none';
    }
}

function displayBlock(element) {
    element.style.display = 'block';
}
/* URL */

function $_GET(param) {
    var vars = {};
    window.location.href.replace(location.hash, '').replace( //On se place dans l'URL
        /[?&]+([^=&]+)=?([^&]*)?/gi, // Verification de validité
        function (m, key, value) { // Si pas de valeur on met rien
            vars[key] = value !== undefined ? value : '';
        }
    );
    if (param) {
        return vars[param] ? vars[param] : null;
    }
    return vars;
}

/* Step */

function formStep(step, step_max) {
    var id_step;
    var element;
    for (var i = 0; i < step_max; i++) {
        id_step = "step_" + i;
        element = document.getElementById(id_step);
        if (i == step && element !== null) {
            displayBlock(element);
        } else {
            displayNone(element);
        }
    }
}

function formStepNbr(step, step_max) {
    var element = document.getElementById('nbr_step');
    element.innerHTML = "Etape: " + (step + 1) + "/" + (step_max);
}

function allfunctionstep(step, step_max) {
    formStep(step, step_max);
    formStepNbr(step, step_max);

    var element = document.getElementById('button_step-sup');
    if (step > 0) {
        displayNone(element);
    } else {
        displayBlock(element);
    }
}

/* INSCRIPTION SECTION */

function sectionInscription(value) {
    if (value == 'return') {
        var element = document.getElementById('section_default');
        displayBlock(element);
        var element = document.getElementById('section_pro');
        displayNone(element);
        element = document.getElementById('section_client');
        displayNone(element);
    } else {
        if ($_GET('type') == 'client' || value == 'client') {
            var element = document.getElementById('section_client');
            displayBlock(element);
            var element = document.getElementById('section_default');
            displayNone(element);
            element = document.getElementById('section_pro');
            displayNone(element);
        }
        else if ($_GET('type') == 'pro' || value == 'pro') {
            var element = document.getElementById('section_pro');
            displayBlock(element);
            var element = document.getElementById('section_default');
            displayNone(element);
            element = document.getElementById('section_client');
            displayNone(element);
        }
        else {
            var element = document.getElementById('section_default');
            displayBlock(element);
            var element = document.getElementById('section_pro');
            displayNone(element);
            element = document.getElementById('section_client');
            displayNone(element);
        }
    }
}

/**Les Filtres du feed */

function nothing_filter(check){
    var element = document.getElementById('all_filter');
    if(check){
        displayBlock(element);
    }
    else{
        displayNone(element);
    }
    
}

function unckeck_all_checkbox(){
    var select_filtre = document.querySelectorAll('#select_filter input');
    for(var i = 0; i < select_filtre.length; i++){
            select_filtre[i].checked = false;
    }
}

function delete_all_filter() {
    var element = document.querySelectorAll('#list_filter div');
    
    for(var i = 0; i < element.length; i++){
        element[i].parentNode.removeChild(element[i]);
    }
    
    nothing_filter(false);
    unckeck_all_checkbox();
    
}

function delete_filter(name) {
    var parent = name.parentNode;

    parent.parentNode.removeChild(parent);
}

function unckeck_checkbox(filtre){
    var select_filtre = document.querySelectorAll('#select_filter input');
    for(var i = 0; i < select_filtre.length; i++){
        if(select_filtre[i].value == filtre.id){
            select_filtre[i].checked = false;
        }
    }
}

function check_if_filter(){
    if (document.querySelector('#all_filter .close') == null) {
        nothing_filter(false);
    }
}
function delete_filter_check(filtre, all_filtre) {
    var parent = filtre.parentNode.parentNode;
    var length = parent.childNodes.length;
    unckeck_checkbox(filtre);
    delete_filter(filtre);
    check_if_filter();
}

function creat_filter(element){
    var mainDiv = document.createElement('div');
        var button = document.createElement('button');
        var span = document.createElement('span');
        var spanText = document.createTextNode(element.nextSibling.nextSibling.innerHTML);
        var buttonText = document.createTextNode('\u00D7');
        
        mainDiv.setAttribute('class','mb-1 p-0');
        button.setAttribute('id',element.value);
        button.setAttribute('onclick',"delete_filter_check(this,'all_filter')");
        button.type ="button";
        button.setAttribute('class','close');

        button.appendChild(buttonText);
        span.appendChild(spanText);

        mainDiv.appendChild(button);
        mainDiv.appendChild(span);

        document.getElementById("list_filter").appendChild(mainDiv);
}

function add_filter(element) {
    if (element.checked) {
        nothing_filter(true);
        creat_filter(element);
        
    }
    else {
        var filtre_uncheck = document.getElementById(element.value);
        delete_filter_check(filtre_uncheck,'all_filter');  
    }
}
