var x = document.querySelector("canvas");
x.width = window.innerWidth;
x.height = window.innerHeight;
var c = x.getContext("2d");
//RECTANGLE DRAWING
/*c.fillStyle="blue";
c.fillRect(500,500,40,40);
//LIne drawing
c.beginPath();
c.moveTo(550,550);
c.lineTo(550,400);
c.strokeStyle="green";
c.stroke();
//ARC Drawing
c.beginPath();
c.strokeStyle="red";
c.arc(600,650,40,0,Math.PI*2,false);
c.stroke();
//Draw REct
c.beginPath();
c.strokeStyle="blue";
c.strokeRect(700,200,60,60);*/
var mouse = {
    p : undefined,
    q : undefined
};
window.addEventListener('mousemove',function(Event){
    mouse.p=Event.x;
    mouse.q=Event.y;
})
window.addEventListener('resize',function(){
    x.width = window.innerWidth;
    x.height = window.innerHeight;
    init();
});
var colorarray=['#ccc','#ffaa33','#fbac34','#4412aa','#faaaa0','#fc4321'];
function circle(a,b,r,da,db,maxr){
    this.a=a;
    this.b=b;
    this.r=r;
    this.da=da;
    this.db=db;
    this.maxr=maxr;
    this.minr=10;
    this.color=colorarray[Math.ceil(Math.random()*colorarray.length)];
    this.draw=function(){
                        c.beginPath();
                        c.arc(this.a,this.b,this.r,0,Math.PI*2,false);
                        c.fillStyle=this.color;
                        c.fill();
                        };
    this.animate=function(){
                             if(this.a+this.r>innerWidth || this.a-this.r<0)
                                 {
                                     this.da=-this.da;
                                 }
                             if(this.b+this.r>innerHeight || this.b-this.r<0)
                                 {
                                     this.db=-this.db;
                                 }
                             this.a+=this.da;
                             this.b+=this.db;
                            if(Math.abs(this.a-mouse.p)<40 && Math.abs(this.b-mouse.q)<40)
                                {
                                    if(this.r<this.maxr){
                                                           this.r+=1;
                                                          }
                                }
                              else
                                  {
                                      if(this.r>this.minr)
                                          {
                                              this.r-=1;
                                          }
                                  }
                              this.draw();
                            };
}
var circlearray=[];
function init(){
for(i=0;i<200;i++)
    {
        var a=Math.random()*innerWidth;
        var b=Math.random()*innerHeight;
        var r=Math.random()*40;
        var maxr=90;
        var da=(Math.random()-0.5)*5;
        var db=(Math.random()-0.5)*5;
        circlearray[i]=new circle(a,b,r,da,db,maxr);
    }
    move();
}
function move(){
    requestAnimationFrame(move);
    c.clearRect(0,0,innerWidth,innerHeight);
    for(i=0;i<circlearray.length;i++)
        {
            circlearray[i].animate();
        }
                }

init();