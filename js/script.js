function Paper1(x,y) {
    this.canvas = document.getElementById("canvas");
    this.canvas.setAttribute("width",350+x);
    this.canvas.setAttribute("height",530+y);
    this.canvas.setAttribute("x",x);
    this.canvas.setAttribute("y",y);
    this.canvas.addEventListener('dragstart',drag_start,false);

    var context = this.canvas.getContext("2d");
    context.clearRect(50,50,300,480);

    context.beginPath();
    context.rect(x+50,y+50,x+300,y+480);
    context.fillStyle = "#efefe5";
    context.strokeStyle = "transparent";
    context.lineWidth = 0;
    context.closePath();

    //holes
    for (var i = 1; i < 12; i++){
        context.arc(x+70, y+50+(i*40), 10, 0, 2*Math.PI, true);
        context.lineWidth = 0;
        context.closePath();
    }

    context.fill();
    context.stroke();

    //lines
    context.beginPath();
    for (var i = 1; i < 11; i++){
        context.moveTo(x+50,y+65+(i*40));
        context.lineTo(x+350,y+65+(i*40));
        context.moveTo(x+50,y+70+(i*40));
        context.lineTo(x+350,y+70+(i*40));
    }

    context.lineWidth = 2;
    context.strokeStyle = "#dc5656";
    context.closePath();
    context.stroke();

    context.beginPath();
    context.arc(x+200, y+70, 15, 0, 2*Math.PI);
    context.lineWidth = 0;
    context.fillStyle = "red";
    context.strokeStyle = "transparent";
    context.closePath();
    context.fill();
}

var paper1 = new Paper1(80,80);