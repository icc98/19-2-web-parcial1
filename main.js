
document.getElementById('btnAdd').addEventListener('click', function(){
    var div = document.createElement('div');
    var str = document.createTextNode(document.getElementById('textChat').value);
    div.className = 'messages';
    div.appendChild(str);
    var chat = document.getElementById('message');
    document.getElementById('chat').insertBefore(div,chat);
    document.getElementById('textChat').value = "";
});