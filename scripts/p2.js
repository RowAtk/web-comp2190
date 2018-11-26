function validateForm1() {
    let msg = true;
    let form = document.getElementById("form1");

    console.log("FORMS: " + new FormData(form).values());
    if(isFilled(new FormData(form))){

        // alert("HELLO!!!");
        console.log(form["code"]);
        msg = msg && validateCode(form["code"]);
        console.log(msg);
        msg = msg && validateDiscipline(form["discipline"]);
        console.log(msg);
        msg = msg && validateCredits(form["credits"]);
        console.log(msg);
        msg = msg && validateSemester(form["semester"]);
        console.log(msg);
        msg = msg && validateDropdown(form["student"]);
        console.log(msg);
        return msg
    }
    alert("Please fill all form fields");
    return false;
}


function listMsg(msg) {
    for(let x = 0; x < msg.length; x++){
        msg[x] = x+1 + ". " + msg[x];
    }
    return msg
}

function isEmpty(str){
    return str === "";
}

function isNum(str){
    return /^[0-9]$/.test(str);
}

function isNumRange(str, start, stop){
    let nums = "0123456789";
    let status = true;
    for(let x = 0; x < str.length; x++){
        //console.log(str[x]);
        console.log(nums.slice(start, stop));
        console.log(nums.slice(start, stop).indexOf(str[x]));
        if(! (nums.slice(start, stop).indexOf(str[x]) > -1)){
            console.log("PASS");
            status = false;
        }
    }
    return status
}


function isNumber(str) {
    let status = true;
    for(let x = 0; x < str.length; x++){
        if(! isNum(str[x])){
            status = false;
        }
    }
    return status;
}


function isChar(str){
    return /^[a-zA-Z]+$/.test(str);
}

function isStr(str){
    let status = true;
    for(let x = 0; x < str.length; x++){
        if(!isChar(str[x])){
            status = false;
        }
    }
    return status;
}


function isFilled(formData) {
    let values = formData.values();
    console.log(values);
    for(let value of values){
        console.log(value);
        if(isEmpty(value)){
            return false;
        }
    }
    return true;

}


function validateCode(element) {
    let err = "The course code must consist of 4 Numbers only";
    let code = element.value.trim();
    console.log("FAILED");

    if (code.length === 4) {
        for (let x = 0; x < 4; x++) {
            if (isNumber(code)) {
                return true;
            }
        }
    }
    element.classList.toggle("error");
    alert(err);
    return false;
}


function validateDiscipline(element) {
    let err = "The course discipline must consist of 4 letters only";
    let discipline = element.value.trim();
    console.log("FAILED");

    if (discipline.length === 4) {
        if(isStr(discipline)){
            return true;
        }
    }

    element.classList.toggle("error");
    alert(err);
    return false;
}


function validateSemester(element) {
    let err = "The semester must be 1, 2 or 3";
    let semester = element.value.trim();
    console.log(semester);

    if (isNumRange(semester, 1, 4) && semester.length === 1) {
        console.log("TRUE");
        return true;
    }
    console.log("FAILED");
    element.classList.toggle("error");
    alert(err);
    return false;
}


function validateCredits(element) {
    let err = "The credit level must between 1 - 8";
    let credits = element.value.trim();
    if (credits.length === 1) {
        if (isNumRange(credits, 1, 9)) {
            return true;
        }
    }
    element.classList.toggle("error");
    alert(err);
    return false;
}


function validateTitle(element){
    let title = element.value.trim();
    if(isEmpty(title)){
        title.classList.toggle("error");
        return false;
    }else{
        return true;
    }
}


function validateLevel(element) {
    let level = element.value.trim();
    if(isEmpty(level)){
        level.classList.toggle("error");
        return false;
    }else{
        return true;
    }
}


function validateDropdown(element) {
    let err = "A student must be selected";
    console.log(typeof element.value);
    let student = element.value.trim();

    console.log(student);

    if(student.length === 1 && (! isNumRange(student,0,1))){
        return true
    }
    alert(err);
    element.classList.toggle("error");
    return false;
}

