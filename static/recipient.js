export class Recipient {
    constructor(name) {
        this.name = name;
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
        
    }

}