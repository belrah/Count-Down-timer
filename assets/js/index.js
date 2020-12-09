<<<<<<< HEAD
window.onload = () => {
    var seconds = 00;
    var tens = 00;

    var appendseconds = document.getElementById("seconds");
    var appendtens = document.getElementById("tens");

    var buttonstart = document.getElementById("button-start");
    var buttonstop = document.getElementById("button-stop");
    var reset = document.getElementById("button-reset");

    var interval;

    buttonstart.onclick = () => {
        clearInterval(interval)
        interval = setInterval(startTimer, 10)
    }

    buttonstop.onclick = () => {
        clearInterval(interval)
    }

    reset.onclick = () => {
        clearInterval(interval);
        tens = 00;
        seconds = 00;

        appendseconds.innerHTML = seconds;
        appendtens.innerHTML = tens;

    }

    function startTimer() {
        tens++;
        if (tens < 9) {
            appendtens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            appendtens.innerHTML = tens;
        }

        if (tens > 99) {
            console.log("seconds");
            seconds++;
            appendseconds.innerHTML = "0" + seconds;
            tens = 0;
            appendtens.innerHTML = "0" + 0;
        }

        if (seconds > 9) {
            appendseconds.innerHTML = seconds;
        }
    }
}


//code snippet for time          


time_is_widget.init({
    Lagos_z01d: {
        time_format: "hours:minutes"
    }
=======
window.onload = () => {
    var seconds = 00;
    var tens = 00;

    var appendseconds = document.getElementById("seconds");
    var appendtens = document.getElementById("tens");

    var buttonstart = document.getElementById("button-start");
    var buttonstop = document.getElementById("button-stop");
    var reset = document.getElementById("button-reset");

    var interval;

    buttonstart.onclick = () => {
        clearInterval(interval)
        interval = setInterval(startTimer, 10)
    }

    buttonstop.onclick = () => {
        clearInterval(interval)
    }

    reset.onclick = () => {
        clearInterval(interval);
        tens = 00;
        seconds = 00;

        appendseconds.innerHTML = seconds;
        appendtens.innerHTML = tens;

    }

    function startTimer() {
        tens++;
        if (tens < 9) {
            appendtens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            appendtens.innerHTML = tens;
        }

        if (tens > 99) {
            console.log("seconds");
            seconds++;
            appendseconds.innerHTML = "0" + seconds;
            tens = 0;
            appendtens.innerHTML = "0" + 0;
        }

        if (seconds > 9) {
            appendseconds.innerHTML = seconds;
        }
    }
}


//code snippet for time          


time_is_widget.init({
    Lagos_z01d: {
        time_format: "hours:minutes"
    }
>>>>>>> c905e0c390eef35c0b425b879d3e4d7a0e5675da
});