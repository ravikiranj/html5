var WIDTH;
var HEIGHT;
var g;
var rightDown = false;
var leftDown = false;
var carray = new Array();


// Main Function To Start
function start()
{
    g = $('#canvas')[0].getContext("2d");
    WIDTH = $("#canvas").width();
    HEIGHT = $("#canvas").height();
    var i = 0;
    for(i = 0; i < 4; i++){
        carray[i] = new Heart(0, 0, 100 - i * 25);
    }
    return setInterval("draw()", 10);
}

// Heart Class 
function Heart(x,y,r)
{
    this.x = x;
    this.y = y;
    this.r = r;
    this.dx = Math.ceil(Math.random()*7);
    this.dy = Math.ceil(Math.random()*7);
    
    this.draw = function()
    {
        var x0 = this.x + 0.5 * this.r, y0 = this.y + 0.3 * this.r;
        var x1 = this.x + 0.1 * this.r, y1 = this.y + 0.0 * this.r;
        var x2 = this.x + 0.0 * this.r, y2 = this.y + 0.6 * this.r;
        var x3 = this.x + 0.5 * this.r, y3 = this.y + 0.9 * this.r;
        var x4 = this.x + 1.0 * this.r, y4 = this.y + 0.6 * this.r;
        var x5 = this.x + 0.9 * this.r, y5 = this.y + 0.0 * this.r;
 
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
    
    this.getX = function()
    {
        return x;
    }
    
    this.getY = function()
    {
        return this.y;
    }
    
    this.move = function()
    {   
        this.x += this.dx;
        this.y += this.dy;
    
        if(this.x > WIDTH || this.x < 0)
        {
            this.dx = this.dx*-1;
        }
        
        if(this.y > HEIGHT || this.y < 0)
        {
            this.dy = this.dy*-1;
        }
    }
}


// Draw Function
function draw()
{
    clear();
    var i;
    for (i=0; i<carray.length; i++)
    {
        carray[i].move();
        carray[i].draw();
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
