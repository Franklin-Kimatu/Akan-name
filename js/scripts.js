var cdate, year, month, date, day, rads, gender;
function akan(){
    cdate =document.getElementById("cdate").value;
    year =document.getElementById("year").value;
    month=document.getElementById("month").value;
    date=document.getElementById("date").value;
    day =(((cdate/4) -2 * cdate -1) + ((5 * year/4)) + ((26 *(month + 1)/10)) + date) % 7;
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
        gender == "male";
    } else if(rads[1].checked ==true){
        gender =="female";
    } else {
        console.log("pass");
    }
} 

function givenames(){

    genders();
    if(gender =="male"){
        if(day==0){
            alert("You were born on Sunday. You akan name is Kwasi.");
        } else if(day==1){
            alert("You were born on Monday. Your akan name is Kwadwo.");
        } else if(day ==2){
            alert("You were born a Tuesday. Your akan name is Kwabena.");
        } else if(day ==3){
            alert("You were born on Wednesday. You akan name is Kwaku.");
        } else if( day==4){
            alert("You were born on Thursday. Your akan name is Yaw");
        } else if(day==5){
            alert("You were born on Friday. You akan name is Kofi");
        } else if(day==6){
            alert("You were born on Saturday. You akan name is Kwame.");
        } else{
            console.log("pass");
        }
    } else if(gender =="female"){
        if(day==0){
            alert("You were born on a Sunday. You akan name is Akosua.");
        } else if(day==1){
            alert("You were born on a Monday. Your akan name is Adwoa.");
        } else if(day ==2){
            alert("You were born on a Tuesday. You akan name is Abena.");
        } else if(day ==3){
            alert("You were born on a Wednesday. Your akan name is Akua.");
        } else if(day ==4){
            alert("You were born on a Thursday. You akan name is Yaa");
        } else if(day ==5){
            alert("You were born on a Friday. Your akan name is Afua");
        } else if(day ==6){
            alert("You were born on a Saturday. Your akan name is Ama.");
        } else {
            console.log("pass")
        }
    }else{
        console.log("pass");
    }
}
