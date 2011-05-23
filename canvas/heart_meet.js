var WIDTH;
var HEIGHT;
var g;
var rightDown = false;
var leftDown = false;
var carray = new Array();
var counter = 0;


// Main Function To Start
function start()
{
    g = $('#canvas')[0].getContext("2d");
    WIDTH = $("#canvas").width();
    HEIGHT = $("#canvas").height();
    carray[0] = new Heart(0, 0, 50);
    carray[1] = new Heart(200, 200, 300);
    var self = this;
    return setInterval(function(self){draw(self);}, 50);
}

// Heart Class 
function Heart(x,y,r)
{
    this.draw = function(x, y, r)
    {
        if(typeof x == "undefined"){
            x = this.x;
        }
        if(typeof y == "undefined"){
            y = this.y;
        }
        if(typeof r == "undefined"){
            r = this.r;
        }
        var x0 = x + 0.5 * r, y0 = y + 0.3 * r;
        var x1 = x + 0.1 * r, y1 = y + 0.0 * r;
        var x2 = x + 0.0 * r, y2 = y + 0.6 * r;
        var x3 = x + 0.5 * r, y3 = y + 0.9 * r;
        var x4 = x + 1.0 * r, y4 = y + 0.6 * r;
        var x5 = x + 0.9 * r, y5 = y + 0.0 * r;
 
        g.save();
        g.beginPath();
        g.moveTo(x0,y0);
        g.bezierCurveTo(x1,y1,x2,y2,x3,y3);
        g.bezierCurveTo(x4,y4,x5,y5,x0,y0);
 
        g.stroke();
        g.restore();
        g.fillStyle = "#F778A1";
        g.fill();
    }
    
    this.moveAndDraw = function(counter, i)
    {   
        var diff = 1;
        if(i % 2 != 0){
            diff *= -1;
        }
        var inc = (counter % 300) * diff;
        this.draw(x,y,r+inc);
    }
}


// Draw Function
function draw()
{
    var j = 0;
    self.counter++;
    for(j = 0; j < carray.length ; j++){
        carray[j].moveAndDraw(self.counter, j);
    }
}

function clear() 
{
    g.fillStyle = "#fff";
    g.fillRect(0, 0, WIDTH, HEIGHT);
}

// Use JQuery to wait for document load
$(document).ready(function()
{
    start();
});
