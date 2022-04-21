var numberOfUsers = 5;

const exists = function (user, users) {
    return users.some(u => u.name === user);
}

const empty = function(id) {
    let submit = document.getElementById(id);
    submit.value = '';
}

const checkRecipient = function(user, users) {
    if (user && !exists(user, users)) {
        addRecipient(user);
    }
    empty('floatingInputValue');
}

const uploadImage = function() {
    $('#modalUploadImage').modal("show");
}

const uploadVideo = function() {
    $('#modalUploadVideo').modal("show");
}

const uploadRecording = function() {
    $('#modalUploadRecording').modal("show");
}

const buttons = function() {
    let div = document.getElementById('chat');

    let toolbar = document.createElement('div');
    toolbar.className = "btn-toolbar position-absolute bottom-0 start-0";
    toolbar.ariaRoleDescription = "toolbar";
    toolbar.id = "toolbar";

    let group = document.createElement('div');
    group.className = "btn-group me-2";
    group.ariaRoleDescription = "group";

    // image
    let image = document.createElement('button');
    image.className = "btn btn-info";
    image.onclick = uploadImage;
    // image.formTarget = "#modalSubscriptionForm";
    // image.id = "img";
    let i1 = document.createElement('i');
    i1.className = "bi bi-file-image";

    image.appendChild(i1);
    group.appendChild(image);

    // video
    let video = document.createElement('button');
    video.className = "btn btn-info";
    video.onclick = uploadVideo;
    // video.id = "vid";
    let i2 = document.createElement('i');
    i2.className = "bi bi-file-play";

    video.appendChild(i2);
    group.appendChild(video);

    // voice recorder
    let recorder = document.createElement('button');
    recorder.className = "btn btn-info";
    recorder.onclick = uploadRecording;
    // recorder.id = "rec";
    let i3 = document.createElement('i');
    i3.className = "bi bi-file-music";
    // i3.className = "bi bi-mic";

    recorder.appendChild(i3);
    group.appendChild(recorder);

    // location (not to be used)
    let location = document.createElement('button');
    location.className = "btn btn-info";
    let i4 = document.createElement('i');
    i4.className = "bi bi-geo";

    location.appendChild(i4);
    group.appendChild(location);

    // close
    let close = document.createElement('button');
    close.className = "btn btn-info btn-close";
    close.onclick = function() {
        toolbar.innerHTML = '';
    }

    group.append(close);

    toolbar.appendChild(group);
    div.appendChild(toolbar);
}

const sendMessage = function(message, chatbox, bool = true) {
    if (message != "") {
        let m = document.createElement('div');

        if (bool) {
            m.className = "message myMsg";
        } else {
            m.className = "message recMsg";
        }
        
        let p = document.createElement('p');
        p.innerHTML = message;
        m.appendChild(p);
        chatbox.appendChild(m);
    }
}

const displayInnerChat = function(user) {
    let chat = document.getElementById('chat');
    let div = document.createElement('div');
    div.className = "chats";
    let chatbox = document.createElement('div');
    chatbox.className = "chatbox";

    sendMessage(user.chat.rec1, chatbox);
    sendMessage(user.chat.sent, chatbox, false);
    sendMessage(user.chat.rec2, chatbox);

    div.appendChild(chatbox);
    chat.appendChild(div);
}

const displayChat = function(user) {
    let div = document.getElementById('chat');
    div.innerHTML = "";

    let u = document.createElement('ul');
    u.className = "list-group";

    // top
    let lt = document.createElement('li');
    lt.className = "list-group-item d-flex align-items-center position-absolute top-0 start-0";
    lt.id = "top";

    let im = document.createElement('img');
    im.src = user.img;
    im.className = "userimage";

    let sp = document.createElement('span');
    sp.className = "w-100 m-1 ms-4";
    sp.innerHTML = user.nickname;

    // middle
    let innerChat = document.createElement('div');
    innerChat.className = "list-group-item d-flex align-items-center";
    innerChat.id = "inner";
    displayInnerChat(user);

    // bottom
    let db = document.createElement('div');
    db.className = "input-group mb-3 position-absolute bottom-0 start-0";
    db.id = "bottom";

    let button = document.createElement('button');
    button.className = "btn btn-outline-info";
    button.type = "button";
    // button.ariaExpanded = "false";
    button.id = "b-input";
    button.onclick = buttons;
    
    let i1 = document.createElement('i');
    i1.className = "bi bi-file-plus";

    let input = document.createElement('input');
    input.type = "text";
    input.className = "form-control";
    input.ariaRoleDescription = "b-input";

    let send = document.createElement('button');
    send.className = "btn btn-outline-dark";
    send.type = "button";
    send.innerHTML = "Send";
    send.onclick = function() {
        let chat = document.getElementById('chat');
        let div = document.createElement('div');
        div.className = "chats";
        let chatbox = document.createElement('div');
        chatbox.className = "chatbox";

        sendMessage(input.value, chatbox);

        div.appendChild(chatbox);
        chat.appendChild(div);

        
    }

    button.appendChild(i1);
    db.appendChild(button);
    db.appendChild(input);
    db.appendChild(send);
    lt.appendChild(im);
    lt.appendChild(sp);
    u.appendChild(lt);
    u.appendChild(db);
    // u.appendChild(chatbox);
    div.appendChild(u);
}

const addRecipient = function(user) {
    if (!user) {
        return;
    }

    if (!(typeof user === 'object')) {
        user = { name: user, nickname: user, img: "/static/images/icon.png", password: "12345", id: ++numberOfUsers, chat: {rec1: "", sent: "", rec2: ""} }
    }

    let ul = document.getElementById('lst');
    let li = document.createElement('li');
    li.className = "list-group-item d-flex align-items-center";

    li.onclick = function () {
        // let div = document.getElementById('chat');
        // let chatbox = document.getElementById(user.chat);
        // div.innerHTML = "";
        displayChat(user);
    }

    let img = document.createElement('img');
    img.src = user.img;
    img.className = "userimage";

    let span = document.createElement('span');
    span.innerHTML = user.nickname;

    let cite = document.createElement('cite');
    cite.className = "w-100 ms-5";
    cite.title = "Source Title";
    cite.innerHTML = "1 minute ago"; // need to be changed whenever a new recipient is being added!

    li.appendChild(img);
    li.appendChild(span);
    li.appendChild(cite);
    ul.appendChild(li);
}


// const add = function (user, elementById, onclick) {
//     let elm = document.getElementById(elementById);
//     let li = document.createElement('li');
//     li.className = "list-group-item d-flex align-items-center";
//     li.onclick = function() {
//         add(user, elementById, true);
//     }

//     let img = document.createElement('img');
//     img.src = user.img;
//     img.className = "userimage";

//     let span = document.createElement('span');
//     span.innerHTML = user.nickname;
//     let u, cite;

//     if (onclick) {
//         elm.innerHTML = "";
//         u = document.createElement('ul');
//         u.className = "list-group";
//         li.id = "top";
//         span.className = "w-100 m-1 ms-4";

        
        
//     } else {
//         cite = document.createElement('cite');
//         cite.className = "w-100 ms-5";
//         cite.title = "Source Title";
//         cite.innerHTML = "1 minute ago";

        
        
//     }

//     li.appendChild(img);
//     li.appendChild(span);

//     if (onclick) {
//         u.appendChild(li);
//         elm.appendChild(u);
//     } else {
//         li.appendChild(cite);
//         ul.appendChild(li);
//     }

// }