const ip = "0.0.0.0" // local network ip
const ws = new WebSocket(`ws://${ip}:8083`);

const c = document.getElementById("canvas");
const ctx = c.getContext("2d");

ws.onopen = function() {
    ws.send("HostConnect");
    console.log("host connected");
}

ws.addEventListener('message', (e) => { //e.data
    let msgSplt = e.data.split(";");
    switch(msgSplt[0]) {
        case "point":
            renderPointAt(msgSplt[1],msgSplt[2]);
            break;
    }
});

function renderPointAt(x,y) {
    let s = 20;
    ctx.fillStyle = "white";
    ctx.fillRect(x - s, y - s, s*2,s*2);
}
