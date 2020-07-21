var i=0;;
var q = new Date();
var min = q.getMinutes();
var comments=['Itne Jaldi kon Aata hai bhai!:)','Cool, You are on Time!!!',' You Must have not missed much','You`re late bruh!!!','You`re Super late Dude!!!..','“Ah, Nothing is too late, till the tired heart shall cease to palpitate.”-Henry Wadsworth','Kal hi Aa Jata, Waise bhi Ab Class Khatam hi ho raha hai:)'];

if(min>=55 && min<60){i=0}
else if(min>=1 && min<5){i=1}
else if(min>=5 && min<10){i=2}
else if(min>=10 && min<15){i=3}
else if(min>=15 && min<20){i=4}
else if(min>=20 && min<25){i=5}
else{i=6}
document.querySelector("h3").innerText = comments[i];

function main(){
var MP='https://meet.google.com/lookup/bjp4gokmbm';
var AA='https://meet.google.com/lookup/hc4s2gyauq';
var DBMS='https://meet.google.com/lookup/gbfqg7t7l2';
var WD='https://meet.google.com/lookup/gesdqszho4';
var BCS='https://meet.google.com/kvh-xjao-zyf?hs=122&authuser=0';
var TCS='JKKJK';
var CN='https://meet.google.com/lookup/eagi35eb3k';

let full = [
    ['Monday', 'Tuesday','Wednesday','Thursday','Friday'],
    [MP,AA,TCS,MP,DBMS],
    [TCS,MP,DBMS,BCS,AA],
    [DBMS,CN,CN,AA,CN],
    [WD,0,0,0]
];

var d = new Date();

var time=d.toLocaleString('en-US', { hour: 'numeric', hour12: true });

var current;
if(time===10 AM){
    current=1
}

else if(time===11 AM){
current=2;
}
else if(time===2 PM){
current=3;
}
else{
current=4;
}

window.open(full[current][d.getDay()]);

}
