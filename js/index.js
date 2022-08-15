function div1(yes) {
    if (yes) {
        var element = document.getElementById("div1");
        element.classList.add("d-none");

        var element2 = document.getElementById("div2");
        element2.classList.remove("d-none");

        var element = document.getElementById("progressbar");
        element.classList.add("w-25");
        var element2 = document.getElementById("progressbar");
        element2.classList.remove("w-0");
    } else {
        var element = document.getElementById("div1");
        element.classList.add("d-none");

        var element2 = document.getElementById("div0");
        element2.classList.remove("d-none");
    }
}

function div2() {

    if ($("form#contact-form input[name='message']").val() === null || $("form#contact-form input[name='message']").val() === '') {
        return false;
    }
    if ($("form#contact-form input[name='zipCode']").val() === null || $("form#contact-form input[name='zipCode']").val() === '') {
        return false;
    }
    if ($("form#contact-form input[name='city']").val() === null || $("form#contact-form input[name='city']").val() === '') {
        return false;
    }

    var element = document.getElementById("progressbar");
    element.classList.add("w-50");
    var element2 = document.getElementById("progressbar");
    element2.classList.remove("w-25");

    var element = document.getElementById("div2");
    element.classList.add("d-none");

    var element2 = document.getElementById("div3");
    element2.classList.remove("d-none");
}

function div3() {
    var element = document.getElementById("progressbar");
    element.classList.add("w-75");
    var element2 = document.getElementById("progressbar");
    element2.classList.remove("w-50");

    var element = document.getElementById("div3");
    element.classList.add("d-none");

    var element2 = document.getElementById("div4");
    element2.classList.remove("d-none");
}


function div4() {
    if ($("form#contact-form input[name='firstName']").val() === null || $("form#contact-form input[name='firstName']").val() === '') {
        return false;
    }
    if ($("form#contact-form input[name='lastName']").val() === null || $("form#contact-form input[name='lastName']").val() === '') {
        return false;
    }
    if ($("form#contact-form input[name='phone']").val() === null || $("form#contact-form input[name='phone']").val() === '') {
        return false;
    }
    if ($("form#contact-form input[name='email']").val() === null || $("form#contact-form input[name='email']").val() === '') {
        return false;
    }
    var element = document.getElementById("progressbar");
    element.classList.add("w-100");
    var element2 = document.getElementById("progressbar");
    element2.classList.remove("w-75");

    var element = document.getElementById("div4");
    element.classList.add("d-none");

    var element2 = document.getElementById("div5");
    element2.classList.remove("d-none");
}