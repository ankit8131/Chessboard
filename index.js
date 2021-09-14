function changecolor(id){
  var whitecolors=document.getElementsByClassName("light");
  for(var i=0;i<whitecolors.length;i++){
    whitecolors[i].style.backgroundColor="#E6EDE4";
  }
  var blackcolors=document.getElementsByClassName("dark");
  for(var i=0;i<blackcolors.length;i++){
    blackcolors[i].style.backgroundColor="black";
  }
  var p1=id%8;
  if(p1===0){
    p1=8;
  }
  p1=8-eval(p1)+eval(1);
  var p2=parseInt(id/8);
  if(id%8!==0){
    p2++;
  }
  p2=8-eval(p2)+eval(1);
  var mini=Math.min(p1,p2);
  var count=id;
  var i=1;
  while(i<=mini){
    document.getElementById(count).style.backgroundColor="red";
    i++;
    count=eval(count)+9;
  }
  var p1=id%8;
  if(p1===0){
    p1=8;
  }
  var p2=parseInt(id/8);
  if(id%8!==0){
    p2++;
  }
  var mini=Math.min(p1,p2);
  var count=id;
  var i=1;
  while(i<=mini){
    document.getElementById(count).style.backgroundColor="red";
    i++;
    count=eval(count)-9;
  }
  var p1=id%8;
  if(p1===0){
    p1=8;
  }
  var p2=parseInt(id/8);
  if(id%8!==0){
    p2++;
  }
  p2=8-eval(p2)+eval(1);
  var mini=Math.min(p1,p2);
  var count=id;
  var i=1;
  while(i<=mini){
    document.getElementById(count).style.backgroundColor="red";
    i++;
    count=eval(count)+7;
  }
  var p1=id%8;
  if(p1===0){
    p1=8;
  }
  p1=8-eval(p1)+eval(1);
  var p2=parseInt(id/8);
  if(id%8!==0){
    p2++;
  }
  var mini=Math.min(p1,p2);
  var count=id;
  var i=1;
  while(i<=mini){
    document.getElementById(count).style.backgroundColor="red";
    i++;
    count=eval(count)-7;
  }
}