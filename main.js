

document.getElementById('btnAdd').addEventListener('click', function (){
    var div = document.createElement('div');
    var str = document.createTextNode(document.getElementById('textChat').value);
    div.appendChild(str);
    var chat = document.getElementById('textChat');
    //document.body.insertBefore(div,chat);


});