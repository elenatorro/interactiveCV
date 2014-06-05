function Element(name,x,y) {
    this.name = name;
    this.aside = document.getElementById(name);
    this.aside.style.left = x + 'px';
    this.aside.style.top = y + 'px';
    this.aside.setAttribute("onmousedown","moveDown(this)");
    this.aside.setAttribute("onmouseup","moveUp(this)");
    $(function() {
        $( "#"+name+"" ).draggable();
  });


}
function moveDown(element){
                var ang = getCurrentRotation(element)+2;

                element.style.webkitTransform = 'rotate('+ang+'deg)'; 
                element.style.mozTransform    = 'rotate('+ang+'deg)'; 
                element.style.msTransform     = 'rotate('+ang+'deg)'; 
                element.style.oTransform      = 'rotate('+ang+'deg)'; 
                element.style.transform       = 'rotate('+ang+'deg)';
}

function moveUp(element) {
                var ang = getCurrentRotation(element)-2;

                element.style.webkitTransform = 'rotate('+ang+'deg)'; 
                element.style.mozTransform    = 'rotate('+ang+'deg)'; 
                element.style.msTransform     = 'rotate('+ang+'deg)'; 
                element.style.oTransform      = 'rotate('+ang+'deg)'; 
                element.style.transform       = 'rotate('+ang+'deg)'; 

}


/*code from http://css-tricks.com/get-value-of-css-rotation-through-javascript/*/
function getCurrentRotation(element) {
  var el = element;
  var st = window.getComputedStyle(el, null);
  var tr = st.getPropertyValue("-webkit-transform") ||
       st.getPropertyValue("-moz-transform") ||
       st.getPropertyValue("-ms-transform") ||
       st.getPropertyValue("-o-transform") ||
       st.getPropertyValue("transform") ||
       "fail...";

  if( tr !== "none") {
    console.log('Matrix: ' + tr);

    var values = tr.split('(')[1];
      values = values.split(')')[0];
      values = values.split(',');
    var a = values[0];
    var b = values[1];
    var c = values[2];
    var d = values[3];

    var scale = Math.sqrt(a*a + b*b);

    var radians = Math.atan2(b, a);
        if ( radians < 0 ) {
            radians += (2 * Math.PI);
        } 
        var angle = Math.round( radians * (180/Math.PI));
        } else {
            var angle = 0;
        }

return angle;
}

var wall = document.getElementById("cont");
var profile = new Element('dragme1',100,50);
var paper1 = new Element('paper1',100,230);
var paper2 = new Element('paper2',300,30);
var spanish = new Element('spanish',wall.offsetWidth-150,50);
var english = new Element('english',wall.offsetWidth-180,140);
var french = new Element('french',wall.offsetWidth-140,220);
var german = new Element('german',wall.offsetWidth-150,280);
var paper3 = new Element('paper3',wall.offsetWidth-250, wall.offsetHeight-360);
var web = new Element('web-venn', wall.offsetWidth-600,10);
var diploma = new Element('diploma', wall.offsetWidth-760,wall.offsetHeight-400);