window.addEventListener("load", () => {
    let start = document.querySelector("#start");
    let pause = document.querySelector("#pause");
    let reset = document.querySelector("#reset");
    let minutes = document.querySelector("#minutes");
    let seconds = document.querySelector("#seconds");
    var vueltas = 0;
    let i = "1";
    let j = "1";

    start.addEventListener("click", () => {
        start.disabled = true;
        vueltas = setInterval(() => {
            if (i < 10) {
                i = "0" + i;
            }
            seconds.innerHTML = i;
            i++;
            if (i > 59) {
                i = "0";
                if (j < 10) {
                    j = "0" + j;
                }
                minutes.innerHTML = j;
                j++;
            }
        }, 1000);
    });
    pause.addEventListener("click", () => {
        start.disabled = false;
        clearInterval(vueltas);
    });
    reset.addEventListener("click", () => {
        start.disabled = false;
        clearInterval(vueltas);
        seconds.innerHTML = "00";
        minutes.innerHTML = "00";
        i = "1";
    });

});