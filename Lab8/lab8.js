function del_el(el) {
    var list_el = el.parentNode;
    document.getElementById("list").removeChild(list_el);
}

function up_el(el) {
    var list_el = el.parentNode;
    if (list_el.previousElementSibling)
        list_el.parentNode.insertBefore(list_el, list_el.previousElementSibling);
}

function down_el(el) {
    var list_el = el.parentNode;
    if (list_el.nextElementSibling)
        list_el.parentNode.insertBefore(list_el.nextElementSibling, list_el);
}

function add_el() {
    var listItem = document.createElement('li')
    listItem.className = 'elem'

    listItem.innerHTML = `
        <input name="name" id="name" class="inp"/>
        <input name="val" id="val" class="inp"/>
        <button id="up" class="but_up" onclick='up_el(this)'></button>
        <button id="down" class="but_down" onclick='down_el(this)'></button>
        <button id="del" class="but_del" onclick='del_el(this)'></button>
        `

    document.getElementById('list').appendChild(listItem);
}

function save_list() {
    let name_list = document.querySelectorAll("#name");
    const val_list = document.querySelectorAll("#val");

    let str = "{";
    for (let i = 0; i < name_list.length; i++)
    {
        str += '"' + name_list[i].value + '":"' + val_list[i].value + '"';
        if (i != name_list.length - 1)
            str += ",";
    }
    str += "}";

    if (document.getElementById("list_el") == null)
    {
        const str_save = document.createElement('p');
        str_save.id = "list_el";
        const pText = document.createTextNode(str);
        str_save.appendChild(pText);
        document.body.appendChild(str_save);
    }
    else
        document.getElementById("list_el").innerHTML = str;
}