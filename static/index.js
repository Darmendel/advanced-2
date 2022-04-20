const display = function(user) {
    console.log(4);
    // var div = document.getElementById('chat');
    // var l = document.createElement('li');
    // l.className = "list-group-item d-flex align-items-center";

    // var im = document.createElement('img');
    // im.src = user.img;
    // im.className = "userimage";

    // var sp = document.createElement('span');
    // sp.innerHTML = user.nickname;

    // l.appendChild(im);
    // div.appendChild(l);
}

// const plus = function() {
//     let user = prompt("Add new contact", "Catomi");
// }

// function plus() {
//     let user = prompt("Add new contact", "");
//     const lst = document.getElementById('lst');
//     lst.innerHTML += addRecipient(user);
// }

const addRecipient = function(user) {
    let ul = document.getElementById('lst');
    let li = document.createElement('li');
    li.className = "list-group-item d-flex align-items-center";

    // li.onclick = display;
    // li.onclick.arguments = user;

    li.onclick = function() {
        let div = document.getElementById('chat');
        div.innerHTML = "";

        let u = document.createElement('ul');
        u.className = "list-group";

        let l = document.createElement('li');
        l.className = "list-group-item d-flex align-items-center";
        l.id = "top";

        let im = document.createElement('img');
        im.src = user.img;
        im.className = "userimage";

        let sp = document.createElement('span');
        sp.className = "w-100 m-1 ms-4";
        sp.innerHTML = user.nickname;

        l.appendChild(im);
        l.appendChild(sp);
        u.appendChild(l);
        div.appendChild(u);
    }

    let img = document.createElement('img');
    img.src = user.img;
    img.className = "userimage";

    let span = document.createElement('span');
    span.innerHTML = user.nickname;

    let cite = document.createElement('cite');
    cite.className = "w-100 ms-5";
    cite.title = "Source Title";
    cite.innerHTML = "1 minute ago";

    li.appendChild(img);
    li.appendChild(span);
    li.appendChild(cite);
    ul.appendChild(li);
}

const users = [
    {name : "Micheal Scott", nickname : "Prison Mike", img : "/static/prisonmike.png", password : "12345", id : 1},
    {name : "Dwight Schrute", nickname : "Dwight", img : "/static/dd.png", password : "12345", id : 2},
    {name : "Jim Halpert", nickname : "Jimothy", img : "/static/icon.png", password : "12345", id : 3},
    {name : "Pam Beesly", nickname : "Pamela", img : "/static/icon.png", password : "12345", id : 4},
    {name : "Stanely Hudson", nickname : "Stanely the manley", img : "/static/icon.png", password : "12345", id : 5},
]

users.forEach(user => addRecipient(user));

