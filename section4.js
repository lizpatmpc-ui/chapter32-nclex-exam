['section4a.js','section4b.js'].forEach(function(f){
  var x=new XMLHttpRequest();
  x.open('GET',f,false);
  x.send(null);
  if(x.status>=200&&x.status<300){eval(x.responseText);}else{throw new Error('Unable to load '+f);}
});
