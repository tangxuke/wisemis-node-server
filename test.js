var s='a{{new Date()}}cd';
var a=s.indexOf('{{');
var b=s.indexOf('}}',a);

var e=s.substr(a+2,b-a-2);
var s1=s.substr(0,a);

var s2=s.substr(b+2);

var o=s1+eval(e)+s2;
console.log(o);