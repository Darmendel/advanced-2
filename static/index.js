const addRecipient = function (name) {
    var ul = document.getElementById('lst');
    var li = document.createElement('li');
    li.className = "list-group-item d-flex align-items-center";
    var i = document.createElement('i');
    i.className = "bi bi-person-video";
    var span = document.createElement('span');
    span.innerHTML = name;
    var cite = document.createElement('cite');
    cite.className = "w-100 ms-5";
    cite.title = "Source Title";
    cite.innerHTML = "1 minute ago";
    li.appendChild(i);
    li.appendChild(span);
    li.appendChild(cite);
    ul.appendChild(li);
} 

var names = ['Micheal', 'Dwight', 'Jim', 'Pam', 'Stanley'];
names.forEach(name => addRecipient(name));
