const ip = "0.0.0.0"; // ip of the local network
const ws = new WebSocket(`ws://${ip}:8083`);

ws.onopen = function() {
    ws.send("hello world");
    console.log("connected");
}

ws.addEventListener('message', (e) => { //e.data
    let msgSplt = e.data.split(";");
    switch(msgSplt[0]) {
        case "":
            break;
    }
});

document.getElementById("canvas").addEventListener('click', (e) => {
    ws.send("point;" + e.clientX + ";" + e.clientY);
})
