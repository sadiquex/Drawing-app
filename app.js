/* the canvas api
* .getContext() - gets the thing onto which the drawiing is done on


*/
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d')

let size = 20;
let color = "black";
let x;
let y;

function drawCircle(x,y) {
    ctx.beginPath(); //start drawing path
    // ctx.arc(x, y, size, start, end);
    ctx.arc(75, 75, size, 0, Math.PI * 2);
    ctx.fillStyle = color; //fill with a color
    ctx.fill(); //circles use fill

}

// function drawLine(x,y,line to(angle) ,line height)
function drawLine(x1,y1,x2,y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.stroke(); // lines use stroke

}

drawCircle(100,200)
drawLine(600, 10, 10, 500)