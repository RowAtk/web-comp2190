function validateForm(form) {
    let msg = true;

    alert("HELLO!!!");
    console.log("In FUNC");
    //msg = msg && validateDropdown(form.student.trim());
    msg = msg && validateCode(form.code.trim());
    msg = msg && validateDiscipline(form.discipline.trim());
    msg = msg && validateTitle(form.title.trim());
    msg = msg && validateLevel(form.level.trim());
    msg = msg && validateCredits(form.credits.trim());
    msg = msg && validateSemester(form.semester.trim());

    return msg
    
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

function isNum(str, start, end) {
    let nums = "0123456789";
    return nums.slice(start, end).indexOf(str) > -1;
}

function isChar(str){
    return /^[a-zA-Z]+$/.test(str);
}


function validateCode(code) {
    let err = "The course code must consist of 4 Numbers only";
    //let //element = document.get//elementById("code");
    if (! isEmpty(code)) {
        if (code.length === 4) {
            for (let x = 0; x < 4; x++) {
                if (!isNum(code[x], 0, 10)) {
                    //element.classList.toggle("error");
                    alert(err);
                    return false;
                }
            }
            return true;
        }
    }
    //element.classList.toggle("error");
    alert(err);
    return false;
}


function validateDiscipline(discipline) {
    let err = "The course discipline must consist of 4 letters only";
    //let //element = document.get//elementById("discipline");
    if (! isEmpty(discipline)) {
        if (discipline.length === 4) {
            for (let x = 0; x < 4; x++) {
                if (!isChar(discipline)) {
                    //element.classList.toggle("error");
                    alert(err);
                    return false;
                }
            }
            return true;
        }
    }
    //element.classList.toggle("error");
    alert(err);
    return false;
}


function validateSemester(semester) {
    let err = "The semester must be 1, 2 or 3";
    //let //element = document.get//elementById("semester");
    if (! isEmpty(semester)) {
        if (!isNum(semester, 0, 3)) {
            return true;
        }
    }
    //element.classList.toggle("error");
    alert(err);
    return false;
}


function validateCredits(credits) {
    let err = "The credit level must between 1 - 8";
    //let //element = document.get//elementById("credits");
    if(isEmpty(credits)) {
        if (credits.length === 1) {
            if (!isNum(credits, 0, 9)) {
                alert(err);
                //element.classList.toggle("error");
                return false;
            }
            return true
        }
    }
    //element.classList.toggle("error");
    alert(err);
    return false;
}


function validateTitle(title){
    //let //element = document.get//elementById("credits");
    if(isEmpty(title)){
        title.classList.toggle("error");
        return false;
    }else{
        return true;
    }
}


function validateLevel(level) {
    //let //element = document.get//elementById("level");
    if(isEmpty(level)){
        level.classList.toggle("error");
        return false;
    }else{
        return true;
    }
}