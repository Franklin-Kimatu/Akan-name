
var weekDays = ["Sunday.", "Monday.", "Tuesday.", "Wednesday.", "Thursday.", "Friday.", "Saturday."];
var males = ["Kwasi.", "Kwadwo.", "Kwabena.", "Kwaku.", "Yaw.", "Kofi.", "Kwame."]
var females = ["Akosua.", "Adwoa.", "Abena.", "Akua.", "Yaa.", "Afua.", "Ama."];

var DD, MM, CC, d, year, YY;
var gender = document.getElementsByName("genders");
function validate() {
    var gender = document.getElementsByName("genders");
    if (document.form1.year.value == "" || document.form1.year.value.length != 4 || isNaN(document.form1.year.value)) {
        document.getElementById("yearerror").innerHTML = ("Please enter a valid year of birth");
        return false;
    }
    else if (document.form1.month.value == "" || document.form1.month.value > 12 || document.form1.month.value <= 0 || isNaN(document.form1.year.value)) {
        document.getElementById("montherror").innerHTML = (" Please enter a valid month.");
        return false;

    }
    else if (document.form1.date.value == "" || document.form1.date.value > 31 || document.form1.date.value <= 0 || isNaN(document.form1.year.value)) {
        document.getElementById("dateerror").innerHTML = ("Enter a valid date of birth!");
        return false;
    }
    else if (gender[0].checked == false && gender[1].checked == false) {
        document.getElementById("gendererror").innerHTML = ("Please select your gender.");
        return false;
    }
}
function calculate() {
    year = document.getElementById("year").value;
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("date").value);
    CC = parseInt(year.substring(0, 2));
    YY = parseInt(year.substring(2, 4));
    d = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
    
    return (Math.floor(d));
}
function checkGender() {
    calculate();
    if (gender[0].checked == true) {
        var male = gender;
    }
    else if (gender[1].checked == true) {
        var female = gender;
    }
    else {
        console.log("pass");
    }
    switch (gender) {
        case male:
            if (calculate() == 1) {
                alert("You were born on " + weekDays[0] + ". Your akan name is " + males[0] + "!");
            }
            else if (calculate() == 2) {
                alert("You were born on " +weekDays[1] + ". Your akan name is " + males[1] + "!");
            }
            else if (calculate() == 3) {
                alert("You were born on " + weekDays[2] + ". Your akan name is " + males[2] + "!");
            }
            else if (calculate() == 4) {
                alert("You were born on " + weekDays[3] + ". Your akan name is " + males[3] + "!");
            }
            else if (calculate() == 5) {
                alert("You were born on " + weekDays[4] + ". Your akan name is " + males[4] + "!");
            }
            else if (calculate() == 6) {
                alert("You were born on " + weekDays[5] + ". Your akan name is " + males[5] + "!");
            }
            else if (calculate() == -0) {
                alert("You were born on " + weekDays[6] + ". Your akan name is " + males[6] + "!");
            }
            break;
        case female:
            if (calculate() == 1) {
                alert("You were born on " + weekDays[0] + ". Your akan name is  " + females[0] + "!");
            }
            else if (calculate() == 2) {
                alert("You were born on " + weekDays[1] + ". Your akan name is " + females[1] + "!");
            }
            else if (calculate() == 3) {
                alert("You were born on " + weekDays[2] + ". Your akan name is " + females[2] + "!");
            }
            else if (calculate() == 4) {
                alert("You were born on " + weekDays[3] + ". Your akan name is " + females[3] + "!");
            }
            else if (calculate() == 5) {
                alert("You were born on " + weekDays[4] + ". Your akan name is " + females[4] + "!");
            }
            else if (calculate() == 6) {
                alert("You were born on " + weekDays[5] + ". Your akan name is " + females[5] + "!");
            } else if (calculate() == -0) {
                alert("You were born on " + weekDays[6] + ". Your akan name is " + females[6] + "!");
            }
            break
        default:

    }
}