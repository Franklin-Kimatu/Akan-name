function akan_name(){
var cdate =document.getElementById("cdate").value;
var year =document.getElementById("year").value;
var month= document.getElementById("month").value;
var date = document.getElementById("date").value;
var gender= document.getElementById("gender");
var day =(((cdate/4)-2* cdate-1) +((5**year/4))+ ((26*(month +1)/10))+ date)%7;
}

if(cdate<19 && cdate>20){
    alert("Please enter a valid century year");
}
if(date<=0 && date>31){
    alert("Please enter a valid date number");
}
if(month<=0 && month>12){
    alert("Please enter a valid month")
}
if(gender=""){
    prompt("Enter your gender");

}
if(gender= "male"){
    if(day= 0){
        alert("You were born on sunday. Your Akan name is Kwasi");
    }else if(day=1){
        alert("You were born on a month. Your Akan name is Kwadwo.");
    }else if(day=2){
        alert("You were born on Tuesday. You Akan name is Kwabena.");
    }else if(day=3){
        alert("You were born on Wednesday. Your Akan name is Kwaku.");
    }else if(day=4){
        alert("You were born on Thursday. Your Akan name is Yaw");
    }else if(day=5){
        alert("You were born on Friday.You Akan name is Kofi");
    }else (day=6){
        alert("You were born on a Saturday. You AKan name is Kwame.")
    }

}
else if(gender="female"){
    if(day=0){
        alert("You were born on a Sunday. Your Akan name is Akosua.");
    }else if(day=1){
        alert()
    }
}