let decompte = 0;

let timeout = function () {
    let timeout1 = setTimeout(function () {
        if (decompte <= (600000 / 2)){
            let div = document.createElement("div");
            div.innerHTML = "Hello, " + decompte;
            document.getElementById("timeout-div").appendChild(div);
            decompte ++;
            timeout();
        }
        else {
            clearTimeout(timeout1);
        }
    }, 2000);
}

document.getElementById("timeout").addEventListener("click", timeout);


