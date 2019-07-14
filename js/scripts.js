var cdate, year, month, date, day, rads, gender;
function akan(){
    cdate=document.getElementById("cdate").value;
    year=document.getElementById("year").value;
    month=document.getElementById("month").value;
    date=document.getElementById("date").value;
    day=(((cdate/4) -2 * cdate -1) + ((5 * year/4)) + ((26 *(month + 1)/10)) + date) % 7;
    return (Math.round(day));
    }
 
function validate(){

    akan();
    if(cdate >20){
        alert("Please enter a valid century date.");
    } else {
        console.log("Date is valid");
    }
    if(year<0 || year >100){
        alert("Please enter a valid year.")
    } else {
        console.log("Year is valid");
    }
    if(month<1 || month> 12){
        alert("Please enter a valid month.");
    } else {
        console.log("Date is valid");
    }
    if(date<1 || date> 31){
        alert("Please enter a valid date.");
    } else {
        console.log("Date is valid.")
    }
}

function genders(){
    validate();
    rads= document.getElementsByName("rads");
    if(rads[0].checked==true){
        gender =="male";
    } else if(rads[1].checked==true){
        gender =="female";
    } else {
        console.log("pass");
    }
} 

function givenames(){
    var weekDays=["Sunday.","Monday.","Tuesday.","Wednesday.","Thursday.","Friday.","Saturday."];
    var male=["Kwasi.","Kwadwo.","Kwabena.","Kwaku.","Yaw.","Kofi.","Kwame."];
    var female=["Akosua.","Adwoa.","Abena.","Akua.","Yaa.","Afua.","Ama."];

    genders();
    if(gender =="male"){
        if(day==0){
            alert("You were born on "+weekDays[0] + "You akan name is "+ male[0]);
        } else if(day==1){
            alert("You were born on "+weekDays[1] + "Your akan name is " + male[1]);
        } else if(day ==2){
            alert("You were born a "+weekDays[2] + "Your akan name is " +male[2]);
        } else if(day ==3){
            alert("You were born on "+ weekDays[3] + "You akan name is "+male[3]);
        } else if( day==4){
            alert("You were born on "+weekDays[4] + "Your akan name is "+male[4]);
        } else if(day==5){
            alert("You were born on "+weekDays[5] + "You akan name is "+male[5]);
        } else if(day==6){
            alert("You were born on "+weekDays[6] +"You akan name is "+male[6]);
        } else{
            console.log("pass");
        }
    } else if(gender =="female"){
        if(day==0){
            alert("You were born on a "+weekDays[0] +"+You akan name is "+female[0]);
        } else if(day==1){
            alert("You were born on a "+weekDays[1] +"Your akan name is "+female[1]);
        } else if(day ==2){
            alert("You were born on a "+weekDays[2] +"You akan name is "+female[2]);
        } else if(day ==3){
            alert("You were born on a "+weekDays[3] +"Your akan name is "+female[3]);
        } else if(day ==4){
            alert("You were born on a "+weekDays[4] +"You akan name is"+female[4]);
        } else if(day ==5){
            alert("You were born on a "+weekDays[5] +"Your akan name is "+female[5]);
        } else if(day ==6){
            alert("You were born on a "+weekDays[6] +"Your akan name is "+female[6]);
        } else {
            console.log("pass")
        }
    }else{
        console.log("pass");
    }
}
