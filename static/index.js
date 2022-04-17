var lst = document.getElementById('lst');
var messages = MessageList();

const createRecipient = function(list ,name) {
    var li = document.createElement('li');
    li.textContent = name;
    // var r = Recipient(name);
    addRecipient(list, li);
}

const addRecipient = function(list, li) {
    list.appendChild(li);
    var r = Recipient(li.textContent);
    messages.append(r);
}

var names = ['Micheal', 'Dwight', 'Jim', 'Pam', 'Stanley'];
for (n in names) {
    createRecipient(lst, names[n]);
}