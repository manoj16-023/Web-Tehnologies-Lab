/*exported change */
/*eslint-env browser*/
/*eslint no-console:0 */

function validate() {
    var first_name = document.forms["student"]["fname"].value;
    var last_name = document.forms["student"]["lname"].value;
    var email_id = document.forms["student"]["email"].value;
    var number_mobile = document.forms["student"]["mobile"].value;
    var city_name = document.forms["student"]["city"].value;
    var pin_code = document.forms["student"]["pin"].value;
    var state_name = document.forms["student"]["state"].value;
    /*var date = document.forms["student"]["date_of_birth"].value;*/
    var gender = document.forms["student"]["gender"].value;
    /*var address = document.forms["student"]["address"].value;
    var hobbies = document.forms["student"]["hobbies"].value;
    var qualification = document.forms["student"]["qualification"].value;*/
   var course = document.forms["student"]["course"].value;
    var letters = /^[a-zA-z]+$/;
    var number = /^[0-9]+$/;
    var some = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!first_name.match(letters) || first_name.length > 30) {
        alert("Enter name only in letters and length lessthan 30");
        return false;
    }
    if (!last_name.match(letters) || last_name.length > 30) {
        alert("enter last name in correct way");
        return false;
    }
    if (!email_id.match(some)) {
        alert("enter email in correct way");
        return false;
    }
    if (!number_mobile.match(number) || number_mobile.length != 10) {
        alert("Enter  only  numbers and length less than 10");
        return false;
    }
    if (!city_name.match(letters) || city_name.length > 30) {
        alert("Enter name only in letters and length less than 30");
        return false;
    }
    if (!state_name.match(letters) || state_name.length > 30) {
        alert("Enter name only in letters and length less than 30");
        return false;
    }
    if (!pin_code.match(number) || pin_code.length != 6) {
        alert("Enter pincode only and length less than 6");
        return false;
    }
    if (!(course.match("BCA") || course.match("BCOM") || course.match("BSc") || course.match("BA"))) {
        alert("Select Course");
        return false;
    }
    if (!(gender.match("male") || gender.match("female") || gender.match("transgender"))) {
        alert("select gender");
        return false;
    }

    var feed_back = prompt("Please give feed back", "");

}
