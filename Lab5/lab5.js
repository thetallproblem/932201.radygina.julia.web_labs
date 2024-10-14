function open_new(id) {
    elem = document.getElementById(id);
    elem.style.visibility='visible';

    document.getElementById('parent_popup').style.visibility='visible';
}

function hide_new() {
    document.getElementById('parent_popup').style.visibility='hidden';
    document.getElementById('new_1').style.visibility='hidden';
    document.getElementById('new_2').style.visibility='hidden';
    document.getElementById('new_3').style.visibility='hidden';
}