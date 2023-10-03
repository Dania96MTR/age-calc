const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

let dayofbirth = document.querySelector(".day");
let monthofbirth = document.querySelector(".month");
let yearofbirth = document.querySelector(".year");

const paragraph = document.querySelectorAll("p");
const req = document.querySelectorAll(".message");

const errormessage1 = document.querySelector(".message1");
const errormessage2 = document.querySelector(".message2");
const errormessage3 = document.querySelector(".message3");

let date = new Date();
let thisday = date.getDate();
let thismonth = 1 + date.getMonth();
let thisyear = date.getFullYear();


result.innerHTML += `<h1 class="years">--<i id="italy">years</i></h1>
<h1 class="months">--<i id="italy">months</i></h1>
<h1 class="days">--<i id="italy">days</i></h1>`

function setElemnt() {
    dayofbirth.style.borderColor = 'hsl(0, 100%, 67%)';
    monthofbirth.style.borderColor = 'hsl(0, 100%, 67%)';
    yearofbirth.style.borderColor = 'hsl(0, 100%, 67%)';

    result.innerHTML = `<h1 class="years">--<i id="italy">years</i></h1>
                  <h1 class="months">--<i id="italy">months</i></h1>
                  <h1 class="days">--<i id="italy">days</i></h1>`

}

function paragraphColor() {
    paragraph.forEach(e => {
        e.style.color = 'hsl(0, 100%, 67%)'
    })
}


btn.addEventListener("click", () => {
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (parseInt(dayofbirth.value) > thisday) {
        thisday = thisday + month[thismonth - 1];
        thismonth = thismonth - 1;
    }

    if (parseInt(monthofbirth.value) > thismonth) {
        thismonth = thismonth + 12;
        thisyear = thisyear - 1;
    }

    let calcdDay = thisday - parseInt(dayofbirth.value);
    let calcMonth = thismonth - parseInt(monthofbirth.value);
    let calcYear = thisyear - parseInt(yearofbirth.value);

    result.innerHTML = `<h1 class="years">${calcYear}<i id="italy">years</i></h1>
    <h1 class="months">${calcMonth}<i id="italy">months</i></h1>
    <h1 class="days">${calcdDay}<i id="italy">days</i></h1>`

    if (dayofbirth.value == "") {
        paragraphColor()
        errormessage1.textContent = "This field is required"
        setElemnt()

    }
    if (monthofbirth.value == "") {
        paragraphColor()
        errormessage2.textContent = "This field is required"
        setElemnt()

    }
    if (yearofbirth.value == "") {
        paragraphColor()
        errormessage3.textContent = "This field is required"
        setElemnt()

    }

    for (let i = 0; i < month.length; i++) {
        if (parseInt(dayofbirth.value) > month[i]) {
            paragraphColor()
            req.forEach(ele => {
                ele.innerHTML = ""
                ele.style.color = 'hsl(0, 100%, 67%)'
            })

            errormessage1.innerHTML = "Must be a valid date"
            errormessage2.innerHTML = ""
            errormessage3.innerHTML = ""
            setElemnt()
        }


    }
})
dayofbirth.addEventListener("keyup", function () {
    if (parseInt(this.value) > 31 || parseInt(this.value) <= 0) {
        paragraphColor()
        errormessage1.textContent = "Must be a valid day"
        setElemnt()
    }

})
monthofbirth.addEventListener("keyup", function () {
    if (parseInt(this.value) > 12 || parseInt(this.value) <= 0) {
        paragraphColor()
        errormessage2.textContent = "Must be a valid month"
        setElemnt()
    }

})
yearofbirth.addEventListener("keyup", function () {
    if (parseInt(this.value) > thisyear || parseInt(this.value) <= 0) {
        paragraphColor()
        errormessage3.textContent = "Must be in the past"
        setElemnt()
    }

})


