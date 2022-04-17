class Recipient {
    constructor(name) {
        this.name = name;
        display();
        // display(picture, this.setTimestamp());
    }

    // 
    setTimestamp() {
        this.time = new Date();
        // this.time = current.toLocaleString();
    }

    // Returns the last date/hour of the last sent message.
    getTimestamp() {
        var curr = new Date();
        




        // let day = curr.getDate();
        // let month = curr.getMonth() + 1;
        // let year = curr.getFullYear();

        // console.log(new Date().toLocaleString - this.time);
        // let hour = curr.getHours();
    }

    display() {
        document.write("<li class='list-group-item d-flex align-items-center'>");
        document.write("<i class='bi bi-person-video'></i>");
        document.write("<span>Micheal</span>");
        document.write("<cite class='w-100 ms-5' title='Source Title'>1 minute ago</cite>");
        document.write("</li>");
        
        var txt = document.createTextNode(document.body.innerHTML);
        var ul = document.getElementById('lst');
        ul.appendChild(txt);
        document.body.appendChild(ul);
    }

    // display(picture, time) {
    //     if (picture) {

    //     }


    // }
}


// var r = new Recipient("r");