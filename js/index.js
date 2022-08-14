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