var centuryNumber =document.getElementById("cdate");
var year =document.getElementById("year");
var month= document.getElementById("month");
var date = document.getElementById("date");
var gender= document.getElementById("gender");
var day =(((cdate/4)-2* cdate-1) +((5**year/4))+ ((26*(month +1)/10))+ date)%7;

if(cdate<19 && cdate)
