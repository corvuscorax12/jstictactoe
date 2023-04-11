//Students and staff dont judge me on this code 
//  A.)this was made when i started coding 
//  B.) I dont know diddly squat about js
// Based on Knots And Crosses by Andrew Dawson & Thomas Galliano
let btnUpperLeft;
let btnUpperMiddle;
let btnUpperRight ;
let btnCenterLeft ;
let btnCeterMiddle;
let btnCenterRight;
let btnLowerLeft;
let btnLowerMiddle;
let btnLowerRight ;

class playerShapes
{
    static xShape(x,y)
    {
        var a = 0;
        var b = 50;
        var spacing = 25;
        var pt1y = a + y * spacing -spacing;
        var pt1x = a + x * spacing - spacing;
        var pt2x = b + x * spacing - spacing;
        var pt2y = b + y * spacing - spacing;
        var pt3y = b + y * spacing -spacing;
        var pt3x = a + x * spacing - spacing;
        var pt4x = b + x * spacing - spacing;
        var pt4y = a + y * spacing - spacing;
        strokeWeight(0);

        rect((x*25)-24,(y*25)-24,49,49);
        strokeWeight(5);
        beginShape(LINES);
        vertex(pt1x,pt1y);
        vertex(pt2x,pt2y);
        vertex(pt3x,pt3y);
        vertex(pt4x,pt4y);
        endShape();
        
    }
    static oShape(x,y)
    {
        strokeWeight(0);
        rect((x*25)-24,(y*25)-24,49,49);

        var b = 47;
        strokeWeight(3);
        circle(25*x,25*y,b-3);

    }
}

function Print(character,x,y )
{
    switch (character) {
        case value:
            
            break;
    
        default:
            break;
    }
}
let btnArray = [];
let shapeOption;
let shapeSwitch;
let x = 150;
    let y = 150;
function setup() {
    
    
    var canvas = createCanvas(x,y);
    canvas.parent('gameField');
    strokeWeight(5);
 // line(0,50,x,50);
 // line(0,100,x,100);
 // line(50,0,50,y);
 // line(100,0,100,y);
    shapeOption = createRadio();
    shapeOption.option('1','X');
    shapeOption.option('2','O');
    createLines();
    

}


function createLines()
{

    strokeWeight(5);
    line(0,50,x,50);
    line(0,100,x,100);
    line(50,0,50,y);
    line(100,0,100,y);
}
function changeText(idx,idy)
{
    if (shapeSwitch =='1') {
        
        playerShapes.xShape(idx,idy);

        createLines();
        shapeOption.option('1','X').checked = false;
        shapeOption.option('2','O').checked = true;

        
    

    }
    else if(shapeSwitch =='2')
    {

        playerShapes.oShape(idx,idy);
        createLines();
        shapeOption.option('1','X').checked = true;
        shapeOption.option('2','O').checked = false;

    }
    console.log(idx);

    
}

function draw()
{
    shapeSwitch=shapeOption.value();
    
}

