var numberOfUsers = 5;

const exists = function(user, users) {
    return users.some(u => u.name === user);
}

const empty = function() {
    let submit = document.getElementById('floatingInputValue');
    submit.value = '';
}

const checkRecipient = function(user, users) {
    if (user && !exists(user, users)) {
        addRecipient(user);
    }
    empty();
}

const addRecipient = function(user) {
    if (!user) {
        return;
    }

    if (!(typeof user === 'object')) {
        user = {name: user, nickname: user, img: "/static/icon.png", password: "12345", id: ++numberOfUsers}
    }

    let ul = document.getElementById('lst');
    let li = document.createElement('li');
    li.className = "list-group-item d-flex align-items-center";

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

